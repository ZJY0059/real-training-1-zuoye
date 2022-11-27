<template>
  <div class="body">
    <div class="wrap">
      <header>
        <div>
          <img
            src="https://www.todolist.cn/img/note.75134fb0.svg"
            alt=""
            class="imgs"
          />
          <!-- 插入图片 -->
        </div>
        <div class="todolist">To-Do List</div>
      </header>
      <!-- 头部图片和todolist文字 -->
      <div class="top-to">
        <h2>~ Today I need to ~</h2>
      </div>
      <!-- ~ Today I need to ~ -->
      <div class="todo-inputs">
        <input
          type="text"
          placeholder="Add new todo..."
          class="inputs"
          v-model="value"
          @keydown.13="change"
        />
        <button class="buttons" @click="add">Submit</button>
      </div>
      <!-- 输入框 和 按钮 -->
      <div class="todo-nos" v-if="list.length < 1">
        Congrat, you have no more tasks to do
      </div>
      <!-- 下方内容文字 -->
      <div
        v-for="(item, index) in list"
        :key="item.id"
        :class="[{ box1: item.flag == true }, 'box']"
        v-show="indexid == 0"
      >
        <div class="valse">
          <input
            type="checkbox"
            v-model="item.flag"
            @change="clicks(index, item)"
          />
          <span class="texts">{{ item.value }}</span>
        </div>
        <div @click="del(index)">×</div>
      </div>

      <div
        v-for="(item, index) in lists"
        :key="item.id"
        :class="[{ box1: item.flag == true }, 'box']"
        v-show="indexid == 2"
      >
        <div class="valse">
          <input
            type="checkbox"
            v-model="item.flag"
            @change="clicks(index, item)"
          />
          <span class="texts">{{ item.value }}</span>
        </div>
        <div @click="del(index)">×</div>
      </div>

      <div
        v-for="(item, index) in listss"
        :key="item.id"
        :class="[{ box1: item.flag == true }, 'box']"
        v-show="indexid == 1"
      >
        <div class="valse">
          <input
            type="checkbox"
            v-model="item.flag"
            @change="clicks(index, item)"
          />
          <span class="texts">{{ item.value }}</span>
        </div>
        <div @click="del(index)" class="dels">×</div>
      </div>
      <!-- 内容展示 -->

      <div class="bottom-title" v-if="list.length != []">
        <div>{{ list.length }}item left</div>
        <div class="bottom-rigth" @click="qb">All</div>
        <div
          class="titlte"
          :style="active3"
          v-show="flag2 && flag3"
          @mouseover="yr1"
          @mouseleave="yc1"
          @click="Active(1)"
        >
          Active
        </div>
        <div
          class="titlte"
          :style="active2"
          v-show="flag2 && flag3"
          @mouseover="yr2"
          @mouseleave="yc2"
          @click="Completed(2)"
        >
          Completed
        </div>
        <div
          class="titlte"
          :style="active"
          v-show="flag1"
          @mouseover="yr"
          @mouseleave="yc"
          @click="delAll"
        >
          Clear completed
        </div>
        <!-- mouseover鼠标移入    mouseleave鼠标移出 -->
      </div>
      <!-- /* 底部内容 */ -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "", //输入框的内容
      list: [], //保存添加的内容
      flag1: false, //点击所有状态按钮时显示删除所有
      active: "", //删除所有样式
      flag2: false, //回收站删除的
      flag3: false, //回收站删除的
      active3: "", //Active内容样式
      active2: "", //Completed内容样式
      indexid: 0,
      lists: [],
      listss: [],
    };
  },
  methods: {
    add() {
      // console.log(this.value);
      if (this.value == "") {
        alert("内容不能为空");
        return false;
      }
      // 判断输入框的内容是否为空,为空则提示不能为空
      this.list.push({
        id: this.list.length + 1,
        flag: false,
        value: this.value,
      });
      this.value = "";
      // 添加完让输入框内容为空
    },
    // 点击按钮添加
    change() {
      if (this.value == "") {
        alert("内容不能为空");
        return false;
      }
      // 判断输入框的内容是否为空,为空则提示不能为空
      this.list.push({
        id: this.list.length + 1,
        flag: false,
        value: this.value,
      });
      this.value = "";
      // 添加完让输入框内容为空
    },
    // 点击回车实现添加
    del(index) {
      this.list.splice(index, 1);
    },
    // 点击删除按钮实现删除

    clicks() {
      if (this.list.length == 1) {
        this.flag1 = !this.flag1;
      } else {
        this.flag1 = this.list.some((item) => {
          return item.flag == true;
        });
        //  通过some方法 只要数组有一个满足条件的  那么flag1就是true

        this.flag2 = !this.list.every((i) => {
          return i.flag == true;
        });
        this.flag3 = !this.list.every((i) => {
          return i.flag == false;
        });
      }
    },
    // 点击状态按钮

    Completed(val) {
      // console.log(val);
      this.indexid = val;
      this.lists = this.list.filter((i) => i.flag == true);
    },
    // Completed事件\
    Active(val) {
      this.indexid = val;
      this.listss = this.list.filter((i) => i.flag == false);
    },
    // Active事件
    qb() {
      this.indexid = 0;
    },
    // 点击全部

    yr() {
      this.active =
        "background-color: #fe7345; color:#fff; width: 100px; height: 25px;  line-height: 25px; text-align: center;";
    },
    // 鼠标移入事件
    yc() {
      this.active = "";
    },
    // 鼠标移出事件

    yr1() {
      this.active3 =
        "background-color: #fe7345; color:#fff; width: 60px; height: 25px;  line-height: 25px; text-align: center;";
    },
    // 鼠标移入事件
    yc1() {
      this.active3 = "";
    },
    // 鼠标移出事件

    yr2() {
      this.active2 =
        "background-color: #fe7345; color:#fff; width: 60px; height: 25px;  line-height: 25px; text-align: center;";
    },
    // 鼠标移入事件
    yc2() {
      this.active2 = "";
    },
    // 鼠标移出事件
    delAll() {
      this.list = this.list.filter((i) => i.flag == false);
    },
    // 删除所选内容
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.body {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #ffb0bb, #ffc2a2);
  position: relative;
}

/* 整体 */

.wrap {
  width: 460px;
  /* height: 400px; */
  background-color: #f2f2f2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
}

/* 外部白色盒子 */
header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
}

/* 头部 */
.imgs {
  width: 80px;
  height: 80px;
}

/* 图片 */

.todolist {
  width: 120px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background-color: #fe7345;
  transform: rotate(3deg);
  font-size: 21px;
  color: #fff;
  border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
  /* 前的四个数值表示圆角的水平半径，后面四个值表示圆角的垂直半径 */
  margin-left: 20px;
}

/* todolist字的样式 */
.top-to {
  font-size: 12px;
  margin-top: 25px;
  text-align: center;
}

/* ~ Today I need to字的内容 */

.todo-inputs {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 20px;
}

.inputs {
  width: 260px;
  height: 30px;
  border: none;
  border-bottom: 3px dashed #fd7548;
  background-color: #f2f2f2;
  outline: none;
}

/* input框样式 */
.buttons {
  transform: rotate(3deg);
  border-radius: 15% 15% 15% 15%;
  width: 70px;
  height: 35px;
  margin-left: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 0px #fe7345;
}

/* <!-- 输入框 和 按钮 --> */
.todo-nos {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-size: 13px;
  color: rgba(73, 74, 75, 0.45);
  margin-bottom: 30px;
}

/* 下方内容文字 */

.box {
  display: flex;
  justify-content: space-between;
  // align-items: center;
  padding: 15px 100px 0px 50px;
  margin-bottom: 10px;
  margin-top: 10px;
  .texts {
    margin-left: 10px;
  }
}
/* 添加的内容样式 */

.bottom-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px 0px 50px;
  margin-bottom: 20px;
}

.bottom-rigth {
  width: 30px;
  height: 25px;
  background-color: #fe7345;
  color: #fff;
  line-height: 25px;
  text-align: center;
  font-size: 12px;
}

/* 底部内容 */

.titlte {
  font-size: 12px;
}
// 删除所有的按钮样式

.box1 {
  background-color: #fe7345;
  color: #fff;
  width: 220px;
  height: 20px;
  // line-height: 35px;
  // margin: 0px 0px 12px 50px;
  // padding: 2px;
  display: flex;
  justify-content: space-between;
  // align-items: center;
  margin-left: 30px;
  text-decoration: line-through;
  line-height: 0;
}

</style>

