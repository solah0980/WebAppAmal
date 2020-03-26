<template>
  <div>
    <Navbar />
    <div class="container">
      <form @submit.prevent="addData">
        <div class="form-group month-form">
            <div class="mt-4">
                <p class="h-form">ประเมินอิบาดัรเดือน</p>
          <select class="form-control form-control-sm" v-model="month">
            <option value="Jan">มกราคม</option>
            <option value="Feb">กุมภาพันธ์</option>
            <option value="Mar">มีนาคม</option>
            <option value="Apr">เมษายน</option>
            <option value="May">พฤษภาคม</option>
            <option value="Jun">มิถุนายน</option>
            <option value="Jul">กรกฎาคม</option>
            <option value="Aug">สิงหาคม</option>
            <option value="Sep">กันยายน</option>
            <option value="Oct">ตุลาคม</option>
            <option value="Nov">พฤศจิกายน</option>
            <option value="Dec">ธันวาคม</option>
          </select>
            </div>
        </div>
      </form>
      <div class="row justify-content-md-center">
        <Chart />
      </div>
    </div>
  </div>
</template>
<script>
import Chart from "./Chart";
import Navbar from "./Navbar";
import {mapState} from 'vuex'
import axios from 'axios'
import _ from 'lodash'
export default {
    data(){
        return{
            month:null
        }
    },
  components: {
    Chart,
    Navbar
  },
    computed: {
        ...mapState(['user'])
    },
    methods: {
    },
  watch: {
      month:function(value){
          this.$router.push({
              name:'analysis',
              query:{stdId:this.user.stdId,month:`${value}`}
          })
      },
      "$route.query":_.debounce(function(){
          axios.post("http://localhost:8081/showamal",this.$route.query).then((r)=>{
             console.log(r)
         })
      },2000)
  },
};
</script>
<style scoped>
.month-form{
    width: 300px;
    margin: 0 auto;
}
.h-form{
    text-align: center;
}

</style>
