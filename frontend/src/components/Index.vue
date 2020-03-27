<template>
    <div>
        <Navbar/>
        <div class="container">
            <h2 class="mt-4 text-dark">{{user.name}} {{user.lastname}} ชั้นมัธยมศึกษาปีที่ {{user.stdclass}}</h2>
            <div class="jumbotron mt-5" @click="navigateTo('/check')">
                <div class="row">
                    <h1 class="lead-card col-12" >เช็คอามัลตนเองประจำสัปดาห์</h1>
                </div>
            </div>
            <div class="jumbotron mt-5" @click="navigateTo('/analysis')">
                <div class="row">
                    <h1 class="lead-card col-12">ประเมินอามัลตนเอง</h1>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import Navbar from './Navbar'
import {mapState} from 'vuex'
export default {
    data(){
        return{}
    },
    created() {
        this.checkLogedIn()
    },
    computed: {
        ...mapState(["isLogedIn","user"])
    },
    components:{
        Navbar
    },
    methods:{
        checkLogedIn(){
            if(!this.isLogedIn){
                this.$router.push('/login')
            }
        },
     navigateTo(name){
        this.$router.push(name)
     }   
    },
    
}
</script>
<style  scoped>
h1{
    display: inline !important;
    text-align: center;
    color: white;
}
.jumbotron{
    background-image: url('../../public/img/img1.png');
    background-repeat:no-repeat ;
    width: 100%;
    height: 100%;
    cursor: pointer;
}
.jumbotron:hover{
    transition: 2ms;
    box-shadow: 3px 4px 18px -3px rgba(0,0,0,0.75);
}
@media screen and (max-width: 720px) {
    h1{
        font-size: 23px;
    }
    .jumbotron{
        background: linear-gradient(to right,#00F260,#0575E6);
    }
    h2{
        font-size: 22px;
    }
}
h2{
    text-align: center !important;
}
</style>