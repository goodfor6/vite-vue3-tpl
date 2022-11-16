

<template>
  <div id="app">
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script lang="ts">

// export default {
//   name : 'rocket',
//   methods :{
//     drawGraph(){
//       var chartDom = document.getElementById('main');
//       var myChart =  this.$echarts.init(chartDom);
//       var option;

//        option = {
//         xAxis: {
//           type: 'category',
//           data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//         },
//         yAxis: {
//           type: 'value'
//         },
//         series: [
//           {
//             data: [120, 200, 150, 80, 70, 110, 130],
//             type: 'bar',
//             showBackground: true,
//             backgroundStyle: {
//               color: 'rgba(180, 180, 180, 0.2)'
//             }
//           }
//         ]
//       };

//        myChart.setOption(option);
//     }
//   },
//   mounted (){
//     this.drawGraph();
//   }
// };


// 螺旋图

type EChartsOption = echarts.EChartsOption;

export default {
    methods : {
      drapGraph(){
        var chartDom = document.getElementById('main')!;
        var myChart = this.$echarts.init(chartDom);
        var option: EChartsOption;

        option = {
          title: [
            {
              text: 'Tangential Polar Bar Label Position (middle)'
            }
          ],
          polar: {
            radius: [30, '80%']
          },
          angleAxis: {
            max: 4,
            startAngle: 75
          },
          radiusAxis: {
            type: 'category',
            data: ['a', 'b', 'c', 'd']
          },
          tooltip: {},
          series: {
            type: 'bar',
            data: [2, 1.2, 2.4, 3.6],
            coordinateSystem: 'polar',
            label: {
              show: true,
              position: 'middle', // or 'start', 'insideStart', 'end', 'insideEnd'
              formatter: '{b}: {c}'
            }
          }
        };
        option && myChart.setOption(option);
      }
    },
    mounted(){
      this.drapGraph();
    }
}



</script>
