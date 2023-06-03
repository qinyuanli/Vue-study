<template>
  <div>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
import { mixin, hunhe2 } from '../mixin'
export default {
  name: 'Student',
  data () {
    return {
      name: '王麻子',
      sex: '男'
    }
  },
  mixins: [mixin, hunhe2]

}
</script>
