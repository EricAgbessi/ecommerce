<template>
    <appbarsec></appbarsec>
    <div class="content">
        <div class="img-product">
            <img class="prod-img" :src="img"  alt="">
        </div>
        <div class="other">
            <div class="name_prix">
                <p>{{ prodName}}</p>
                <p>{{ prodPrix}}</p>
            </div>
            <div class="qte_manage">
                <button  @click="least_qte()" >-</button>
                <p>{{qte}}</p>
                <button @click="add_qte()" >+</button>
            </div>
            <div class="img_select_sec">
                <h4>Selectionnez</h4>           
                <div class="img_select" >       
                    <span class="img" @click="changeImage(img1)"  >
                        <img class="small_img" :src="img1" />
                    </span>
                    <span class="img" @click="changeImage(img2)">
                         <img class="small_img" :src="img2" />
                    </span>
                    <span class="img" @click="changeImage(img3)">
                         <img class="small_img" :src="img3" />
                    </span>
                </div>
            </div>
            <div class="description">
                <h4>Description</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At earum quibusdam sint nisi exercitationem repellat itaque unde esse expedita? Nulla ex consequatur officiis blanditiis voluptatibus. Sed architecto quos dicta officia.</p>
            </div>
            <button class="add_to_cart">Ajouter au panier</button>
        </div>
    </div>
</template>
<script>
    import appbarsec from '@/components/appbarsec.vue'
    export default{
        name:"singleProduct",
        mounted(){
            this.img=this.$route.params.imageUrl
            this.prodName=this.$route.params.prodName
            this.prodPrix=this.$route.params.prodPrix
            this.img1=this.$route.params.img1
            this.img2=this.$route.params.img2
            this.img3=this.$route.params.img3

        },
        components:{
            appbarsec,
        },
        data(){
            return{
                img:null,
                img1:null,
                img2:null,
                img3:null,
                prodName:null,
                prodPrix:null,
                qte:0
            }
        },
        methods:{
            add_qte(){
                this.qte=this.qte+1
            },
            least_qte(){
                if(this.qte >0 ){
                    this.qte=this.qte-1
                }
            },
            changeImage(img){
                this.img=img
            }
        }
    }
</script>
<style>
    .content{
        display:flex;
        flex-direction: column;
        height: 100%;
        background-color: #F1F4FB;
        padding-top: 5px;
    }
   
    .img-product{
        max-width: 100%;
    }
    .other{
        height: 100%;
        flex-grow: 1;
        background-color: white;
        padding:10px 30px 0px 30px;

    }
    .prod-img{

        margin-left: auto;
        margin-right: auto;
        width: 80%;
       
    }
     .name_prix{
        display:flex;
        justify-content: space-between;
        font-weight: bold;
        font-size:15px;
    }

    .qte_manage{
        display: flex;
        height: 30px;
        padding: 10px;
    }
    .qte_manage button{
        background-color: white;
        border: none;
        font-weight: bold;
        padding: 0px;
        font-size: 20px;
    }
    .qte_manage p{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        font-weight: bold;
        font-size:20px;
        margin:0px 10px 0px 10px;
    }
    .img_select_sec{
        display: flex;
        flex-direction:column;
        align-items:flex-start;
    }
    .img_select{

    }
    .small_img{
        width:50px;
        height: 50px;
        margin:5px 10px;
        border-radius: 10px;
    }
    .description{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
     .description p{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align:left;
        font-size: 12px;
        margin-bottom:5px;
        margin-top: 5px;
    }
    .add_to_cart{
        width:100%;
        padding:10px;
        font-weight: bold;
        font-size: 14px;
        border-radius: 15px;
        border: none;
        background-color: #E82F24;
        color: white;
    }

</style>