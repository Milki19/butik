const { sequelize, Proizvod, Kategorija, ProizvodMaterijal, Materijal, StavkaNarudzbine, Narudzbina } = require("./models");

const express = require('express');
const cors = require("cors");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const corsOptions = {
	origin: ['http://localhost:8000', 'http://127.0.0.1:8000', "http://localhost:8080"]
  };


app.use(cors(corsOptions));



app.get('/', (req, res) => {
    res.send('Hello from REST API service');
});


const bojaRoutes = require("./routes/materijal.js");
app.use("/materijal", bojaRoutes);

const kategorijaRoutes = require("./routes/kategorija.js");
app.use("/kategorija", kategorijaRoutes);

const narudzbinaRoutes = require("./routes/narudzbina.js");
app.use("/narudzbina", narudzbinaRoutes);

const proizvodRoutes = require("./routes/proizvod.js");
app.use("/proizvod", proizvodRoutes);

const usersRoutes = require("./routes/user.js");
app.use("/user", usersRoutes);

app.put("/promeni-cenu/:id", async (req,res)=>{
	try{
   	   	const jelo = await Proizvod.findByPk(req.params.id);
    	jelo.cena = req.body.cena;
    	jelo.save();
    	return res.json(jelo);
	} catch(err){
    	console.log(err);
    	res.status(500).json({ error: "Greska", data: err });
	}
});



app.listen({ port:9000 }, async () => {
	console.log("REST servis je pokrenut");
	await sequelize.sync({force:false});
	console.log("DB synced");
});