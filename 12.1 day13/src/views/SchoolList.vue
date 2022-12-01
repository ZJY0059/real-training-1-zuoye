<template>
  <div>
     <h1>姓名：{{items.name}}</h1>
     <h1>年龄：{{items.age}}</h1>
     <h1>性别：{{items.sex?'男':'女'}}</h1>
     <h1>在籍不：{{items.status?'在籍':'不在籍'}}</h1>
 </div>
</template>

<script>
export default {
    props:['items'],   //数组形式
    // props:{
    //     items:Object     //对象形式
    // },

  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  mounted () {

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>
