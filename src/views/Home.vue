<template>
  <div class="home">
    <el-form :inline="true" ref="sizeForm" :rules="reles" :model="sizeForm" label-width="80px" size="small">
      <el-form-item  
        label="密码"
        prop="pass"
      >
        <el-input type="password" v-model="sizeForm.pass"></el-input>
      </el-form-item>
      <el-form-item  
        label="确认密码"
        prop="checkPass"
      >
        <el-input type="password" v-model="sizeForm.checkPass"></el-input>
      </el-form-item>
      <br>
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
    var pass = (rule, value, callback) =>{
      if( value === "" )
        callback( new Error("请输入密码"))
      else
        if( this.sizeForm.checkPass !== "")
          this.$refs.sizeForm.validateField("checkPass")
      callback
    }
    var twoPass = (rule, value, callback) => {
      if( value === "" )
        callback( new Error("请再次输入密码") )
      else if( value != this.sizeForm.pass )
        callback( new Error("两次输入的密码不一致！") )
      else
        callback()
    }
    return {
      sizeForm: {
        pass: ""
      },
      reles: {
        pass: [
          { validator: pass, trigger: 'blur' },
          { min : 2 , max : 5,  message: `长度在 2 到 5 个字节`}
        ],
        checkPass:[
          { validator: twoPass, trigger: 'blur' },
        ]

      }
    }
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

