import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faStar } from '@fortawesome/free-solid-svg-icons'

import {
    faStar as faStarRegular,
    faUser,
} from '@fortawesome/free-regular-svg-icons'

library.add(faStar, faStarRegular, faUser)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
