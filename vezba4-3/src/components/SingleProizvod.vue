<template>
    <div class="proizvod"  @click="kliknutProizvod(proizvod.id)">
        <div class="header">
            <h1>{{ title }}</h1>
        </div>
        <img v-if="proizvod.slika" :src="proizvod.slika" />
        <p v-else>Nema slike</p>    
        <h3>{{proizvod.naziv}}</h3>
    </div>

 </template>
   
   <script>

   /* eslint-disable */
   export default {
    name: 'SingleProizvod',  
    props: {
        title:String,
        proizvod: Object
    },
    methods:{
        kliknutProizvod(id){
            this.$router.push({ name: 'Proizvod', params: {id:id}});
        }
    },

}

   </script>
 
 <style scoped>
     .proizvod{
    width: 40%;
    margin: 3%;
    padding: 10px;
    border-radius: 40px;
    background-color: #FCFCFC;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    text-align: center;
    font-family: 'Kanit', sans-serif;
    color: #213E51;
    cursor: pointer;
  }

  h3{
    font-size: 20px;
    font-weight: 400;
  }

  h4{
    font-size: 18px;
    font-weight: 600;
  }

  .slika{
    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 100px;
    height: 300px;
    overflow: hidden;
    border-radius: 40px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  img{
    width: 110%;
    /* border-radius: 40px; */
    margin-bottom: -20px;
    margin-top: -70px;
    margin-left: -20px;
  }

  img:hover{
    transform: scale(1.1);
    transition: all .8s ease;
   -webkit-transition: all .8s ease;
  }

 </style>
 
 <style>
     @import url('https://fonts.googleapis.com/css2?family=Gloock&display=swap');
  </style>
   