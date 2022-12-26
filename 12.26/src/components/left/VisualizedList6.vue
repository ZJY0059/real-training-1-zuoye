<template>
	<div>
		<div
			id="main2"
			style="width: 350px; height: 103px"
			class="child6-imgs"
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
			var chartDom = document.getElementById('main2');
			var myChart2 = echarts.init(chartDom);
			var option;

			option = {
				title: {
					text: '当前热卖品类',
					// subtext: 'Fake Data',
					textStyle: {
						color: '#fff',
            fontSize: 12, // 字体大小
					},
				},
				color: ['#89a455'],
				xAxis: {
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				},
				yAxis: {
					type: 'value',
				},
				series: [
					{
						data: [120, 200, 150, 80, 70, 110, 130],
						type: 'bar',
						showBackground: true,
						backgroundStyle: {
							color: 'rgba(180, 180, 180, 0.2)',
						},
					},
				],
			};

			option && myChart2.setOption(option);
		},
		components: {},
		computed: {},
		watch: {},
	};
</script>

<style lang="scss" scoped>
	.child6-imgs {
		// margin-top: 15px;
	}
</style>
