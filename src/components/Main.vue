<template>
    <main>
        <div class="container">
            <ul class="grid">
                <Cards v-for="movie in movies" :key="movie.id" :item="movie" />
            </ul>
        </div>
    </main>
</template>
  
<script>
import store from './store'
import Cards from './Cards.vue'
export default {
    components: {
        Cards
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