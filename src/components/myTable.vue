<template>
  <div>
    <el-table
      :data="tableData"
      height="250"
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
        label="文件属性">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
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
  }
}
</script>

<style scoped>

</style>
