<template>
  <div>
    <div class="chart">
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js";
export default {
  props:["data","maxPoint"],
  mounted() {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Red", "Blue", "Red", "Blue"],
        datasets: [
          {
            label: ["เปอร์เซนการทำอีบาดัรประจำเดือน", "เต็ม 100 %"],
            data: [80, 19, 80, 19, 80, 19],
            backgroundColor: [
              "rgba(255, 99, 132, 0.8)",
              "rgba(54, 162, 235, 0.8)"
            ]
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
  width: 500px;
}
</style>
