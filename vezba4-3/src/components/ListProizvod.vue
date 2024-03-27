<template>
    <div>
        <div class="header">
        <h1>{{ title }}</h1>
    </div>
    <div>
        <SingleProizvod v-for="proizvod in proizvodi" :key="proizvod.id" :proizvod="proizvod" />
    </div>
  </div>
 </template>
   
   <script>
   /* eslint-disable */

    import SingleProizvod from './SingleProizvod.vue'
    import { mapActions, mapState } from 'vuex';

   export default {
    name: 'ListProizvod',
    components: {
        SingleProizvod,
    },
    data() {
    return {
      proizvodi: [],
    };
  },
  props: {
    title:String,
    proizvodIDs: Array,
  },
   methods: {
    ...mapActions([
      'getProizvod'
    ])
  },
    mounted() {
        this.proizvodIDs.map( obj => {
            this.getProizvod(obj.id)
              .then( proizvod => this.proizvodi.push(proizvod) );

        });
    },
    watch: {
        proizvodIDs(nVal) {
            this.proizvodi = [];
            nVal.map((obj) => {
              this.getProizvod(obj.id)
              .then(proizvod => this.proizvodi.push(proizvod));

            });
        }
    }
    

}; 
   </script>
 
 <style scoped>
     .header{
         font-family: 'Gloock', serif;
         text-align: center;
     }
 </style>
 
 <style>
     @import url('https://fonts.googleapis.com/css2?family=Gloock&display=swap');
  </style>
   