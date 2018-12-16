<template>
  <div id="app">
    <el-container>
      <el-aside style="width: 180px;">
        <leftList :list="getLeftList()" ></leftList> 
      </el-aside>
      <el-main>
        <router-view/> 
      </el-main>
    </el-container>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
  </div>
</template>

<script>
import leftList from "@/components/leftList.vue"
export default {
  name: 'app',
  components: {
    leftList
  },
  methods:{
    getLeftList(){
      return this.$router.options.routes 
    }
  },
  created(){
    console.log(this.$router.options.routes )
  }
}
</script>

<style lang="less">
#app, html, body, .el-container{
  width: 100%;
  height: 100%;
}
.el-aside{
  background: rgb(48, 65, 86)
}
</style>
