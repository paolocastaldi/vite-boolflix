<template>
    <li class="card">
        <img class="poster" :src="item.posterSrc" alt="">
        <h3>{{ item.title }}</h3>
        <h4>{{ item.originalTitle }}</h4>
        <img v-if="item.flag" :src="item.flag" width="30" alt="">
        <p v-else>{{ item.language }}</p>
        <p>{{ item.convertedVote }}</p>
        <ul>
            <li>
                <template v-for="n in 5" :key="n">
                    <font-awesome-icon v-if="n <= item.convertedVote" icon="fa-solid fa-star" />
                    <font-awesome-icon v-else icon="fa-regular fa-star" />
                </template>
            </li>
        </ul>
    </li>
</template>
  
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        getIconProp(n) {
            return n <= this.item.convertedVote ? 'fa-solid fa-star' : 'fa-regular fa-star'
        }
    }

}
</script>
  
<style lang="scss" scoped>
.poster {
    aspect-ratio: 1/1.5;
    object-fit: cover;
    object-position: center;
}
</style>