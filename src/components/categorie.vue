<template>
      <router-link  :to="{ name: 'singleCategorie', params: {id:id,name:name}}">
         <div>
            <fa class="icon" :icon="icons"/>
            <p>{{ name }}</p>
        </div>
      </router-link>
</template>
<script>
export default{
    name:"Categorie",
    props:["id","name","icons","categorie"]
}
</script>
<style scoped>
      .icon{
            font-size: 18px;
            color:#E82F24;
          }
          
         div {
            color: black;
            text-align: center;
            text-decoration: none;
            width:auto;
            padding-top:10px;
            padding-bottom:10px;
            margin-left: 25px;
            margin-right: 25px;

          }

           p {
            padding:0px;
            margin:0px;
            font-size:12px
          }
          

</style>