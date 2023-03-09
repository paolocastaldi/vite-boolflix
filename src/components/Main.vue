<template>
    <main>
        <div class="container">
            <ul class="grid">
                <Cards v-for="el in items" :key="el.id" :item="el" />
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
            store,
            flags: {
                it: '/it.png',
                en: '/en.png'
            }
        }
    },
    computed: {
        movies() {
            return this.store.movies
        },
        items() {
            const { tv, movies } = this.store

            const items = [...movies, ...tv]
            return items.map((item) => {
                const isMovie = item.title !== undefined
                return {
                    title: isMovie ? item.title : item.name,
                    originalTitle: isMovie ? item.original_title : item.original_name,
                    language: item.original_language,
                    vote: item.vote_average,
                    flag: this.flags[item.original_language],
                    overview: item.overview,

                    isMovie: isMovie,
                }
            })
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