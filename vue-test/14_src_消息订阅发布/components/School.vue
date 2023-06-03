<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'School',
  data () {
    return {
      name: '尚硅谷',
      address: '北京',
    }
  },
  methods: {
    demo (msgName, data) {
      console.log('hello消息收到了', data, this)
    }
  },
  mounted () {
    // console.log('School', this)
    // this.x.$on('hello', (data) => {
    //   console.log('我是School组件,收到了数据', data)
    // })

    // this.pubId = pubsub.subscribe('hello', (msgName, data) => {
    //   console.log(this)
    //   // console.log('有人发布了hello消息，hello消息的回调执行了', msgName, data)
    // }) //第一种方法：箭头函数

    this.pubId = pubsub.subscribe('hello', this.demo) //第二种方法
  },
  beforeUnmount () {
    // this.$bus.$off('hello')
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style scoped>
.school {
  background-color: skyblue;
}
</style>