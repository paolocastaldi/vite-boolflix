<template>
    <li class="card">
        <h3>{{ item.title }}</h3>
        <h4>{{ item.original_title }}</h4>
        <p>{{ item.original_language }}</p>
        <img v-if="hasFlag" :src="flags[item.original_language]" width="30" alt="">
        <p v-else>{{ item.original_language }}</p>
        <p>{{ item.vote_average }}</p>
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
    data() {
        return {
            flags: {
                it: '/it.png',
                en: '/en.png'
            }
        }
    },
    computed: {
        hasFlag() {
            return this.flags[this.item.original_language] !== undefined
        }
    }
}
</script>
  
<style lang="scss" scoped></style>