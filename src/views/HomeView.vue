<template>
  <div class="home">
    <AppBar></AppBar>
   <!--<AppMenu></AppMenu>-->
    <HomeSlider></HomeSlider>
    <CategoriesList></CategoriesList>
    <Spacer></Spacer>
    <Popular></Popular>
     <Spacer></Spacer>
    <ProductList></ProductList>
    <div class="container">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AppBar from '@/components/AppBar.vue'
import AppMenu from '@/components/AppMenu.vue'
import HomeSlider from '@/components/HomeSlider.vue'
import CategoriesList from '@/components/categoriesList.vue'
import Popular from '@/components/popular.vue'
import Spacer from '@/components/spacer.vue'
import ProductList from '@/components/productList.vue'
import install from '@/components/install.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    AppBar,
    AppMenu,
    HomeSlider,
    CategoriesList,
    Popular,
    Spacer,
    ProductList,
    install
  }
}
</script>

<style scoped>
  .container{
    display:flex;
    justify-content: center;
    flex-direction: row;
    margin:0px;
  }
  .home{
    background-color: #F1F1F1;
  }

</style>