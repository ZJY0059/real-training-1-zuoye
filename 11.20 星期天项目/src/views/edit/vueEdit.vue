<template>
  <div>
    <el-container>
      <el-header>
        <el-breadcrumb separator="/" class="box">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item to="/vueEdit">编辑</el-breadcrumb-item>
          <el-breadcrumb-item>文本编辑</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="boxs"><i class="el-icon-info"></i></div>
      </el-header>
      <el-main>
        <quill-editor class="quills" v-model="richtext" ref="myQuillEditor">
        </quill-editor>
     
        <div class="a"><el-button type="primary">提交</el-button></div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      richtext: "", //富文本内容
    };
  },
  methods: {
    editorOption() {},
    // 富文本的配置可以为空
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.el-header {
  background: #eff2f7;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  .box {
    margin-top: 20px;
  }
  .boxs {
    margin-top: 10px;
    font-size: 30px;
  }
}
.quills {
  height: 280px;
}
.el-main {
  height: 80vh;
}
.a{
  margin-top: 100px;
  margin-left: 500px;
}
</style>
