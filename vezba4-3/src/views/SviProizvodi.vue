<template>
    <div>
      <Header :title="headerTitle" />
      <div>
      <!-- <ListProizvod :proizvodIDs="sviProizvodi.slice(current*10, current*10+10)"/> -->
      <ListProizvod v-if="sviProizvodi" :proizvodIDs="sviProizvodi.slice(current*10, current*10+10)"/>
      <p v-else>Lista još nije spremna</p>
      </div>
    </div>
  
  </template>
  
  <script>

  import Header from '@/components/Header.vue'
  import ListProizvod from '@/components/ListProizvod.vue'
  import { mapActions, mapState } from 'vuex';
  
  
  export default {
    name: 'SviProizvodi',
    components: {
      Header, 
      ListProizvod,
    },
    data(){
      return{
        headerTitle: "Butik",
        current: 0
      }
    },
    computed:{
    ...mapState([
      'sviProizvodi'
    ])
  },
    methods:{
      ...mapActions([
        'fetchSviProizvodi'
      ]),
      next(){
        if (this.sviProizvodi.length == null) {
          return;
        }else if( this.current * 10 < this.sviProizvodi.length ){
          this.current++;
        }
      },
      prev(){
        if( this.current > 0){
          this.current--;
        }
      },
      


    },
    mounted(){
      this.fetchSviProizvodi();
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
  