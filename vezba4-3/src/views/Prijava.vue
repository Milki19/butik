<template>
    <div>
      <Header v-bind:title="headerTitle"/>
      <b-alert :variant="statusnaPorukaTip" :show="statusnaPoruka!=null">
            {{ statusnaPoruka }}
        </b-alert>
        <div>
            <b-container fluid>
                <b-row>
                    <b-col sm="3">
                        <label for="email">Email</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input id="email" :state="validanEmail" v-model="forma.email"></b-form-input>
                    </b-col>
                    </b-row>

                    <b-row>
                    <b-col sm="3">
                        <label for="vreme">Vreme (formata hh:mm)</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input id="vreme" :state="validnoVreme" v-model="forma.vreme"></b-form-input>
                    </b-col>
                    </b-row>

                    <b-row>
                    <b-col sm="3">
                        <label for="razlog">Razlog dolaska</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-textarea id="razlog" :state="validanRazlog" v-model="forma.razlog" rows="4"></b-form-textarea>
                    </b-col>
                    </b-row>
                    </b-container>
            <b-button @click="posalji()" variant="primary">Posalji</b-button>
        </div>


    </div>
    
    
  
  </template>
  
  <script>
  /* eslint-disable */
  import Header from '@/components/Header.vue'
  
  export default {
    name: 'Prijava',
    components: {
      Header, 
    },
    data(){
      return{
        headerTitle: "Prijava promena podataka",
        statusnaPoruka: null,
        statusnaPorukaTip: null,
        forma: {
            email: null,
            vreme: null,
            razlog: null,
        }

      }
    },
    computed: {
        validanEmail(){
            if(this.forma.email == null) return null;
            else if(this.forma.email.length > 2) return true
            else return false;
        },
        validnoVreme(){
            if(this.forma.vreme == null) return null;
            else if(this.forma.vreme.length == 5) return true
            else return false;
        },
        validanRazlog(){
            if(this.forma.razlog == null) return null;
            else if(this.forma.razlog.length > 2) return true
            else return false;
        }
    },
    methods : {
        posalji(){
        if(this.validanEmail && this.validnoVreme && this.validanRazlog){
            fetch("http://localhost:9000/narudzbina", {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: "POST",
                body: JSON.stringify({
                    email: this.forma.email,
                    zakazanoVreme: this.forma.vreme,
                    razlogDolaska: this.forma.razlog,
                    status: "cekanje",
                    cena: "0",
                    adresa: "Cara Dusana 1346",
                }),
            })
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                if(res.error){
                    this.statusnaPoruka = res.error;
                    this.statusnaPorukaTip = 'danger';
                } else {
                    this.statusnaPoruka = "Prijava za promenu podataka je uspesno poslata";
                    this.statusnaPorukaTip = 'success';
                }
            });
        }
        else{
            return;
        }
}

    }
  
  
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
  