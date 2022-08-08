<template>
 <!--- 
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> 
  --> 
  <router-view/>
</template>


<style>
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
   url(../public/font/Montserrat-VariableFont_wght.ttf) format("truetype");
}

@font-face {
  font-family: "play";
  src: local("play"),
   url(../public/font/play/PlayfairDisplay-VariableFont_wght.ttf) format("truetype");
}

#app {
  font-family: Montserrat,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding:0px;
  margin:0px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #208BC4;
}
</style>
