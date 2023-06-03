<template>
  <div class="demo">
    <!-- 组件的结构 -->
    <div>
      <h2>学生姓名：{{ name }}</h2>
      <h2>学生年龄：{{ age }}</h2>
    </div>
  </div>
</template>

<script>
//组件交互相关的代码（数据，方法等）
export default {
  name: 'Student',
  //el: '#root',//组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务哪一个容器
  data () {
    return {
      name: '张三',
      age: 13
    }
  }
}

</script>

<style>
/* 组件的样式 */
</style>