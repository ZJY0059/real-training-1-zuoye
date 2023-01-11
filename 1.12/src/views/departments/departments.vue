<template>
  <div>
    <div class="departments-title">
      <div class="custom-tree-container1">
        <div
          style="
            display: flex;
            justify-content: space-between;
            border-bottom: 2px solid #cfcfcf;
            margin-bottom: 2px;
          "
        >
          <div>
            <p>{{ companyName }}</p>
          </div>
          <div style="display: flex; justify-content: space-between">
            <p style="margin-right: 20px">负责人</p>
            <p>
              操作 <el-icon color="#ccc"><ArrowDownBold /></el-icon>
            </p>
          </div>
        </div>
        <el-tree
          :data="data"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :props="defaultProps"
					style="margin-bottom: 20px;"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <span>
              <span style="margin: 0 20px 0 0">{{ data.manager }}</span>
              <span>操作</span>
            </span>
          </span>
        </el-tree>
      </div>
    </div>
  </div>
</template>

<script>
/**引入状态码 */
import { STATUS } from "../../untils/http/Status";
/**引入封装的组织架构接口 */
import { structureGet } from "../../untils/api/departments";
export default {
  data() {
    return {
      /**标题 */
      companyName: "",
      /**树形数组 */
      data: [],
      /**树形控件展示效果 */
      defaultProps: {
        children: "children",
        label: "name",
      },
    };
  },
  methods: {},
  created() {},
  mounted() {
    /**一进页面调用 */
    structureGet().then((res) => {
      // console.log(res);
      if (res.status == STATUS.SUCCESS) {
        this.companyName = res.data.data.companyName;
        /**最终要产出的树状数据的数组 */
        const treeList = [];
        /**所有项都是用对象存储起来 */
        const map = {};
        /**建立一个映射：通过id快速找到对应的元素 */
        res.data.data.depts.forEach((item) => {
          if (!item.children) {
            item.children = [];
          }
          map[item.id] = item;
        });
        res.data.data.depts.forEach((item) => {
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
          this.data = treeList;
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
/**全局 */
.departments-title {
  width: 1300px;
  // height: 100px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin: 25px;
  margin-top: 30px;
  .custom-tree-container1 {
    width: 1000px;
    // height: 300px;
    margin-left: 120px;
    margin-top: 36px;
  }
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
}
</style>
