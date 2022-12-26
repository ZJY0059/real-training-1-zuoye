<template>
	<div class="home">
		<!-- 头部 -->

		<img src="../assets/头部.png" alt="" class="home-imgs" />

		<!-- 内容展示 -->
		<div class="homes">
			<!-- 左侧内容展示 -->
			<div class="home-left">
				<!-- 慕课外卖用户总数 -->
				<div class="home-left-child1">
					<visualized-list-1></visualized-list-1>
				</div>
				<!-- 慕课外卖用户年龄分布 -->
				<div class="home-left-child2">
					<visualized-list-2></visualized-list-2>
				</div>
				<!-- 慕课外卖登陆设备 -->
				<div class="home-left-child3">
					<visualized-list-3></visualized-list-3>
				</div>
				<!-- 男性用户人数+女性 -->
				<div class="home-left-child4">
					<visualized-list-4></visualized-list-4>
				</div>
				<!-- 慕课外卖骑手概况 -->
				<div class="home-left-child5">
					<visualized-list-5></visualized-list-5>
				</div>
				<!-- 当前热卖品类 -->
				<div class="home-left-child6">
					<visualized-list-6></visualized-list-6>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import VisualizedList1 from '../components/left/VisualizedList1.vue';
	import VisualizedList2 from '../components/left/VisualizedList2.vue';
	import VisualizedList3 from '../components/left/VisualizedList3.vue';
	import VisualizedList4 from '../components/left/VisualizedList4.vue';
	import VisualizedList5 from '../components/left/VisualizedList5.vue';
	import VisualizedList6 from '../components/left/VisualizedList6.vue';
	export default {
		data() {
			return {};
		},
		methods: {},
		created() {},
		mounted() {},
		components: {
			VisualizedList1,
			VisualizedList2,
			VisualizedList3,
			VisualizedList4,
			VisualizedList5,
			VisualizedList6,
		},
		computed: {},
		watch: {},
	};
</script>

<style lang="scss" scoped>
	/**全局 */
	.home {
		width: 100vw;
		height: 100vh;
		background: #1c1c1c;
		.home-imgs {
			width: 100%;
		}
		.homes {
			width: 100%;
			height: 658px;
			background: red;
		}
		.home-left {
			width: 340px;
			height: 650px;

			/**慕课外卖用户总数  */
			.home-left-child1 {
				width: 340px;
				height: 110px;
				background: #424345;
			}
			/**慕课外卖用户年龄分布 */
			.home-left-child2 {
				width: 340px;
				height: 100px;
				background: #2a2b2d;
				border-top: 5px solid #37383c;
			}
			/**慕课外卖登陆设备 */
			.home-left-child3 {
				width: 340px;
				height: 100px;
				background: #2a2b2d;
				border-top: 10px solid #3b3c40;
			}
			/**男性用户人数+女性 */
			.home-left-child4 {
				width: 340px;
				height: 100px;
				background: #2a2b2d;
				border-top: 10px solid #3b3c40;
			}
			/**慕课外卖骑手概况 */
			.home-left-child5 {
				width: 340px;
				height: 100px;
				background: #2a2b2d;
				border-top: 10px solid #3b3c40;
			}
			/**当前热卖品类 */
			.home-left-child6 {
				width: 340px;
				height: 103px;
				background: #2a2b2d;
				border-top: 10px solid #3b3c40;
			}
		}
	}
</style>
