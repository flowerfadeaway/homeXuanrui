<template>
  <h2>这里是ruirui页面</h2>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ruirui',
  mounted () {
    console.log(this.$route.name)
    axios.get('http://localhost:9500/home/getProfile', {
      params: {
        id: this.$route.name
      }
    }).then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
