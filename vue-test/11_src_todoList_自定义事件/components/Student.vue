<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>当前求和为:{{ number }}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <!-- <button @click="unbind">解绑atguigu事件</button> -->
    <!-- <button @click="death">销毁当前Student组件的实例对象</button> -->
  </div>
</template>

<script>
export default {
  name: 'Student',
  data () {
    return {
      name: '张三',
      sex: '男',
      number: 0
    }
  },
  methods: {
    sendStudentName () {
      //触发Student组件实例对象上的atguigu事件
      this.$emit('atguigu', this.name, 666, 888, 222, "atguigu")
      // this.$emit('click')
      // this.$emit('demo')
    },
    unbind () {
      this.$off('atguigu') //在vue3里被弃用，适用于解绑一个事件
      this.$off(['atguigu', 'demo']) //解绑多个事件
      this.$off() //解绑所有的自定义事件
    },
    death () {
      console.log(this)
      this.$destroy()() //vue3中destroy生命周期重写成了unmounted,所有有bug，销毁了当前的Student实例
    },
    add () {
      console.log('add回调被调用了')
      this.number++
    }
  }
}
</script>

<style lang="less" scoped>
.student {
  background-color: pink;
}
</style>
