<template>
    <header>
        <div class="container">
            <div>
                BOOLFLIX
            </div>


            <div>
                <input type="text" placeholder="Cerca per nome" @keyup.enter="$emit('onSearch')" v-model="store.search">
                <button @click="$event => $emit('onSearch')">Cerca</button>

            </div>




        </div>
    </header>
</template>
  
  
<script>
import store from './store'
export default {
    data() {
        return {
            store,

        }
    },

}
</script>
  
  
<style lang="scss">
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>