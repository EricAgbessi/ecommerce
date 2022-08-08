<template>
    <div class="scrollmenu">
       <Categorie  v-for="categorie in categories" 
            :id="categorie.id"
            :name="categorie.name"
            :icons="categorie.icons"
            :categorie="categorie"
        ></Categorie>
    </div>
</template>

<script>

import store from '@/store'
import Categorie from './categorie.vue'
    export default{
        name:"Categories",
        data(){
            return{
                categories:store.state.categories
            }  
        },
        components:{
            Categorie
        }
    }
</script>

<style scoped>
        div.scrollmenu {
            display: flex;
            overflow: auto;
            white-space: nowrap;
            margin-bottom:10px;
            background-color: white;
            border-radius: 0px 0px 15px 15px;
          }
          div.scrollmenu::-webkit-scrollbar {
              display: none;
          }
        
</style>