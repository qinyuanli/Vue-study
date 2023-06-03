<template>
  <h2>我是About组件</h2>
</template>

<script>
export default {
  name: 'About',
  beforeUnmount () {
    console.log('About组件即将被销毁了')
  }
}
</script>

<style>
</style>