<template>
  <div>
    <div class="departments-box">
      <!-- <el-tabs v-model="activeName" class="demo-tabs"> -->
        <!-- <el-tab-pane label="组织结构" name="first"> -->
          <!-- <div class="custom-tree-container1"> -->
            <!-- <div
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
            </div> -->

            <!-- <el-tree
            :data="depts.depList"
            node-key="id"
            default-expand-all
            :props="defaultProps"
            :expand-on-click-node="false"
          >
            <template #default="{ node, data }">
              <span class="custom-tree-node">
                <span>{{ node.label }}</span>
                <span>
                  <a> {{ data.manager }} </a>
                  <a style="margin-left: 8px">
                    操作 <el-icon color="#ccc"><ArrowDownBold /></el-icon>
                  </a>
                </span>
              </span>
            </template>
          </el-tree> -->
          <!-- </div> -->
        <!-- </el-tab-pane> -->
      <!-- </el-tabs> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
// 全局
.departments-box {
  border: 1px solid #ebeef5;
  background-color: #fff;
  border-radius: 5px;
  margin: 10px 0 0 10px;
  width: 1450px;
  // height: 850px;
  .demo-tabs {
    margin: 30px 0 50px 50px;
  }
  .custom-tree-container1 {
    width: 1200px;
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
