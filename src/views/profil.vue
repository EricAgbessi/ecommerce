<template>
    <appbarsec ></appbarsec>
    <div class="body">
            <div class="profil-head">
                <img class="img_circle" src="../assets/im.jpg"  />
               <div>
                    <h4>Eric Agbessi</h4>
                    <h5>Erevan Benin</h5>
               </div> 
            </div>
        <div class="profil-list">
                <div>
                    <router-link to="/PersonnelInfo">
                        <fa class="icon fa" icon="id-card" />
                        Information Personnelle
                    </router-link>
                </div>
                
                <div>
                    <fa class="icon fa" icon="fa-exchange " />
                    Commande
                </div>
                <div class="notification">
                   <div class="not-ico" >
                        <fa class="icon fa" icon="fa-bell" />
                        Notification
                   </div> 
                    <div class="not-num">3</div>
                </div>
                <div>
                    <fa class="icon fa" icon="sign-out" />
                    Logout
                </div>
        </div>
    </div>

</template>

<script>
import appbarsec from '@/components/appbarsec.vue'
    export default {
        name:"Profil",
        components:{
            appbarsec
        }
    }
</script>

<style scoped>
    .body{
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        max-width:100%;
    }
    .profil-head{
        height: 200px ;
        width:100%;
        background-color:#208BC4;
        padding:5px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color:white;
        font-weight: bold;
    }
    .img_circle{
        width:100px;
        height:100px;
        border-radius: 50%;

    }
    .profil-list{
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    
        width: 100%;
        padding:0px;
        margin:0px
    }

    .profil-list > div {
        padding: 30px 0px 10px 30px;
        font-weight: bold;
        font-size: 12px;
    }
    .icon{
        margin-right: 10px;
    }
    .not-num{
        padding: 2px 5px;
        background-color: #E82F24;
        color:white;
        font-weight: bold;
    }
    .not-ico{
        margin-right: 70px;
    }
    .notification{
        display: flex;
        flex-direction:row;
    }
</style>