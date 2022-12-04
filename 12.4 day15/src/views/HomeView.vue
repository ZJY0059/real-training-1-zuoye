<template>
  <div>
    <div class="box">
      <el-button type="primary" @click="add">新增todolist</el-button>
      <!-- 按钮添加点击事件 -->
    </div>

    <el-calendar>
      <template slot="dateCell" slot-scope="{ data }">
        <p>
          {{ data.day.split("-").slice(2).join("-") }}
        </p>
        <div v-for="item in $store.state.arr" :key="item.id">
          <div
            v-if="
              item.date1.indexOf(data.day.split('-').slice(0).join('-')) != -1
            "
          >
            <!-- v-if进行判断表单上的时间和日历上的时间要相等 -->
            <!-- 用indexof进行判断,找到返回索引号,找不到返回-1 -->
            <el-button
              type="primary"
              size="mini"
              v-show="item.status == '已办'"
              @click="edit(item, item.id)"
              >{{ item.name }}</el-button
            >
            <!-- 按钮判断是已办还是待办 -->
          </div>
          <div
            v-if="
              item.date1.indexOf(data.day.split('-').slice(0).join('-')) != -1
            "
          >
            <!-- v-if进行判断表单上的时间和日历上的时间要相等 -->
            <!-- 用indexof进行判断,找到返回索引号,找不到返回-1 -->
            <el-button
              type="danger"
              size="mini"
              v-show="item.status == '待办'"
              @click="edit(item, item.id)"
              >{{ item.name }}</el-button
            >
            <!-- 按钮判断是已办还是待办 -->
          </div>
        </div>
      </template>
    </el-calendar>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="事件名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="事件状态">
          <el-radio-group v-model="form.status">
            <el-radio label="待办"></el-radio>
            <el-radio label="已办"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="qd">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 添加和编辑的表单 -->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      dialogVisible: false, //添加模态框
      form: {
        name: "",
        date1: "",
        status: "",
      }, //表单双向绑定
      editid: -1, //用来判断是添加还是编辑 -1就是添加
    };
  },
  methods: {
    add() {
      this.editid = -1; //点击添加让editid=0
      this.form = {};
      this.dialogVisible = true; //模态框显示
    },
    // 添加内容弹框事件
    qd() {
      this.dialogVisible = false; ////模态框隐藏
      let res = new Date(this.form.date1).toLocaleDateString();
      // 将表单上的中国标准日期改成日期格式

      this.form.date1 = res.split("/").join("-");
      // 将res/格式转换成-格式

      // console.log(this.form.date1);

      if (this.editid == -1) {
        // 判断是不是添加还是编辑
        this.$store.commit("qd", this.form);
        // 讲表单内容传到vuex里
        this.form = {};
        // 清空表单内容
      } else {
        this.$store.commit("edit", { form: this.form, id: this.editid });
        // 讲表单内容传到vuex里
        this.form = {};
        // 清空表单内容
      }
    },
    // 添加确定按钮
    edit(val, id) {
      // console.log(val);
      this.dialogVisible = true;
      this.form.name = val.name;
      // 回填名称
      this.form.status = val.status;
      // 回填状态
      this.form.date1 = val.date1;
      // 回填日期
      this.editid = id;
      // 把拿到当前的id赋值给editid
    },
    // 点击编辑按钮回填
  },
  created() {},
  mounted() {},
  components: {},
  computed: {
    // arr(){
    //     return this.$store.state.todolist.arr
    //   }
    // 第一种引入
    //  ...mapState({
    //     arr : state=> state.todolist.arr
    //   }),
    // 第二种映射
  },
  watch: {},
  filters: {},
};
</script>

<style lang='scss' scoped>
.box {
  margin: 20px 0 0 20px;
}
</style>

