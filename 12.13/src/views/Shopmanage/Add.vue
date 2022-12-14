<template>
  <div class="goods-add">
    <div class="goods-add-title"><i class="el-icon-info"></i>添加商品信息</div>
    <el-steps
      :active="active"
      :space="200"
      finish-status="success"
      class="goods-add-text"
    >
      <el-step title="基本信息"></el-step>
      <el-step title="商品参数"></el-step>
      <el-step title="商品属性"></el-step>
      <el-step title="商品图片"></el-step>
      <el-step title="商品内容"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
    <el-tabs
      :tab-position="tabPosition"
      style="height: 600px; margin-top: 20px"
      @tab-click="adds"
    >
      <el-tab-pane label="基本信息">
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="formLabelAlign"
          :rules="rules"
        >
          <el-form-item label="商品名称" prop="goods_name">
            <el-input v-model="formLabelAlign.goods_name"></el-input>
          </el-form-item>
          <el-form-item label="商品价格" prop="goods_price">
            <el-input v-model="formLabelAlign.goods_price"></el-input>
          </el-form-item>
          <el-form-item label="商品重量" prop="goods_weight">
            <el-input v-model="formLabelAlign.goods_weight">0</el-input>
          </el-form-item>
          <el-form-item label="商品数量" prop="goods_number">
            <el-input v-model="formLabelAlign.goods_number"></el-input>
          </el-form-item>
          <el-form-item label="商品分类" prop="goods_cat">
            <el-cascader
              v-model="formLabelAlign.goods_cat"
              :options="classifylist"
              @change="handleChange"
              :props="defaultParams"
              ref="cascader"
            ></el-cascader>
          </el-form-item>
        </el-form>
        <!-- 基本信息 -->
      </el-tab-pane>
      <el-tab-pane label="商品参数">
        <div>
          <div v-for="item in list" :key="item.id">
            <h5>{{ item.attr_name }}</h5>
            <el-radio label="1" border class="box">{{
              item.attr_vals
            }}</el-radio>
          </div>
        </div>
      </el-tab-pane>
      <!-- 商品参数 -->
      <el-tab-pane label="商品属性">
        <div>
          <div v-for="item in lists" :key="item.id">
            <p class="boxs">{{ item.attr_name }}</p>
            <el-input class="boxs"></el-input>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="商品图片">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </el-tab-pane>
      <el-tab-pane label="商品内容">
        <quill-editor v-model="richtext" ref="myQuillEditor" class="quill">
        </quill-editor>
        <el-button type="primary" class="a" @click="goodsadd"
          >添加商品</el-button
        >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultParams: {
        label: "cat_name",
        value: "cat_name",
        children: "children"
      }, //级联选择器展示内容
      tabPosition: "left", //选项居左
      active: 0, // 进度条
      labelPosition: "top", //基本信息位置
      formLabelAlign: {
        goods_name: "",
        goods_price: 0,
        goods_weight: 0,
        goods_number: 0,
        goods_cat: ""
      },
      //  基本信息表单
      classifylist: [], //保存分类
      dialogImageUrl: "",
      dialogVisible: false,
      richtext: "", //富文本得绑定
      rules: {
        goods_name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        goods_price: [
          { required: true, message: "请输入商品价格", trigger: "blur" },
          {
            pattern: /^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:\.5)?$/,
            message: "商品价格必须是大于0的整数或小数",
            trigger: "blur"
          }
        ],
        goods_weight: [
          { required: true, message: "请输入商品重量", trigger: "blur" },
          {
            pattern: /^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:\.5)?$/,
            message: "商品重量必须是大于0的整数或小数",
            trigger: "blur"
          }
        ],
        goods_number: [
          { required: true, message: "请输入商品数量", trigger: "blur" },
          {
            pattern: /^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:\.5)?$/,
            message: "商品数量必须是大于0的整数",
            trigger: "blur"
          }
        ],
        goods_cat: [{ required: true, message: "请输入分类", trigger: "blur" }]
      }, //基本信息正则
      index: 0,
      id: 0,
      list: [],
      lists: [],
      ids: 0,
      idss: 0
    }
  },
  methods: {
    adds(val) {
      this.index = val.index
      this.active++
      if (this.index == 1) {
        this.$http({
          method: "get",
          url: this.$http.addorUrl(`categories/${this.id}/attributes?sel=many`)
        }).then((res) => {
          console.log(res)
          this.list = res.data.data
        })
      } else if (this.index == 2) {
        this.$http({
          method: "get",
          url: this.$http.addorUrl(`categories/${this.id}/attributes?sel=only`)
        }).then((res) => {
          console.log(res)
          this.lists = res.data.data
        })
      }
    },
    handleChange() {
      this.id = this.$refs["cascader"].getCheckedNodes()[0].data.cat_id
      this.ids = this.$refs["cascader"].getCheckedNodes()[0].data.cat_pid
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },

    /**添加按钮 */
    goodsadd() {
      // this.$http({
      //   method: "post",
      //   url: this.$http.addorUrl("/goods"),
      //   data: { goods_cat: this.idss, formLabelAlign: this.formLabelAlign }
      // }).then((res) => {
      //   console.log(res)
      // })
    }
  },
  created() {
    this.$http({
      method: "get",
      url: this.$http.addorUrl("categories")
    }).then((res) => {
      console.log(res)
      this.classifylist = res.data.data
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.goods-add {
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  padding: 20px;
}
.goods-add-title {
  width: 1200px;
  height: 40px;
  background: #f4f4f5;
  text-align: center;
  line-height: 40px;
  color: #ba9f99;
}
.goods-add-text {
  // margin: 0 auto;
  width: 1200px;
  margin: 30px 0 0 60px;
}
.quill {
  height: 300px;
}
.a {
  margin-top: 100px;
}
.box {
  margin-top: 20px;
}
.boxs {
  margin-top: 15px;
}
</style>
