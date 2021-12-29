<template>
  <div>
    <el-table
      :data="tableData"
      height="500"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="文件名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="path"
        label="文件目录"
        width="180">
      </el-table-column>
      <el-table-column
        prop="file"
        label="文件属性" :formatter="formatBoolean">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="180">
        <template slot-scope="scope">
          <el-button @click="handleLookup(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="handleDownload(scope.row)" type="text" size="small">下载</el-button>
<!--          <el-button @click="handleUpload(scope.row)" type="text" size="small">上传</el-button>-->
          <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br>
    <div>
      <input type="file" value="上传" id="file" @change="handleUpload">
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'myTable',
  props: {
    propsTableData: Array
  },
  data () {
    return {
      tableData: this.propsTableData
    }
  },
  watch: {
    propsTableData (val) {
      this.tableData = val
    }
  },
  methods: {
    formatBoolean: function (row, column, cellValue) {
      let ret = '' // 你想在页面展示的值
      if (cellValue) {
        ret = '是' // 根据自己的需求设定
      } else {
        ret = '否'
      }
      return ret
    },
    handleLookup (row) {
      // console.log(row)
      // console.log(row.file)
      let isFile = row.file
      if (isFile) {
        alert('文件不能进入！')
        return undefined
      }
      let path = row.path + '/' + row.name
      // console.log(path)
      axios.get('/home/getProfile', {
        params: {
          id: this.$route.name,
          path: path
        },
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      }).then((response) => {
        this.$parent.$data.fileList = response.data.data
        this.$parent.$data.currentPath = path
      }).catch((error) => {
        console.log(error)
      })
    },
    handleDownload (row) {
      let isFile = row.file
      if (!isFile) {
        alert('文件夹不能下载！')
        return undefined
      }
      let path = row.path + '/' + row.name
      window.open('/home/download?id=' + this.$route.name + '&path=' + path)
      // axios.get('http://localhost:9500/home/download', {
      //   params: {
      //     id: this.$route.name,
      //     path: path
      //   },
      //   options: {
      //     responseType: 'blob'// 设置返回类型
      //   },
      //   headers: {
      //     'Content-Type': 'application/json;charset=utf-8'
      //   }
      // }).then((response) => {
      //   this.$parent.$data.fileList = response.data.data
      // }).catch((error) => {
      //   console.log(error)
      // })
    },
    handleUpload (e) {
      let formData = new FormData()
      let data = JSON.stringify({
        path: this.$parent.$data.currentPath
      })
      formData.append('files', e.target.files[0])
      formData.append('data', data) // 上传文件的同时， 也可以上传其他数据
      // let url = this.$store.state.path + 'api/tools/handle_upload_file'
      let url = '/home/upload'
      let config = {
        headers: {'Content-Type': 'multipart/form-data'}
      }
      console.log('axios...')
      // this.$axios.post(url, formData, config).then(function (response) {
      //   console.log(response.data)
      // })
      axios({
        url: url,
        method: 'POST', //  这个地方注意
        config: config,
        data: formData,
        file: e.target.files[0],
        processData: false,
        contentType: false,
        success: (response) => {
          console.log('upload_success_response:', response)
        }
      })
      alert('上传成功！')
    },
    handleEdit (row) {
      alert('功能正在开发中ing！')
    }
  }
}
</script>

<style scoped>

</style>
