<template>
	<div class="child4">
		<div><img src="@/assets/男性图片.png" alt="" class="child4-imgs" /></div>
		<div style="color: #fff">
			<p style="margin-top: 15px">男性用户人数</p>
			<p style="font-size: 12px; margin-top: 5px">Number of users</p>
			<p>
				869,913
				<span style="font-size: 12px">万人</span>
			</p>
		</div>
		<div><img src="@/assets/男性图片.png" alt="" class="child4-imgs" /></div>
		<div style="color: #fff; margin-left: 10px">
			<p style="margin-top: 15px">女性用户人数</p>
			<p style="font-size: 12px; margin-top: 5px">Number of users</p>
			<p style="margin-top: 5px">
				870,006
				<span style="font-size: 12px">万人</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {},
		created() {},
		mounted() {},
		components: {},
		computed: {},
		watch: {},
	};
</script>

<style lang="scss" scoped>
	.child4 {
		width: 340px;
		display: flex;
	}
	.child4-imgs {
		width: 50px;
		height: 50px;
		margin-top: 10px;
		margin-left: 10px;
	}
</style>
