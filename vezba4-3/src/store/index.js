import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kategorije: [],
    proizvodi: [],
    sviProizvodi: [],
  },
  getters: {
  },
  mutations: {
    addKategorija(state, kategorije){
      state.kategorije = kategorije;
    },

    addProizvod(state, proizvod){
      state.proizvodi[proizvod.id] = proizvod;
    },
    addSviProizvodi(state, niz){
      state.sviProizvodi = niz;
    },

  },
  actions: {
    async fetchKategorije({commit}){
      fetch(`http://localhost:9000/kategorija/`)
        .then( res=>res.json() )
          .then( data => commit('addKategorija', data) );
    },

    async getProizvod({commit, state}, proizvodID){
      // eslint-disable-next-line
      return new Promise((resolve, reject)=>{
        if(state.proizvodi[proizvodID]){
          resolve(state.proizvodi[proizvodID]);
        }
        else{
          fetch(`http://localhost:9000/proizvod/${proizvodID}`)
            .then( res=>res.json() )
              .then( data=> {
                commit('addProizvod', data)
                resolve(data);
              });
        }
      });
    },
    async fetchSviProizvodi({commit}){
      fetch("http://localhost:9000/proizvod/")
        .then( res=>res.json() )
          .then( data=> commit('addSviProizvodi', data) );
    },



  },
  modules: {
  }
})
