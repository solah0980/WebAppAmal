<template>
  <div>
    <div class="chart">
      <p class="mt-3 text-info">เต็ม 100 %</p>
      <canvas class="mt-3" id="myChart" width="400" height="400"></canvas>
      <p class="mt-4 text-primary">จำนวนการประเมินของเดือนนี้ {{th}} ครั้ง</p>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js";
export default {
  props:["data","maxPoint","th"],
  data(){
    return{
      name:[],
      per:[],
      color:[]
    }
  },
  created() {
    this.data.forEach((d)=>{
      this.name.push(`${d.name} ได้ ${d.data.toFixed(2)} %`)
      this.per.push(d.data.toFixed(2))
    })
    this.name.forEach((d)=>{
      this.color.push(`rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.8)`)
    })
  },
  mounted() {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: this.name,
        datasets: [
          {
            label: ["เปอร์เซนการทำอีบาดัรประจำเดือน", "เต็ม 100 %"],
            data: this.per,
            backgroundColor: this.color
          }
        ]
      },
      options: {}
    })
    console.log(this.data)
  },
  
};
</script>
<style scoped>
.chart {
  width: 300px;
}
p{
  text-align: center;
}
</style>
