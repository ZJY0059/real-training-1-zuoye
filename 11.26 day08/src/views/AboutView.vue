<template>
  <div>
    <h1>
      {{ msg }}
      <!-- 模板字符串 -->
    </h1>
    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
    <div>
      <ul>
        <!-- v-for循环遍历数组 -->
        <li v-for="(item, index) in list" :key="index">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <button @click="add">修改</button>

    <input type="text" v-model="value" @change="adds" />
    <!-- 双向数据绑定 -->

    <div v-if="flag">我想睡觉</div>
    <div v-else>我想学习</div>
    <button v-on:click="flag = !flag">切换v-if</button>
    <!-- 通过v-if -->

    <div v-show="flags">123</div>
    <button @click="flags = !flags">切换v-show</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      flags: false,
      msg: "我想睡觉",
      message: "页面加载于" + new Date().toLocaleString(),
      list: [
        {
          id: 1,
          name: "周一",
        },
        {
          id: 2,
          name: "周二",
        },
        {
          id: 3,
          name: "周三",
        },
        {
          id: 4,
          name: "周四",
        },
      ],
    };
  },
  methods: {
    add() {
      this.list[0].name = "123";
    },
    adds() {},
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
