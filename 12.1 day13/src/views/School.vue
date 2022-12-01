<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id" @click="add(item)">
        {{ item.name }}-{{ item.age }}-{{ item.sex ? "男" : "女" }}-{{
          item.status ? "在籍" : "不在籍"
        }}
      </li>
    </ul>
    <hr />
    <hr />
    <schoollist :items="items"></schoollist>
  </div>
</template>

<script>
import mocklist from "../mock/mocklist.json";
import Schoollist from "../views/SchoolList.vue";
import minxi from '../mixin'
export default {
   mixins:[minxi],
  data() {
    return {
      list: [],
      items: {},
    };
  },
  methods: {
    add(item) {
      console.log(item);
      this.items = item;
    },
  },
  created() {
    // console.log(mocklist);
    if (mocklist.code == 200) {
      let { data } = mocklist;
      this.list = data;
    }
  },
  mounted() {
      this.adds()
  },
  components: {
    Schoollist,
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>
