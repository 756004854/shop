<template>
  <div class="home">
    <el-form :inline="true" ref="sizeForm" :model="sizeForm" label-width="80px" size="small">
      <el-form-item  
        label="姓名"
        prop="name" 
        :rules="[
          { required: true, message: '姓名不能为空' }
        ]"
      >
        <el-input type="name" v-model="sizeForm.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('sizeForm')">提交</el-button>
        <el-button @click="resetForm('sizeForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data(){
    return {
      sizeForm: {
        name: ""
      }
    }
  },
  components: {
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        console.log(this.sizeForm)
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style scoped>
  .el-form{
    width: 500px;
  }
</style>

