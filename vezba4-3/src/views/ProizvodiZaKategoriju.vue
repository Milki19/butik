<template>
    <div>
      <Header :title="headerTitle" />
      <b-pagination
        v-model="currentPage"
        :total-rows="proizvodiZaKategoriju.length"
        :per-page="perPage"
        aria-controls="tabelaProizvoda"
      ></b-pagination>
      <b-table striped hover :items="proizvodiZaKategoriju" :fields="fields" id="tabelaProizvoda" :per-page="perPage"
        :current-page="currentPage">
        <template #cell(slika)="data">
          <img v-if="data.value" :src="`${data.value}`" />
          <p v-else>Nema slike</p>   
        </template>
      </b-table>
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue'
  import { mapActions, mapState } from 'vuex';
  
  export default {
    name: 'ProizvodiZaKategoriju',
    components: {
      Header
    },
    data() {
      return {
        perPage: 10,
        currentPage: 1,
        fields: [
          {
            key: "naziv",
            sortable: true,
            label: "Proizvod"
          },
          
        ]
      }
    },
    computed: {
      headerTitle() {
        
        return this.$store.getters.trenutnaKategorijaNaziv || "Proizvodi za kategoriju";
      },
      proizvodiZaKategoriju() {
        // Filtriranje proizvoda samo za trenutnu kategoriju
        const trenutnaKategorijaId = this.$route.params.kategorijaId;
        return this.proizvodi.filter(proizvod => proizvod.kategorija_id == trenutnaKategorijaId);
      },
      ...mapState([
        'proizvodi'
      ])
    },
    methods: {
      ...mapActions([
        'fetchProizvodi'
      ]),
      // Dodajte druge metode prema potrebi
    },
    mounted() {
      // Fetch proizvoda kada se komponenta montira
      this.fetchProizvodi();
    }
  }
  </script>
  