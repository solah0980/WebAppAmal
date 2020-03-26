<template>
<div class="bg-login">
    <div class="container mt-5">
        <div class="row">
            <div class="form-login col-12">
                <form v-on:submit.prevent="loginUser" class="login-form">
                    <h3 class="col-md-12 headText"><i class="fas fa-sign-in-alt"></i> ระบบตรวจสอบอามัล</h3>
                    <div class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" v-model="email" placeholder="Email" required>
                        <input type="password" class="form-control mt-3" id="exampleInputPassword1" v-model="password" placeholder="Password" required>
                    </div>
                    <input type="submit" class="btn btn-info submit-login" value="เข้าสู่ระบบ">
                    <input type="button" class="btn btn-secondary submit-login mt-2" value="ลงทะเบียน" @click="getRouter('/register')">
                </form>
            </div>
            
        </div>
    </div>
</div>
    
</template>
<script>
import {mapState} from 'vuex'
import axios from 'axios'
export default {
    data(){
        return{
            email:null,
            password:null,
            status:false,
            error:null
        }
    },
    computed: {
        ...mapState(['isLogedIn','token'])
    },
    mounted() {
        this.checkLogedIn()
    },
    methods: {
       async loginUser(){
           let user = {
               email:this.email,
               password:this.password
           }
               try{
               axios.post(`http://localhost:8081/login`,user).then((result)=>{
                if(result.data.error){
                    this.error=result.data.error
                    swal({title: this.error,text: "ลองใหม่อีกครั้ง", icon: "error",button: "OK",})
                }else{
                    let user = result.data
                    this.$store.dispatch("setUser",user.user)
                    this.$store.dispatch("setToken",user.token)
                    this.$store.dispatch("setLogedIn",true)
                    swal({title: "เข้าสู่ระบบสำเร็จ",icon: "success",button: "OK",}).then((r)=>{
                        this.$router.push({
                            name:'index'
                        })
                     })
                }
            })
           }catch(err){
               console.log(err)
           }
        },
        getRouter(name){
            this.$router.push(name)
        },
        checkLogedIn(){
            if(this.token){
                this.$router.push('/')
            }
        },
    },
}
</script>
<style lscoped>
.bg-login{
    position: absolute;
    background-image: url('../../public/img/bg.jpg') ;
    background-repeat:no-repeat ;
    background-size:100% 100% ;
    height: 100%;
    width: 100%;
    color: white;
}
.headText{
    text-align: center;
    padding-bottom: 20px;
}
.login-form{
    width: 500px;
    margin: 0 auto;
    padding: 30px 65px;
    background: rgba(0, 0, 0, 0.4);
   box-shadow: 3px 6px 21px -7px rgba(0,0,0,0.75);
}
.btn {
    width: 100% !important;
}
.popup{
    width: 500px;
    margin: 20px auto;
}
.fade {
  opacity: 0;
  -webkit-transition: opacity 0.15s linear;
  -moz-transition: opacity 0.15s linear;
  -o-transition: opacity 0.15s linear;
  transition: opacity 0.15s linear;
}
.fade.in {
  opacity: 1;
  transition: 0.5;
}

@media screen and (max-width: 540px){
    .login-form{
        width: 370px;
        margin: 0 auto;
    }
    .headText{
        font-size:21px ;
    }
    .popup{
        width: 370px;
        margin: 20px auto;
    }
    .submit-login{
    width: none !important;
}
}

</style>
    
