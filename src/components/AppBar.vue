<template>
    <ul class="navbar">
        <li class="logo-li">
          <router-link to="/install">
            <img class="logo" src="../assets/logo.png" alt="">
          </router-link>
        </li>
        <li class="search-li">
          
            <input class="search-input" type="text" placeholder="Rechercher un produit..."/>
        </li>
        <li class="cart">
              <router-link to="/cart">
                  <fa class="icon fa" icon="cart-shopping" />
                  <span class='badge badge-warning' id='lblCartCount'> {{ cartlen }} </span>
              </router-link>
        </li>
        
        <li >
          <router-link to="/Profil">
             <fa class="icon" icon="user" />
          </router-link>
        </li>
    </ul>
</template>
<script>
import store from '@/store'
    export default{
        name:"AppBar",
        data(){
          return{
            cartlen:store.state.cartlen 
          }
        },
        computed:{
          get_cart_len(){  
              return store.state.cart.length
          }
        }
    }
</script>
<style scoped>


.navbar {
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
}
.badge {
  padding-left: 9px;
  padding-right: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}
.cart{
  width:55px;
}
.label-warning[href],
.badge-warning[href] {
  background-color: #c67605;
}
#lblCartCount {
    font-size: 12px;
    background: #ff0000;
    color: #fff;
    padding: 0 5px;
    vertical-align: top;
    margin-left: -2px; 
    font-weight: bold;
}

ul{
    display:flex;
    list-style-type:none;
    justify-content: space-between;
    align-items: center;
    background-color: #208BC4;
    margin:0px;
    padding: 0px;
    height:55px;
}
.icon{
  color:white;
  font-size: 20px;
}
.icon-search{
  color:black;
  border:1px solid black;
}

.search-li{
  width:80%;
  padding:0px;
  margin: 0px;
}
.search-input{
  width:100%;
  border-radius:15px;
  font-size: 12px;
}
li{
    padding:7px;
}
.logo{
    width:40px;
    height: 35px;
}
.search-input{
  height: 25px;
  width: 80%;
}
 /*  ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #04AA6D;
}

    
@media screen and (max-width: 500px) {
   ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #04AA6D;
}
}*/
</style>