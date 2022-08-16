<template>
    <appbarsec></appbarsec>
    <div class="container">
        <div class="cart">
            <div class="c_1">
                <p>AGBESSI ERIC KENET</p>
                <div :class="img"></div>
            </div>
            <div class="c_2">
                <p class="label">Numeros</p>
                <p class="numros">xxxx xxxx xxxx <span class="bold">1582</span></p>
            </div>
            <div class="c_3">
                <div class="my">   
                    <p class="label">MONTH/YEAR</p>
                    <p class="numros">
                        <span class="bold">01/23</span>
                    </p>
                </div>
                 <div>   
                    <p class="label">CVV</p>
                    <p class="numros">
                        XXX
                    </p>
                </div>
                
            </div>
        </div>
        <div class="cart_num">
            <p class="label">Numeros</p>
            <div class="nm">
                <div :class="img"></div>
                <input type="text" />
            </div>
        </div>
        <div>
            <input type="text" />
            <input type="text" />
        </div>
    </div>
</template>
<script>
    import appbarsec from '@/components/appbarsec.vue';
    export default{
        name:"EditCart",
        data(){
            return{
                img:"pay_imge"
            }
        },  
        components:{
            appbarsec
        }
    }
</script>
<style scoped>
    .container{
        display:flex;
        flex-direction:column;
        
    }
    .cart{
        height: 200px;
        margin:10px;
        border-radius:15px;
        background-color: #E0E7F5;

    }
     .pay_imge{
        background-image: url("../assets/visa.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width:70px;
        height:30px;
    }
    .c_1{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;
    }
    .c_1> p{
        font-weight:bold;
    }
    .c_2{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding:0px 10px;
    }
    .label{
        margin: 0px;
        font-weight:bold;
        color:rgb(148, 147, 147);
    }
    .numros{
        margin:0px;
    }
    .bold{
        font-weight: bold;
    }
    .c_3{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding:0px 10px;
        margin-top:40px;
    }
    .my{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .cart_num{
        display: flex;
        flex-direction: column;
        margin:10px 8px;
        align-items: flex-start;
    }
    .nm{
        display: flex;
        flex-direction: row;
    }
</style>