<template>
	<div class="child3">
		<div id="main" style="width: 100px; height: 100px"></div>
		<div>
			<p style="color: #fff; margin-top: 5px; font-size: 14px">
				慕课外卖登陆设备
			</p>
			<p style="color: #fff; margin-top: 5px; font-size: 12px">
				dwthon of inement
			</p>
      <p class="ts">1,365,633<span style="font-size: 12px">台</span></p>
      <div class="shul">
        <p>522,041</p>
        <p>471,645</p>
        <p>371,947</p>
      </div>
      <div class="shul1">
        <p>Andeld</p>
        <p>IOS</p>
        <p>PC</p>
      </div>
		</div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
	export default {
		data() {
			return {};
		},
		methods: {},
		created() {},
		mounted() {
			var myChart = echarts.init(document.getElementById('main'));
			var option = {
				series: [
					{
						// name: 'Access From',
						color: ['#89a455'],
						type: 'pie',
						radius: '50%',
						data: [{ value: 1048 }, { value: 735 }, { value: 735 }],
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)',
							},
						},
						labelLine: {
							normal: {
								show: false,
							},
						},
					},
				],
			};
			option && myChart.setOption(option);
		},
		components: {},
		computed: {},
		watch: {},
	};
</script>

<style lang="scss" scoped>
	.child3 {
		display: flex;
    position: relative;
	}
  .ts{
    position: absolute;
    left: 230px;
    top: 15px;
    font-size: 18px;
    color: #fff;
  }
  .shul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    margin-top: 10px;
    width: 230px;
    height: 20px;
  }
  .shul1{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    width: 200px;
    height: 20px;
    font-size: 12px;
  }
</style>
