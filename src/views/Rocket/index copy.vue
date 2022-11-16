

<template>
  <div id="app">
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script lang="ts">
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
