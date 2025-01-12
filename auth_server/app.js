const { sequelize, User } = require('./models');

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

require('dotenv').config();

const app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));

app.post('/register', (req, res) => {
    const obj = {
        username: req.body.username,
        email: req.body.email,
        admin: false,
        password: bcrypt.hashSync(req.body.password, 10)
    };
    User.create(obj).then( rows => {
        const usr = {
            user_id: rows.id,
            username: rows.username,
            role: rows.admin
        };
        const token = jwt.sign(usr, process.env.ACCESS_TOKEN_SECRET);
        console.log(token);
        res.json({ token: token , id: rows.id});
    }).catch( err => res.status(500).json({ msg: "Error"}) );
});

app.post('/login', (req, res) => {
    User.findOne({ where: { username: req.body.username } })
      .then( usr => {
        if (bcrypt.compareSync(req.body.password, usr.password)) {
            const obj = {
                user_id: usr.id,
                username: usr.username,
                role: usr.admin
            };
            const token = jwt.sign(obj, process.env.ACCESS_TOKEN_SECRET);
            res.json({ token: token , id: usr.id, role: usr.admin});
        } else {
            res.status(400).json({ msg: "Invalid credentials"});
        }
      })
      .catch( err => res.status(500).json({ msg: "Invalid credentials"}) );
});

app.listen({ port: 9001 }, async () => {
    await sequelize.authenticate();
});