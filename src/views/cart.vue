<template class="body">
    <appbarsec></appbarsec>
    <div class="container">
        <div class="head_cart">   
            <p>Mon panier</p>
            <p>Verifier et payer vos choix</p>
        </div>  
        <Cart_item v-for="item in cart_list" :img="item.imageUrl" :prodName="item.prodName" :prodPrix="item.prodPrix" :product="item"></Cart_item>
        <div class="resume">
            <p>Nombre de produit: {{get_cart_len}}</p>
            <p>Total: {{ get_cart_price }} FCFA</p>
        </div>
        <button class="add_to_cart">Proceder au payement</button>
    </div>
</template>

<script>
    import appbarsec from '@/components/appbarsec.vue'
    import Cart_item from '@/components/cart_item.vue'
    import cartlenght from '@/components/cartlenght.vue'
    import store from '@/store'

    export default{
        name:"Cart",
        components:{
            appbarsec,
            Cart_item,
            cartlenght
        },
        data(){
            return{
                cart_list: store.state.cart,
                cartlen: store.state.cartlen,
            }
        },
        methods:{
            
        },
        computed:{
            get_cart_len(){  
              return store.state.cart.length
            },
            get_cart_price(){ 
                let price=0; 
                for(let item of store.state.cart){
                    price=price+parseFloat(item.prodPrix)
                    console.log(price)
                }
              return price.toLocaleString('en-US');
            }
        }
    }

</script>

<style scoped>

    .container{
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        padding:0px 10px;
        min-height:100%;
    }
    .head_cart h1{
        font-weight: bold;
        margin:0px;
        padding: 0px;
    }
    .head_cart p{
        font-weight: bold;
        color: black;
        text-align: start;
    }
    .head_cart{
        margin: 0px;
    }
    .add_to_cart{
        margin-top:20px;
        padding:10px 10px;
        background-color:#E82F24 ;
        color:white;
        border: none;
        font-size: 16px;
        width:100%;
    }
    .resume{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-weight: bold;
        font-size:13px;
        width:100%;
        margin: 10px 0px;
    }

</style>
