<template>
  <div>
    <Student></Student>
    <hr />
    <School></School>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/Xuexiao.vue'

export default {
  name: "App",
  components: { Student, School },
  data () {
    return {
    }
  },
}
</script>

<style>
</style>