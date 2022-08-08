<template>
    <div class="container_">
        <div class="cont_">
             <div class="cart_img_box">
                <img :src="img" class="cart_img" alt="">

            </div>
            <div class="cart">
                <div class="cart_desc">
                    <p>{{prodName}}</p>
                    <p class="p_prix">{{prodPrix}} FCFA</p>
                </div>
                <div class="qte_manage">
                    <button  @click="least_qte()" >-</button><span class="Space">|</span>
                    <p>{{qte}}</p><span class="Space">|</span>
                    <button @click="add_qte()" >+</button>
                </div>   
            
            </div>
            <div class="icon_del" @click="deltocart()">
                <fa class="icon fa" icon="trash" />
            </div>  
        </div>
       
       
    </div>
</template>
<script>
    import store from '@/store'
    export default{

        name:"cart_item",
        props:["img", 'prodName','prodPrix','qte','product'],
        data(){
            return{
               /* img:null,
                prodName:null,
                prodPrix:null,
                qte:0*/
            }
        },
        methods:{
            add_qte(){
                this.qte=this.qte+1
            },
            least_qte(){
                if(this.qte >0 ){
                    this.qte=this.qte-1
                }
            },
            changeImage(img){
                this.img=img
            },

            deltocart(){
                store.dispatch('del_cart_action', this.product)
            }
        }
    }
    
</script>

<style scoped>
    .container_{
        display: flex;
        flex-direction:row ;
        width: 100%;
        height:100px;
        margin-bottom:20px;
    }
    .cont_{
         display: flex;
        flex-direction:row ;
        width: 100%;
        height:100px;
        padding: 5px;
        border-radius:10px;
        border: 1px solid rgb(152, 182, 226);

    }
    .cart_img_box{
        border-radius:10px;
        height: 100%;
        width:120px;
    }
    .cart_img{
        width:100%
        
    }
    .cart_desc p{
        padding:5px;
        margin: 0px;
        text-align: start;
        font-size:14px;
    }
    .Space{
        font-weight: bold;
        font-size:20px;
        margin: 0px 10px 0px 10px;
    }
    .delete{
        width:100%;
    }
    .cart{
        display: flex;
        flex-direction:column;
        justify-content: space-between;
        width: 100%;

    }
      .qte_manage{
        display: flex;
        height: 10px;
        padding: 10px;
        justify-content: center;
        align-items: center;

    }
    .qte_manage button{
        background-color: white;
        border: none;
        font-weight: bold;
        padding: 0px;
        font-size: 20px;
    }
    .qte_manage p{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        font-weight: bold;
        font-size:20px;
        margin:0px 10px 0px 10px;
    }
    .p_prix{
        font-weight:bold;
        color:blueviolet;
    }
    .icon_del{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding:10px;
        margin: 5px;
        background-color:rgb(247, 157, 157); 
        border-radius: 10px;
    }
    .icon{
        color: white;
        font-size: 20px;
    }
</style>