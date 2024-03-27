<template>
  <div  v-if="proizvod">
      <div class="proizvod">
        <Header :title="proizvod.naziv"/>
          <!-- <img class="slika" v-if="proizvod.slika" :src="proizvod.slika" />
          <p v-else>Nema slike</p>
        <div class="info">
          <h3>{{ proizvod.naziv }}</h3>
          <div v-if="proizvod">
             {{proizvod.kategorija}} {{proizvod.materijal}} {{proizvod.boja}}
          </div>
        </div> -->
        <b-container class="bv-example-row">
          <b-row>
            <b-col cols="6" class="slika">
            <img :src="proizvod.slika" alt="">
          </b-col>
            <b-col cols="6" class="opis">
            <h3>{{ proizvod.naziv }}</h3>
            <hr>
            <!-- <h5>Kategorija: {{  proizvod.kategorija }}</h5> -->
            <p>{{ proizvod.opis }}</p>
            <div class="cena">
                <h4>{{ proizvod.cena.toLocaleString() }} RSD</h4>
            </div>

            </b-col>

          </b-row>
        </b-container>
      </div>
      </div>
    <div v-else>
        Loading...
      </div>
</template>
  
  <script>
  /*eslint-disable*/

  import Header from '@/components/Header.vue';
  import { mapActions, mapState } from 'vuex';
 
  export default {
    name: 'Proizvod',
    components: {
      Header
    },
    data(){
      return{
        proizvod: null
      }
    },
    mounted(){
      this.getProizvod(this.$route.params.id)
      .then( res => {
        this.proizvod = res;
      });
  
    },
    methods: {
    ...mapActions([
      'getProizvod'
    ])
  },


  }
  
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>

<style scoped>
.proizvod{
    margin: 40px;
    padding: 30px;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: white;
    border-radius: 40px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    font-family: 'Kanit', sans-serif;
    color: #213E51;
  }
  .slika{
    text-align: center;
  }

  img{
    width: 80%;
    border-radius: 40px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: all .8s ease;
   -webkit-transition: all .8s ease;
  }

  img:hover{
    transform: scale(1.03);
    transition: all .8s ease;
   -webkit-transition: all .8s ease;
  }
  .opis{
    margin-top: auto;
    margin-bottom: auto;
  }

  .proizvod h3{
    font-size: 37px;
    margin-bottom: -5px;
  }
  .proizvod h5{
    margin-top: 10px;
    font-size: 23px;
    color: #656565;
  }

  .proizvod p{
    font-size: 19px;
    color: #656565;
    font-weight: 400;
  }


</style>

  