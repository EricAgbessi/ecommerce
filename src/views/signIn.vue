<template>
    <appbarsec></appbarsec>
    <div class="container">
        <div class="logo">
            <img src="../assets/info-perso.png" width="30%" />
        </div>
        <input class="input" placeholder="Email" type="text" />
        <input class="input"  placeholder="Password" type="text" />
        <button class="button">Connexion</button>
        <div class="social_connexion">
            <div class="google">
                <img src="../assets/google.png" width="10%"/>
                <p>Continuez avec google</p>
            </div>
            <div class="facebook">
                <img src="../assets/facebook.png" width="10%"/>
                <p>Continuez avec facebook</p>
            </div>
        </div>
        <p>Mot de passe Oublier ?</p>
        <router-link to="/SignUp">
            <p>S'inscrire</p>
        </router-link>
    </div>
</template>

<script>
import appbarsec from '@/components/appbarsec.vue';
 export default{
    name:"SignIn",
    components:{
        appbarsec
    }
 }
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;

        height: 100%;
    }
    .logo{
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
    }
    .input{
        margin:5px 8px;
        height:40px;
        border-radius:20px;
        font-size: 20px;
        padding:5px 15px;
        border:2px solid #ccc;
    }
    .button{
        margin:30px 10px;
        height: 45px;
        border-radius:20px;
        font-size: 18px;
        border:none;
        background-color: #E82F24;
        color:white;
    }
    .social_connexion{
        display:flex;
        flex-direction: column;
        padding:10px;
    }
    .google{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        margin:10px 2px;
        background-color: bisque;
        padding:5px 10px;
        border-radius:20px;
        font-weight: bold;
    }
    .facebook{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        margin:10px 2px;
        background-color: bisque;
        padding:5px 10px;
        border-radius:20px;
        font-weight: bold;
    }
</style>