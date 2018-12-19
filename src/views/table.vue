<template>
  <div class="about">
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="name"
        label="姓名"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="data"
        label="时间"
        width="250"
      ></el-table-column>
      <el-table-column
        label="计数器"
      >
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData:[{
          data: "2016-7-11",
          name: "山哥",
          num1: 0
        }, {
          data: "2016-7-11",
          name: "钟老师",
          num1: 0
        }, {
          data: "2016-7-11",
          name: "小企鹅",
          num1: 0
        }],
      }
    },
    methods:{
      handleChange(value){
        console.log(value)
      }
    }
  }
</script>
