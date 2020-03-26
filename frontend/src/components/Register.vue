<template>
<div class="bg-login">
    <div class="container mt-5">
        <div class="row">
            <div class="form-login col-12">
                <form v-on:submit.prevent="register" class="login-form">
                    <h3 class="col-md-12 headText"><i class="fas fa-sign-in-alt"></i> ลงทะเบียน</h3>
                    <div class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" v-model="email" placeholder="Email" required>
                        <input type="password" class="form-control mt-3" id="exampleInputPassword1" v-model="password" placeholder="Password" required>
                        <input type="text" class="form-control mt-3"  v-model="name" placeholder="ชื่อ" required>
                        <input type="text" class="form-control mt-3"  v-model="lastname" placeholder="สกุล" required>
                        <select id="inputState" class="form-control mt-3" v-model="sex" aria-placeholder="เพศ" required>
                            <option value="ชาย">ชาย</option>
                            <option value="หญิง">หญิง</option>
                        </select>
                        <select id="inputState" class="form-control mt-3" v-model="stdclass" required>
                            <option value="4">มัธยมปีที่ 4</option>
                        </select>
                    </div>
                    <input type="submit" class="btn btn-info submit-login" value="ลงทะเบียน">

                </form>
            </div>
            
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            email:null,
            password:null,
            name:null,
            lastname:null,
            sex:null,
            stdclass:null,
            error:null
        }
    },
    methods: {
       async register(){
            let data = {
                email:this.email,
                password:this.password,
                name:this.name,
                lastname:this.lastname,
                sex:this.sex,
                stdclass:this.stdclass
            }
            try{
                let result = await axios.post('http://localhost:8081/student/register',data)
                if(result.data.error){
                    this.error = result.data.error
                    swal({title: this.error,text: "ลองใหม่อีกครั้ง", icon: "error",button: "OK",})
                }else{
                     swal({title: result.data, icon: "success",button: "OK",}).then(()=>{
                         this.$router.push('/login')
                     })
                }
            }catch(err){
                console.log(err)
            }
        }
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
.submit-login{
    width: 100%;
}
@media screen and (max-width: 540px){
    .login-form{
        width: 370px;
        margin: 0 auto;
    }
    .headText{
        font-size:21px ;
    }
}
</style>