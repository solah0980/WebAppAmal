<template>
    <div>
        <nav class="navbar navbar-light bg-navbar" v-if="isLogedIn">
            <div class="container">
                <div class="navbar-brand">
                        <img src="../../public/img/icons/wishlist.png" alt="logo" class="logo">
                        <h3 class="text-brand">ระบบเช็คอามัลตัวเอง</h3>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars fa-lg"></i>      
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                           <router-link to="/"><a class="nav-link" href="#">หน้าแรก</a></router-link> 
                        </li>
                        <li class="nav-item">
                            <router-link to="/check"><a class="nav-link" href="#">เช็คอามัล</a></router-link> 
                        </li>
                        <li class="nav-item">
                            <router-link to="/analysis"><a class="nav-link" href="#">ประเมิน</a></router-link> 
                        </li>
                        <li class="nav-item" hidden>
                            <a class="nav-link" href="#">แก้ไขข้อมูล</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click="Logout">ออกจากระบบ</a>
                        </li>
                    </ul>
                </div>
                
            </div>
            
        </nav>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(["user","isLogedIn"])
    },
    methods: {
        Logout(){
            try{
                this.$store.dispatch('setUser',null)
                this.$store.dispatch('setToken',null)
                this.$store.dispatch('setLogedIn',false)
                this.$router.push('/login')
            }catch(err){
                console.log(err)
            }
        }
    },
}
</script>
<style scoped>
nav{
    font-family: 'Sarabun', sans-serif;
}
.logo{
    width: 42px;
}
.text-brand{
    display: inline;
    font-size: 25px;
    margin-left:5px;
    font-family: 'Itim', cursive;
    color: white;
}
.nav-link{
    text-align: center;
    color: white !important;
}
.bg-navbar{
    background: linear-gradient(to right, #11998e , #38ef7d);
}
.navbar-light .navbar-toggler{
    border: none;
}
.fas{
    color: white;
}
</style>
    
