<template>
     <div class="apphead">
            <div class="back_icon">
                <fa  @click="$router.go(-1)" class="icon-back" icon="fa-solid fa-arrow-left-long"/>
            </div>
            <div class="favorite_icon">
                 <fa class="icon" icon="fa-solid fa-heart"/>
            </div>
        </div>
</template>
<script>
    export default{
        name:"appBarsec"
    }
</script>
<style>
     .apphead{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:5px 20px 5px 20px;
        max-width:100%;
        height:30px;
        overflow-x: hidden;
        background-color: #208BC4;
    }
    .favorite_icon{
        display: flex;
        justify-content: center;
        align-items: center;
        padding:10px;
        border-radius: 50%; 
        background-color: white;
    }
    .icon-back{
        font-size: 20px;
        color: white;
    }
</style>