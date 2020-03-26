<template>
  <div>
    <Navbar />
    <div class="container">
      <form class="check-form" @submit.prevent="SendData">
        <div class="row">
          <!-- แบบฟอร์การละหมาด -->
          <div class="form-group col-md-4">
            <p class="head-form">ละหมาดฟัรฏู</p>
            <div class="row d-flex justify-content-center">
              <label class="head-input col-2 col-md-3">มัฆริบ</label>
              <input
                type="number"
                max="10"
                class="form-control col-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="pray[0].point"
                required
              />
              <label class="head-input col-2 col-md-3">คะแนน</label>
            </div>
            <div class="row d-flex justify-content-center mt-2">
              <label class="head-input col-2 col-md-3">อิชาอฺ</label>
              <input
                type="number"
                max="10"
                class="form-control col-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="pray[1].point"
                required
              />
              <label class="head-input col-2 col-md-3">คะแนน</label>
            </div>
            <div class="row d-flex justify-content-center mt-2">
              <label class="head-input col-2 col-md-3">ศุบฮฺ</label>
              <input
                type="number"
                max="10"
                class="form-control col-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="pray[2].point"
                required
              />
              <label class="head-input col-2 col-md-3">คะแนน</label>
            </div>
            <div class="row d-flex justify-content-center mt-2">
              <label class="head-input col-2 col-md-3">ซุฮฺรี</label>
              <input
                type="number"
                max="10"
                class="form-control col-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="pray[3].point"
                required
              />
              <label class="head-input col-2 col-md-3">คะแนน</label>
            </div>
            <div class="row d-flex justify-content-center mt-2">
              <label class="head-input col-2 col-md-3">อัศรี</label>
              <input
                type="number"
                max="10"
                class="form-control col-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="pray[4].point"
                required
              />
              <label class="head-input col-2 col-md-3">คะแนน</label>
            </div>
          </div>

          <!-- แบบฟอร์การละหมาดซนนะฮ์ -->
          <div class="form-group col-md-4">
            <p class="head-form">ละหมาดซุนนะฮฺ</p>
            <div class="row d-flex justify-content-center">
              <label class="head-input col-6 col-md-3">ละหมาดซุนนะฮฺก่อน-หลัง(12 ร็อกอะฮฺ)</label>
              <input
                type="number"
                max="10"
                class="form-control col-2"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="praysunnah[0].point"
                required
              />
              <label class="head-input col-2 col-md-3">คะแนน</label>
            </div>
            <div class="row d-flex justify-content-center mt-3">
              <label class="head-input col-2 col-md-3">ฏูฮา</label>
              <input
                type="number"
                max="10"
                class="form-control col-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="praysunnah[1].point"
                required
              />
              <label class="head-input col-2 col-md-3">คะแนน</label>
            </div>
            <div class="row d-flex justify-content-center mt-2">
              <label class="head-input col-2 col-md-3">ละหมาดในยาค่ำคืน</label>
              <input
                type="number"
                max="10"
                class="form-control col-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="praysunnah[2].point"
                required
              />
              <label class="head-input col-2 col-md-3">คะแนน</label>
            </div>
          </div>

          <!-- แบบฟอร์อิบาดัร -->
          <div class="form-group col-md-4">
            <p class="head-form">อิบาดัร และซุนนะฮฺอื่นๆ</p>
            <div class="row d-flex justify-content-center">
              <label class="head-input col-4 col-md-4">อ่านอัลกุรอาน</label>
              <input
                type="number"
                max="10"
                class="form-control col-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="ebadat[0].point"
                required
              />
              <label class="head-input col-2 col-md-3">คะแนน</label>
            </div>
            <div class="row d-flex justify-content-center mt-2">
              <label class="head-input col-4 col-md-4">อ่านอัซการ</label>
              <input
                type="number"
                max="10"
                class="form-control col-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="ebadat[1].point"
                required
              />
              <label class="head-input col-2 col-md-3">คะแนน</label>
            </div>
            <div class="row d-flex justify-content-center mt-2">
              <label class="head-input col-4 col-md-4">ศอดาเกาะฮฺ</label>
              <input
                type="number"
                max="10"
                class="form-control col-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="ebadat[2].point"
                required
              />
              <label class="head-input col-2 col-md-3">คะแนน</label>
            </div>
            <div class="row d-flex justify-content-center mt-2">
              <label class="head-input col-4 col-md-4">ถือศีลอด</label>
              <input
                type="number"
                max="10"
                class="form-control col-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="ebadat[3].point"
                required
              />
              <label class="head-input col-2 col-md-3">คะแนน</label>
            </div>
            <div class="row d-flex justify-content-center mt-2">
              <label class="head-input col-4 col-md-4">ขอดุอาฮฺ</label>
              <input
                type="number"
                max="10"
                class="form-control col-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="ebadat[4].point"
                required
              />
              <label class="head-input col-2 col-md-3">คะแนน</label>
            </div>
            <div class="row d-flex justify-content-center mt-2">
              <label class="head-input col-4 col-md-4">ทำฮาลาเกาะฮฺ</label>
              <input
                type="number"
                max="10"
                class="form-control col-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="ebadat[5].point"
                required
              />
              <label class="head-input col-2 col-md-3">คะแนน</label>
            </div>
          </div>
          <div class="form-group col-md-12 mt-5">
              <div class="submit-form d-flex justify-content-center">
                  <input type="submit" value="บันทึก" class="btn btn-success">
              </div>
              
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Navbar from "./Navbar";
import {mapState} from 'vuex'
export default {
    data(){
        return{
            pray:[{
                    name:"มัฆริบ",
                    point:null
                },
                {
                    name:"อิชาอฺ",
                    point:null
                },
                {
                    name:"ศุบฮฺ",
                    point:null
                },
                {
                    name:"ซุฮฺริ",
                    point:null
                },
                {
                    name:"อัศรี",
                    point:null
                },],
            praysunnah:[{
                    name:"ละหมาดซุนนะฮฺ",
                    point:null
                 },
                 {
                     name:"ละหมาดฏูฮา",
                     point:null
                 },
                 {
                     name:"ละหมาดในยาค่ำคืน",
                     point:null
                 }],
            ebadat:[{
                    name:"อ่านอัลกุรอาน",
                    point:null
                },
                {
                    name:"อ่านอัซการ",
                    point:null
                },
                {
                    name:"ศอดาเกาะฮฺ",
                    point:null
                },
                {
                    name:"ถือศีลอด",
                    point:null
                },
                {
                    name:"ขอดุอาฮฺ",
                    point:null
                },
                {
                    name:"ทำฮาลาเกาะฮฺ",
                    point:null
                }]


        }
    },
    components: {
        Navbar
    },
    computed: {
        ...mapState(["user"])
    },
    methods: {
        SendData(){
            let data={
                stdId:this.user.stdId,
                pray:this.pray,
                praysunnah:this.praysunnah,
                ebadat:this.ebadat
            }
            try{
                axios.post('http://localhost:8081/myamal',data).then((result)=>{
                     swal({title: "บันทึกสำเร็จ",icon: "success",button: "OK",}).then((r)=>{
                        this.$router.push({
                            name:'index'
                        })
                     })
                })
            }catch(err){
                console.log(err)
            }
        }
    },
};
</script>
<style scope>
.check-form {
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.1);
  border-radius: 30px;
}
.head-input {
  width: 20px;
  padding-top: 5px;
}
.head-form {
  text-align: center;
  border-bottom: solid 1px gray;
}
.btn{
    width: 100px;
}
</style>
