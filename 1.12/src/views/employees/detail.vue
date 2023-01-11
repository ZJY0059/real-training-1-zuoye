<template>
  <div>
    <div class="employees-detail-top">
      123123
      {{ this.$route.query.id }}
    </div>
  </div>
</template>

<script>
import { staffIdGet } from "../../untils/api/employees";
export default {
  data() {
    return {
      id: "",
    };
  },
  methods: {},
  created() {},
  mounted() {
    this.id = this.$route.query.id;
    /**一进页面请求内容 */
    staffIdGet({ id: this.id }).then((res) => {
      console.log(res);
    });
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.employees-detail-top {
  width: 1300px;
  height: 100px;
  background: #fff;
  border: 1px solid #ebeef5;
  margin: 20px;
}
</style>
