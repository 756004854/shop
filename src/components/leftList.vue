<template>
  <div>
    <template v-for="(value,index) in list">
      
      <router-link v-if="! value.children " :to="{path:value.path}" class="menu-warpper" :key="index" >{{ value.name }}</router-link>
      <el-collapse v-if=" value.children " @change="handleChange" :key="index">
        <el-collapse-item   :title=" value.name "  >
          <router-link :to="{path:value.path}" class="menu-warpper" :key="index" >{{ value.name }}</router-link>
          <router-link v-for="(v,i) in value.children" :to="{path:v.path}" class="menu-warpper" :key="i" >{{ v.path }}</router-link>
        </el-collapse-item>
      </el-collapse>
    </template>
  </div>
</template>

<script>
export default {
  name: 'leftList',
  props: {
    list: Array
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.menu-warpper{
  height: 56px;
  display: block;
  line-height: 56px;
  padding: 0 20px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  transition: all .2s;
  &:hover{
    background: rgb(38,52,69)
  }
}
</style>
