<template>
  <div class="demo">
    <!-- 组件的结构 -->
    <div>
      <h2>学校名称：{{ name }}</h2>
      <h2>学校地址：{{ address }}</h2>
      <button @click="showName">点我提示学校名</button>
    </div>
  </div>
</template>

<script>
//组件交互相关的代码（数据，方法等）
export default {
  name: 'School',
  //el: '#root',//组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务哪一个容器
  data () {
    return {
      name: '尚硅谷',
      address: '北京昌平'
    }
  },
  methods: {
    showName () {
      alert(this.schoolName)
    }
  }
}

</script>

<style>
/* 组件的样式 */
.demo {
  background-color: orange;
}
</style>