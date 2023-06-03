<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: 'Student',
  data () {
    return {
      name: '王麻子',
      sex: '男'
    }
  },

}
</script>
