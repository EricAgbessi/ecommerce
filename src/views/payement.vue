<template>
    <appbarsec></appbarsec>
    <div class="select-payement">
        <div class="payement_">
            <div class="pay">
                <div class="card_imge">
                </div>
                <div class="pay_num">
                    <p>
                        1245 
                        &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022;
                    </p>
                </div>
            </div>
           
            <div class="pay_change">
                <input name="cart" type="radio" />
            </div>
        </div>
        
        <div class="payement_">
            <div class="pay">
                <div class="mm_imge">
                </div>
                <div class="pay_num">
                    <p>
                        1245 
                        &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022;
                    </p>
                </div>
            </div>
           
            <div class="pay_change">
                <input name="cart" type="radio" />
            </div>
        </div>

        <div class="payement_">
            <div class="pay">
                <div class="mmo_imge">
                </div>
                <div class="pay_num">
                    <p>
                        1245 
                        &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022;
                    </p>
                </div>
            </div>
           
            <div class="pay_change">
                <input name="cart" type="radio" />
            </div>
        </div>
        <button class="cart">Edit Cart</button>
    </div>
</template>
<script>
import appbarsec from '@/components/appbarsec.vue';
export default{
    name:"payement",
    components:{
        appbarsec
    }
}
</script>
<style>
    .select-payement{
        padding:10px;
       
    }
    .payement_{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #F6F8FA;
        
        border-radius: 15px;
        margin-top: 15px;
        padding:0px 10px;
    }
    .pay{
        display:flex;
        flex-direction: row;
    }
    .card_imge{
        background-image: url("../assets/visa.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        width:70px;

    }
    .mm_imge{
        background-image: url("../assets/moov.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        width:70px;

    }
    .mmo_imge{
        background-image: url("../assets/mtn.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width:70px;

    }
    .cart{
        padding:10px 10px;
        background-color:#E82F24 ;
        color:white;
        border: none;
        font-size: 16px;
        border-radius: 15px;
        width:100%;
        position:absolute;
        bottom:20px;
        left:0px;
    }

</style>