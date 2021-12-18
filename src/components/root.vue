<template>
  <div>
    <h2>这里是root页面</h2>
    <my-table :props-table-data="fileList"/>
  </div>
</template>

<script>
import axios from 'axios'
import myTable from './myTable'

window.list = 'this is windows list'

export default {
  name: 'root',
  data () {
    return {
      fileList: ['1', '2'],
      aaaaaa1: '123'
    }
  },
  mounted () {
    console.log(this.$route.name)
    // setTimeout(async () => {
    //   axios.get('http://localhost:9500/home/getProfile', {
    //     params: {
    //       id: this.$route.name
    //     }
    //   }).then(function (response) {
    //     console.log(response)
    //     console.log(response.data.data)
    //     console.log(this)
    //     console.log(this.list)
    //     console.log(this.fileList)
    //     this.fileList = response.data
    //     console.log(this.fileList)
    //     console.log(response.data.data)
    //   }).catch(function (error) {
    //     console.log(error)
    //   })
    // }, 2000)
    // console.log(this)
    // console.log(this.list)
    axios.get('http://localhost:9500/home/getProfile', {
      params: {
        id: this.$route.name
      }
    }).then((response) => {
      // console.log(response)
      // console.log(response.data.data)
      // console.log(this)
      // console.log(this.list)
      // console.log(this.fileList)
      this.fileList = response.data.data
      console.log(this.fileList)
    }).catch((error) => {
      console.log(error)
    })
  },
  components: {
    myTable
  }
}
</script>

<style scoped>

</style>
