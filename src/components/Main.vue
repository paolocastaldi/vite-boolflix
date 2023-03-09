<template>
    <main>
        <div class="container">
            <ul class="grid">
                <li Card v-for="movie in store.movies" :key="movie.id">
                    <h3>{{ movie.title }}</h3>
                    <h4>{{ movie.original_title }}</h4>
                    <p>{{ movie.language }}</p>
                    <p>{{ movie.vote_average }}</p>
                </li>
            </ul>
        </div>
    </main>
</template>
  
<script>
import store from './store'
import Card from './Cards.vue'
export default {
    components: {
        Card
    },
    data() {
        return {
            store
        }
    },
    computed: {
        movies() {
            return this.store.movies
        }
    }
}
</script>
  
<style lang="scss" scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
}
</style>