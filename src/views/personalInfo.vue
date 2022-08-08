<template>
    <appbarsec></appbarsec>
    <div class="body">
        <h2>Infomation du compte</h2>

        <button type="button" @click="colaps_info" :class="colapsClassNameInfo">Infomation Personnelle</button>
        <div :class="display_info">
            <div class="info-perso">
                <h5>Infomation personelle</h5>
                <div class="content">
                    <div  class="item_"><span>Nom:</span><span class="span">AGBESSI</span></div>
                    <div  class="item_"><span>Prenoms:</span><span class="span">Eric</span></div>
                    <div  class="item_"><span>Addrese</span><span class="span">Cotonou Benin</span></div>
                    <div  class="item_">
                        <span>Mot de passe</span> 
                        <span>
                            <fa class="icon fa" icon="fa-circle" />
                            <fa class="icon fa" icon="fa-circle" />
                            <fa class="icon fa" icon="fa-circle" />
                            <fa class="icon fa" icon="fa-circle" />
                            <fa class="icon fa" icon="fa-circle" />
                        </span>
                        
                    </div>
                    <button>Modifier</button>
                </div>
            </div>
        </div>
        <button type="button"  @click="colaps_address" :class="colapsClassNameaddress">Address de livraison</button>
        <div :class="display_address">
            <div class="content">
                <div  class="item_ad"><span class="ad">Address 1:</span><span class="span">Mon adresse postale est 7 rue des Fleurs 37000 Tours.</span></div>
                <div  class="item_ad"><span class="ad">Address 2:</span><span class="span">Mon adresse postale est 7 rue des Fleurs 37000 Tours.</span></div>
                <div  class="item_ad"><span class="ad">Address 3:</span><span class="span">Mon adresse postale est 7 rue des Fleurs 37000 Tours.</span></div>
                <div  class="item_ad"><span class="ad">Address 4:</span><span class="span">Mon adresse postale est 7 rue des Fleurs 37000 Tours.</span></div>
                <button>Modifier</button>
            </div>
        </div>
        <button type="button" @click="colaps_payement" :class="colapsClassNamePayement">Payement</button>
        <div :class="display_payement">
            <div class="infolist">
                <div class="item selected">
                    <img class="img" src="../assets/visa.png" />
                    <div>
                        <h6>Information de la carte</h6>
                        <div class="form">
                            <label>Numeros de carte</label>
                            <input disabled class="input"  type="password" placeholder="Ex: &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022; 1452" />
                            <label>Date D'expiration</label>
                            <input disabled class="input" placeholder="14/08"/>
                            <label>Code CVC</label>
                            <input disabled class="input"  placeholder="Ex: &#x2022;&#x2022;&#x2022;" />
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img class="img" src="../assets/mtn.png" />
                    <h4>Information mobile monney</h4>
                        <div class="form">
                            <label>Numeros de telephone</label>
                            <input disabled class="input" type="password" placeholder="Ex:&#x2022;&#x2022; &#x2022;&#x2022; &#x2022;&#x2022; 36" />
                        </div>

                </div>
                <div class="item">
                    <img class="img" src="../assets/moov.png" />
                    <h4>Information moov monney</h4>
                        <div class="form">
                            <label>Numeros de telephone</label>
                            <input disabled class="input" type="password" placeholder="Ex:&#x2022;&#x2022; &#x2022;&#x2022; &#x2022;&#x2022; 85" />
                        </div>
                </div>        
            </div>
            <button>Modifier</button>
        </div>


    </div>
</template>
<script>
    import appbarsec from '@/components/appbarsec.vue'
    export default{
        name:"PersonnelInfo",
        components:{
            appbarsec
        },
        data(){
            return{
                colapsClassNameInfo:"collapsible",
                colapsClassNameaddress:"collapsible",
                colapsClassNamePayement: "collapsible",

                display_info:"display-none",
                display_address:"display-none",
                display_payement:"display-none"
            }
        },
        methods:{
            colaps_info(){
               
                if (this.display_info === "display-block") {
                    this.display_info="display-none"
                     this.colapsClassNameInfo="collapsible"
                } else {
                    this.display_info = "display-block";
                    this.colapsClassNameInfo="collapsible active"
                }
            },
             colaps_address(){
                if (this.display_address === "display-block") {
                    this.display_address="display-none"
                    this.colapsClassNameaddress="collapsible"
                } else {
                    this.display_address = "display-block";
                    this.colapsClassNameaddress="collapsible active"
                }
            },
            colaps_payement(){
                this.colapsClassNamePayement="collapsible active"
                if (this.display_payement === "display-block") {
                    this.display_payement="display-none"
                    this.colapsClassNamePayement="collapsible"
                } else {
                    this.display_payement = "display-block";
                    this.colapsClassNamePayement="collapsible active"
                }
            }
        }
    }

  /*var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }*/
</script>

<style scoped>
    .body{
        display: flex;
        flex-direction: column;
        padding:5px;
    }
    .point{
        margin-left: 15px;
    }
    .span{
        margin-left: 15px;
    }
    .content{
        width: 100%;
    }
    button{
        margin-top:20px;
        padding:10px 10px;
        background-color:#E82F24 ;
        color:white;
        border: none;
        font-size: 16px;
        width:100%;
    }
    .ad{
        color:#E82F24
    }
    .item_{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding:10px 5px;
        width: 100%;
        font-weight: bold;
        font-size:12px;
    }
    .item_ad{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding:10px 5px;
        width: 100%;
        font-weight: bold;
        font-size:12px;

    }
    .info-perso{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding:10px;
    }
    .infolist{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding-top:20px;
        width: 100%;

    }
    .item{
        width:auto;
        font-weight: bold;
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        font-size:12px;

    }
    .img{
        width:70px;
    }
    .selected{
    }

    .collapsible {
        background-color: #208BC4;
        color: white;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 12px;
        }

        .active, .collapsible:hover {
        }

        .display-none{
            display: none;
            padding: 0 18px;
            overflow: hidden;
        }

        .display-block{
            display: block;
            padding: 0 18px;
            overflow: hidden;
        }
        .form{
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            width:100%;
        }
        .input{
            padding:5px;
            margin: 15px;
            font-size: 16px;
        }


</style>