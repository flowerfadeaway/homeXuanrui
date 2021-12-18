<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <router-link to="/root" tag="button">root</router-link>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <router-link to="/xuanxuan" tag="button">xuanxuan</router-link>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <router-link to="/ruirui" tag="button">ruirui</router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {

  }
}
</script>

<style>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
