<template>
        <div class="col-produit-populaire">
            <Produit v-for="product in productlist"  :product="product" :imageUrl="product.imageUrl" :prodName="product.prodName" :prodPrix="product.prodPrix" :img1="product.img1" :img2="product.img2" :img3="product.img3" :isAddToCart="product.isAddToCart" />
        </div>
</template>

<script>
import Produit from './produit.vue'
import store from '@/store'
    export default{
        name:"Popular",
        data(){
            return{
                productlist:this.iSpopular()
            }
        },
        methods:{
            iSpopular(){
               let list=[]
                for(let product of store.state.productlist){
                    if(product.iSpopula==true){
                        list.push(product)
                    }
                }
                return list
            }
        },
        components:{
            Produit
        }
    }
</script>
  
<style>
.col-produit-populaire{
                display: flex;
                overflow-x: auto;
                overflow-y: hidden;
                height:200px;
                flex:1;
                background-color: white;
                margin-bottom: 10px;;
               
              }
              .col-produit-populaire::-webkit-scrollbar {
                  display: none;
              }
            

</style>