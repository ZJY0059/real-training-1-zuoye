<template>
	<div class="child2">
		<p style="color: #fff; font-size: 14px">
			慕课外卖用户年龄分布&平均年龄
			<span style="font-size: 20px; padding-top: 130px">
				30.08
				<span style="font-size: 12px">岁</span>
			</span>
		</p>
		<p style="color: #fff;  font-size: 12px">
			dwwflxfrom of Age
		</p>

		<!-- <img src="../../assets/平均年龄条形.png" alt="" class="child2-imgs" /> -->
		<div id="charts" style="width: 300px; height: 30px"></div>
		<div class="child2-bottom">
			<p>304,378</p>
			<p>505,391</p>
			<p>725,216</p>
			<p>204,934</p>
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
			var myChart = echarts.init(document.getElementById('charts'));
			var option = {
				// tooltip: {
				//   trigger: 'axis',
				//   axisPointer: {
				//     // Use axis to trigger tooltip
				//     // type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
				//   },
				// },
				color: ['#7da244', '#c6f278', '#d1f996', '#fafb9d'],
				legend: {},
				grid: {
					left: '5%',
					right: '6%',
					bottom: '3%',
					top: '8%',
					containLabel: true,
				},
				xAxis: {
					type: 'value',
					// show:false, // 不显示坐标轴线、坐标轴刻度线和坐标轴上的文字
					splitLine: {
						show: false, // 不显示网格线
					},
					axisLine: {
						show: true, // 是否显示坐标轴轴线
						// symbol: ['none', 'arrow'],     // 轴线两端箭头，两个值，none表示没有箭头，arrow表示有箭头
						// symbolSize: [10, 15],     // 轴线两端箭头大小，数值一表示宽度，数值二表示高度
						lineStyle: {
							color: '#48494d', // 坐标轴线线的颜色
							width: '1', // 坐标轴线线宽
							type: 'solid', // 坐标轴线线的类型（solid实线类型；dashed虚线类型；dotted点状类型）
						},
					},
				},
				yAxis: {
					type: 'category',
					axisTick: {
						show: false, //刻度线
					},
					axisLine: {
						show: false, //隐藏y轴
					},
					axisLabel: {
						show: false, //隐藏刻度值
					},

					// data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				series: [
					{
						// name: 'Direct',
						type: 'bar',
						stack: 'total',
						// emphasis: {
						//   // focus: 'series'
						// },
						data: [500000],
						barWidth: 8,
					},
					{
						// name: 'Mail Ad',
						type: 'bar',
						stack: 'total',
						label: {
							// show: true
						},
						emphasis: {
							focus: 'series',
						},
						data: [500000],
					},
					{
						// name: 'Affiliate Ad',
						type: 'bar',
						stack: 'total',
						label: {
							// show: true
						},
						emphasis: {
							focus: 'series',
						},
						data: [800000],
					},
					{
						// name: 'Video Ad',
						type: 'bar',
						stack: 'total',
						label: {
							// show: true
						},
						emphasis: {
							focus: 'series',
						},
						data: [200000],
					},
				],
			};
			myChart.setOption(option);
		},
		components: {},
		computed: {},
		watch: {},
	};
</script>

<style lang="scss" scoped>
	.child2 {
		padding-left: 20px;
		.child2-imgs {
			width: 300px;
			height: 40px;
		}
	}
	.child2-bottom{
		width: 300px;
		color: #fff;
		justify-content: space-between;
		display: flex;
		font-size: 12px;
	}
</style>
