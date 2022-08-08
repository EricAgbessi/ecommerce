<template>
    <lu class="container">
        <li class="item">Viande</li>
        <li class="item">Vegetal</li>
        <li class="item">Concerve</li>
        <li class="item">boisson</li> 
         <li class="item">Viande</li>
        <li class="item">Vegetal</li>
        <li class="item">Concerve</li>
        <li class="item">boisson</li> 
         <li class="item">Viande</li>
        <li class="item">Vegetal</li>
        <li class="item">Concerve</li>
        <li class="item">boisson</li> 
    </lu>
</template>
<script>
    export default{
        name:'AppMenu',
    }
</script>

<style scoped>
    @media screen and (max-width: 500px) {
        .container{
            display:none;
        }
    }
    .container{
        display:flex;
        justify-content: center;
        overflow: auto;
        border:1px solid blueviolet;
        list-style-type: none;
    }
    .container::-webkit-scrollbar {
              display: none;
          }
    .item{
        margin: 10px;
    }
</style>