<template>
	<div class="login">
		<el-form class="form" ref="ruleForm" :model="form" :rules="rules">
			<el-form-item prop="username">
				<el-input prefix-icon="el-icon-user" v-model="form.username"></el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input
					prefix-icon="el-icon-lock"
					v-model="form.password"
					type="password"
				></el-input>
			</el-form-item>
			<el-form-item class="btn">
				<el-button type="primary" @click="submitForm">登录</el-button>
				<el-button>重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<!-- <script lang="ts">
	import { reactive, toRefs } from 'vue';
	import type { FormRules } from 'element-plus';
  import * as TS from './common/api/defind'
	export default {
		setup() {
			// const data = reactive<{form: TS.LoginForm}>({
			// 	form: {
			// 		username: '',
			// 		password: '',
			// 	},
			// });
      const data: {form: TS.LoginForm} = reactive({
				form: {
					username: '',
					password: '',
				},
			});
      // const form = reactive<TS.LoginForm>({
			// 		username: '',
			// 		password: '',
			// 	});
        // const form: TS.LoginForm = reactive({
				// 	username: '',
				// 	password: '',
				// });
			const rules = reactive<FormRules>({
				username: [
					{
						required: true,
						message: '用户名不能为空',
						trigger: 'blur',
					}
				],
				password: [
					{
						required: true,
						message: '密码不能为空',
						trigger: 'change',
					},
				],
			});
			const submitForm = () => {};
			return {
				...toRefs(data),
				submitForm,
        rules
			};
		},
	};
</script> -->

<script lang="ts" setup>
	import { reactive, toRefs } from 'vue';
	import type { FormRules } from 'element-plus';
  import * as TS from './common/api/defind'

			// const data = reactive<{form: TS.LoginForm}>({
			// 	form: {
			// 		username: '',
			// 		password: '',
			// 	},
			// });
      // const data: {form: TS.LoginForm} = reactive({
			// 	form: {
			// 		username: '',
			// 		password: '',
			// 	},
			// });
      const form = reactive<TS.LoginForm>({
					username: '',
					password: '',
				});
        // const form: TS.LoginForm = reactive({
				// 	username: '',
				// 	password: '',
				// });
			const rules = reactive<FormRules>({
				username: [
					{
						required: true,
						message: '用户名不能为空',
						trigger: 'blur',
					}
				],
				password: [
					{
						required: true,
						message: '密码不能为空',
						trigger: 'change',
					},
				],
			});
			const submitForm = () => {};
			
	
</script>

<style lang="scss" scoped>
	.login {
		// background-color: #3e4b6a;
		background-image: url(../../assets/3.jpg);
		background-repeat: no-repeat;
		display: flex;
		align-items: center;
		justify-content: center;
		background-size: 100% 100%;
	}
	.form {
		width: 500px;
		background-color: #fff;
		padding: 100px 20px;
		padding-bottom: 40px;
		border-radius: 8px;
		position: relative;
	}
	img {
		position: absolute;
		width: 130px;
		height: 130px;
		border-radius: 130px;
		background-color: #ccc;
		top: -50px;
		left: 185px;
		border: 10px solid #fff;
		box-shadow: 5px 5px 10px #ccc;
	}
	.btn {
		text-align: right;
	}
</style>
