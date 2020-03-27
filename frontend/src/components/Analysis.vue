<template>
  <div>
    <Navbar />
    <div class="container">
      <form @submit.prevent="addData">
        <div class="form-group month-form">
          <div class="mt-4">
            <p class="h-form">ประเมินอิบาดัรเดือน</p>
            <select class="form-control form-control-sm" v-model="month1">
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
            <select class="form-control form-control-sm mt-3" v-model="type">
              <option value="0">ละหมาดฟัรฏู</option>
              <option value="1">ละหมาดซุนนะฮฺ</option>
              <option value="2">อีบาดัร อื่นๆ</option>
            </select>
          </div>
        </div>
      </form>
      <div class="row justify-content-center chart">
        <Chart v-if="statusShow" :data="dataAll" :th="th" ></Chart>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from "./Chart";
import Navbar from "./Navbar";
import { mapState } from "vuex";
import axios from "axios";
import _ from "lodash";
export default {
  data() {
    return {
      month1: null,
      month2: null,
      type: null,
      dataAll:null,
      statusShow:false,
      error:null,
      th:null
    };
  },
  components: {
    Chart,
    Navbar
  },
  computed: {
    ...mapState(["user"])
  },
  watch: {
    month1: function(value) {
      this.month2 = this.month1;
    },
    type: function() {
      this.statusShow=false
      this.$router.push({
        name: "analysis",
        query: { stdId: this.user.stdId, month: this.month2, type: this.type }
      });
    },
    "$route.query.type": _.debounce(function() {
      axios
        .post("http://localhost:8081/showamal", this.$route.query)
        .then(r => {
          if(r.data.error){
            this.error = r.data.error
            swal({title: this.error ,icon: "error",button: "OK",}).then(()=>{
              this.error==null
              })
          }else{
            this.th = r.data.pop()
            this.dataAll=r.data
            this.statusShow=true
          }
        });
    }, 2000)
  }
};
</script>
<style scoped>
.month-form {
  width: 300px;
  margin: 0 auto;
}
.h-form {
  text-align: center;
}
@media screen and (max-width: 576px) {
  .chart{
    margin: 0 auto;
  }
}
</style>
