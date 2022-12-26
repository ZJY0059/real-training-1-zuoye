<template>
	<div class="child1">
		<p style="color: #fff; padding-top: 5px; font-size: 14px">
			慕课外卖用户总数
		</p>
		<p style="font-size: 12px; color: #fff">User Tatal Count</p>
		<p style="font-size: 20px; color: #fff; padding-top: 5px">1,739,919</p>
		<p style="font-size: 13px">
			<span style="color: #accc7b">每日增长率：73.90%</span>
			<span style="color: #5c7b39; margin-left: 20px">每月增长率：117.37%</span>
		</p>
		<div
			id="main1"
			style="width: 300px; height: 10px"
			class="child1-imgs"
		></div>
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
			var myChart1 = echarts.init(document.getElementById('main1'));
			var option = {
				grid: {
					top: 0,
					bottom: 0,
					left: '0',
					right: '10%',
				},
				xAxis: {
					show: false,
					type: 'value',
					boundaryGap: [0, 0],
				},
				yAxis: [
					{
						type: 'category',
						data: [''],
						axisLine: { show: false },
						axisTick: [
							{
								show: false,
							},
						],
					},
				],
				series: [
					{
						name: '金额',
						type: 'bar',
						zlevel: 1,
						itemStyle: {
							normal: {
								barBorderRadius: 30,
								color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
									{
										offset: 1,
										color: '#939496',
									},
								]),
							},
						},
						barWidth: 20,
						data: [15],
					},
					{
						name: '背景',
						type: 'bar',
						barWidth: 20,
						barGap: '-100%',
						data: [20],
						itemStyle: {
							normal: {
								color: '#424345',
								barBorderRadius: 30,
							},
						},
					},
				],
			};
			myChart1.setOption(option);
		},
		components: {},
		computed: {},
		watch: {},
	};
</script>

<style lang="scss" scoped>
	.child1 {
		padding-left: 20px;
		.child1-imgs {
			margin-top: 5px;
			border: 1px solid #ccc;
		}
	}
</style>
