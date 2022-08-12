<template>
    <appbarsec></appbarsec>
    <div class="container">
        <div class="title">
            Vérifier les Details
        </div>
        <div class="image">
            <div class="img">
            </div>
            <div class="commande">
                <p>Le montant de votre commande</p>
                <p>EREVAN</p>
                <p>75 FCFA</p>
            </div>
            
        </div>
        <div class="resum">
            <div class="ht">
                <p>Montant HT</p>
                <p class="m">500 <span class="fcfa">FCFA</span></p>
            </div>
            <div class="tax">
                <p>Tax & frais</p>
                <p class="m">2 <span class="fcfa">FCFA</span></p>
            </div>
            <hr>
            <div class="ttc">
                <p>Montant TTC *</p>
                <p class="m">520 <span class="fcfa">FCFA</span></p>
            </div>
        </div>

        <div class="payement_">
            <div class="pay">
                <div class="pay_imge">
                </div>
                <div class="pay_num">
                    <p>
                        1245 
                        &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022;
                    </p>
                </div>
            </div>
           
            <div class="pay_change">
                <p class="fcfa">Changer</p>
            </div>
        </div>
        <router-link to="/Checkout" class="add_to_cart">
            Proceder au payement
        </router-link>
    </div>
</template>

<script>
import appbarsec from '@/components/appbarsec.vue'
    export default{
        name:"Checkout",
        components:{
            appbarsec
        }
    }
</script>

<style scoped>
    .container{
        display:flex;
        flex-direction: column;
        padding:15px;
        overflow: hidden;
        overflow-x: hidden;
        background-color: #F4F4F4;
    }
    .title{
        font-weight: bold;
        font-size:18px;
        margin-top:10px;
    }
    .image{
        display:flex;
        flex-direction: row;
        height:120px;
        background-color: white;
        padding:5px;
        border-radius: 15px;
        margin-top: 10px;
    }
    .img{
        width:80px;
        height:100%;
        background-image:url("../assets/bg-pay.jpg");
        background-position: center;
        background-size: cover;
        border-radius:15px;
    }
    .commande{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 10px;
    }
    .commande > p{
        margin: 0px;
        margin-bottom: 13px;
        font-weight: bold;
        font-size: 14px;
    }
    .resum{
        display: flex;
        flex-direction: column;
        background-color: white;
        padding:10px;
        border-radius: 15px;
        margin-top: 15px;
    }
    .ht{
        display: flex;
        justify-content: space-between;
    }
    .ttc{
        display: flex;
        justify-content: space-between;
    }
    .tax{
        display: flex;
        justify-content: space-between;
    }
    hr{
        border:1px solid rgb(187, 187, 187);
        width: 100%;
    }
    .fcfa{
        color:#E82F24;
        font-weight: bold;
        font-size:12px;
    }
    .m{
        font-weight: bold;
    }
    .payement_{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        border-radius: 15px;
        margin-top: 15px;
        padding:0px 10px;
    }
    .pay{
        display:flex;
        flex-direction: row;
    }
    .pay_imge{
        background-image: url("../assets/visa.png");
        background-position: center;
        background-size: contain;
        width:70px;

    }
    .icon{

    }
    .add_to_cart{
        margin-top:20px;
        padding:10px 10px;
        background-color:#E82F24 ;
        color:white;
        border: none;
        font-size: 16px;
        border-radius: 15px;
        width:auto;
    }
</style>