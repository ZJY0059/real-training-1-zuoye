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
      // console.log(res);
      if (res.status == STATUS.SUCCESS) {
        // this.tableData = res.data.data;
        /**最终要产出的树状数据的数组 */
        const treeList = [];
        /**所有项都是用对象存储起来 */
        const map = {};
        /**建立一个映射：通过id快速找到对应的元素 */
        res.data.data.forEach((item) => {
          if (!item.children) {
            item.children = [];
          }
          map[item.id] = item;
        });
        res.data.data.forEach((item) => {
          /**
           * 对象每一个元素来说,先找它的上级
           * 如果能找到,说明他有上级,则要把它添加到上级的children中去
           * 如果找不到,说明它没有上级,就直接添加到treeList
           */
          const parent = map[item.pid];
          /**如果存在则表示item不是最顶层的数据 */
          if (parent) {
            parent.children.push(item);
          } else {
            /**如果不存在  则是顶层数据 */
            treeList.push(item);
          }
          // console.log(treeList);
          this.tableData = treeList;
        });
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
