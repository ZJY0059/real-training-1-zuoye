<template>
  <div class="login">
    <div class="center">
      <h1>iHRM 后台登陆系统</h1>
      <!-- 登录表单 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="40px"
        class="demo-ruleForm"
      >
        <el-form-item prop="mobile">
          <el-input
            v-model="ruleForm.mobile"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="ruleForm.password"
            show-password
            prefix-icon="el-icon-s-grid"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="click-login"
            @click="Login('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <p style="margin-left: 30px; color: #fff">
        <span>账号: 13800000002</span>
        <span style="margin-left: 20px">密码: 123456</span>
      </p>
      <el-button
        type="warning"
        style="margin: 10px 0 0 200px"
        @click="$router.push('https://shuiruohanyu.gitee.io/yyds/document/')"
        >学习文档</el-button
      >
    </div>
  </div>
</template>

<script>
/**引入状态码 */
import { STATUS } from "../untils/http/Status";
/**引入封装的cookie */
import { setToken } from "../untils/http/auth";
/**引入封装的登录接口 */
import { LoginPost } from "../untils/api/Login";
export default {
  data() {
    return {
      /**账号密码双向绑定 */
      ruleForm: {
        mobile: "13800000002",
        password: "123456",
      },
      /**账号密码的校验 */
      rules: {
        mobile: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    /**登录按钮 */
    Login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (
            this.ruleForm.mobile == "13800000002" &&
            this.ruleForm.password == "123456"
          ) {
            LoginPost(this.ruleForm).then((res) => {
              // console.log(res);
              if (res.status == STATUS.SUCCESS) {
                setToken(res.data.data);
                this.$notify({
                  title: res.data.message,
                  message: "成功",
                  type: "success",
                  duration: 4000,
                });
                this.$router.replace("/dashboard");
              } else {
                this.$notify({
                  title: res.status,
                  message: "有误",
                  type: "warning",
                  duration: 2000,
                });
              }
            });
          } else {
            this.$notify.error({
              title: "账号或者密码错误",
              message: "这是一条错误的提示消息",
            });
          }
        }
      });
    },
  },

  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
// 全局
.login {
  width: 100vw;
  height: 100vh;
  background: url(../assets/背景图.jpg);
  background-size: 100% 100%;
  /**中间内容 */
  .center {
    width: 500px;
    height: 500px;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 5%;

    h1 {
      color: #fff;
      font-size: 45px;
      text-align: center;
      margin-top: 10px;
    }
    .click-login {
      width: 420px;
      height: 50px;
      background: #407ffe;
    }
  }
}
/**element-ui样式修改 */
.demo-ruleForm {
  width: 460px;
  margin-top: 20px;
  opacity: 0.5;
}
::v-deep .el-input__inner {
  height: 50px;
}
</style>
