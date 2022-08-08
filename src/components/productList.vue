<template>
    <div class="product_list">
       <Produit v-for="(product,index) in productlist" 
            :product="product"
            :imageUrl="product.imageUrl" 
            :prodName="product.prodName" 
            :prodPrix="product.prodPrix" 
            :img1="product.img1" 
            :img2="product.img2" 
            :img3="product.img3"
            :isAddToCart="product.isAddToCart"    
        />
    </div>
</template>
<script>
    import Produit from './produit.vue'
    import store from '@/store'
    export default{
        name:"ProductList",
        data(){
            return{
                productlist:store.state.productlist
            }
        },
        components:{
            Produit
        }
    }
</script>
<style>
    .product_list{
        display: flex;
        flex-wrap: wrap;
        background-color: white;
        justify-content: center;
    }
</style>