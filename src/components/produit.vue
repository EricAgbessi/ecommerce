<template>
        <div class="col-item-produit">
            <router-link  :to="{ name: 'singleProduct', params: {imageUrl: imageUrl,prodName:prodName,prodPrix:prodPrix,img1:img1,img2:img2,img3:img3,isAddToCart:isAddToCart}}">

                  <div class="image-bg" >
                      <img class="prod-image" v-bind:src="imageUrl" />
                  </div>
                  <p class="pro-prix">
                    {{prodPrix}} FCFA
                  </p>
                  <p class="nom-pro">
                    {{prodName}}
                  </p>
            </router-link>
                  <p :class="[isAddToCart?'del-btn':'add-btn']" @click="add_to_cart_()">
                    {{isAddToCart?"Retirer du panier":"Ajouter au panier"}}
                  </p>
        </div>      
</template>
<script>
import store from '@/store'
    export default{
        name:"Produit",
        props:['product','imageUrl','prodName','prodPrix','img1','img2','img3','isAddToCart'],
        data(){
            return{
                 btn_name:"Ajouter au panier",
                 btn_class:"add-btn",
                 btn_state:true
            }
        },
        methods:{
          add_to_cart_(){ 
            let is=this.product.isAddToCart==false
             //store.dispatch('add_cart_action', this.product)
             //console.log(store.state.cart)
            if(is==true){
               store.dispatch('add_cart_action', this.product)
               console.log(store.state)
            }
            else{
               store.dispatch('del_cart_action', this.product)
               console.log("Delete")
            }
        
          }
        }
    }

</script>
<style>
      a{
        color: black;
        text-decoration: none;
      }
      .col-item-produit{
                display: flex;
                flex-direction:column;
                justify-content: space-between;
                background-color: white;
                min-width:130px;
                max-width:130px;
                height:95%;
                border-radius:20px;
                overflow: hidden;
                margin:5px;
              }
              .prod-image{
                height: 110px;
                width: 100%;
              }
              .pro-prix{
                font-size:12px;
                color:#2a51ff;
                font-weight: bold;
                margin:0px;
                padding:2px;
              }
              
              .nom-pro{
                padding:2px;
                margin:0px;
                font-size:10px;
                font-weight: bold;
              }
            
              .add-btn{
                display: flex;
                justify-content: center;
                align-items: center;
                margin:0px;
                padding:3px;
                font-size:9px;
                height: 30px;
                color:white;
                font-weight:bold;
                background-color: #E82F24;
              }
              .del-btn{
                display: flex;
                justify-content: center;
                align-items: center;
                margin:0px;
                padding:3px;
                font-size:9px;
                height: 30px;
                color:white;
                font-weight:bold;
                background-color: gray;
              }
</style>