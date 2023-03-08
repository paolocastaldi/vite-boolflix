<template>
  <div>
    <Header @onSearch="fetchData" />
    <Main />
  </div>
</template>


<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Cards from './components/Cards.vue';
import store from './components/store';
import axios from 'axios'

export default {
  components: {
    Header,
    Main,
  },
  methods: {
    fetchData() {
      console.log('fetch data')

      this.fetchMovies()

    },
    fetchMovies() {

      const url = this.store.config.BASE_URI + '/search/movie'


      axios.get(url, {
        params: {
          api_key: this.store.config.API_KEY,
          query: this.store.search,
          language: 'it-IT'
        }
      }).then(res => {
        console.log(res)
        const { results } = res.data
        this.store.movies = results
        console.log(this.store.movies)
      }).catch(() => {
        this.store.movies = []
      })

    }
  }

}
</script>


<style lang="scss"></style>
