<template>
  <div class="app">
    <h1>{{ msg }},{{ studentName }}</h1>

    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法) -->
    <Student @atguigu="getStudentName" @demo="m1" @click="show" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
    <!-- <Student ref="student"></Student> -->
  </div>
</template>

<script>
import Student from './components/Student'
import School from './components/School'

export default {
  name: 'App',
  components: { School, Student },
  data () {
    return {
      msg: '你好啊',
      studentName: ''
    }
  },
  methods: {
    getSchoolName (name) {
      console.log('App收到了学校名字', name)
    },
    getStudentName (name, ...params) {
      console.log('App收到了学生名字', name, params)
      this.studentName = name
    },
    m1 () {
      console.log('demo事件被触发了')
    },
    show () {
      alert(1)
    }
  },
  mounted () {
    // this.$refs.student.$on('atguigu', this.getStudentName) //vue3已废弃$on,绑定自定义事件
    // this.$refs.student.$once('atguigu', this.getStudentName) //vue3已废弃$once，绑定自定义事件（一次性）
  }
}
</script>

<style >
.app {
  background-color: aquamarine;
  padding: 5px;
}
</style>
