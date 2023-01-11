<template>
  <div>
    <!-- 头部 -->
    <div class="permission-top">
      <p></p>
      <p>
        <el-button type="primary" size="small" style="margin-right: 20px"
          >添加权限</el-button
        >
      </p>
    </div>
    <!-- 内容部分 -->
    <div class="permission-table">
      <el-table
        :data="tableData"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column prop="name" label="名称" width="350" align="center">
        </el-table-column>
        <el-table-column prop="code" label="标识" width="340" align="center">
        </el-table-column>
        <el-table-column
          prop="description"
          label="描述"
          width="300"
          align="center"
        >
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="300" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small">添加</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
/**引入状态码 */
import { STATUS } from "../../untils/http/Status";
/**引入封装的权限列表内容接口 */
import { authorityGet } from "@/untils/api/permission";
export default {
  data() {
    return {
      /**表格数据 */
      tableData: [],
    };
  },
  methods: {},
  created() {},
  mounted() {
    /**获取权限列表内容 */
    authorityGet().then((res) => {
      console.log(res);
      if (res.status == STATUS.SUCCESS) {
        this.tableData = res.data.data;
      }
    });
		
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
/**头部 */
.permission-top {
  width: 1300px;
  height: 60px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin: 20px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/**表格内容 */
.permission-table {
  width: 1300px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin: 20px;
  margin-top: 10px;
}
</style>
