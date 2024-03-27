<template>
    <div>
        <Header title="Kategorije nasih odela koje siju srpske majke"/>
        <b-pagination
          v-model="currentPage"
          :total-rows="this.kategorije.length"
          :per-page="perPage"
          aria-controls="tabelaKategorije"
        ></b-pagination>
        <b-table striped hover :items="kategorije" :fields="fields" id="tabelaKategorije" :per-page="perPage"
          :current-page="currentPage">
          <template #cell(logo)="data">
            <img v-if="data.value" :src="`${data.value}`" />
            <p v-else>Nema slike</p>   
          </template>
        </b-table>


    </div>
</template>

<script>
/* eslint-disable */

import Header from '@/components/Header.vue'
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Kategorije',
  components: {
    Header
  },
  data(){
    return{
      perPage:10,
      currentPage: 1,
      fields: [
        {
          key: "naziv",
          sortable: true,
          label: "Kategorija"
        },

    ]
    }
  },
  mounted(){
    this.fetchKategorije();

  },
  computed:{
    rows(){
      return this.kategorije.length;
    },
    ...mapState([
      'kategorije'
    ])

  },
  methods: {
      ...mapActions([
        'fetchKategorije'
      ])
      
  },


}
</script>
