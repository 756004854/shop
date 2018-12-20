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
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        <el-switch
          v-model="scope.row.value"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
        <el-input-number v-model="scope.row.num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
      </template>
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
          value: true,
          num1: 0
        }, {
          data: "2016-7-11",
          name: "钟老师",
          value: false,
          num1: 0
        }, {
          data: "2016-7-11",
          name: "小企鹅",
          value: true,
          num1: 0
        }],
      }
    },
    methods:{
      handleEdit(value){
        console.log(value)
      },
      handleChange(){
        console.log(2)
      }
    }
  }
</script>
