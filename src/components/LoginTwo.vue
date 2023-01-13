<!-- 通过const validName = (rule, value, callback) 进行登录验证-->

<template>
    <div class="login">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>通用后台管理系统</span>
        </div>
        <el-form label-width="80px" :model="form" ref="form" :rules="rules">
          <el-form-item label="用户名" prop="username">
            <!-- prop做检验用 -->
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login('form')">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      const validName = (rule, value, callback) => {
        //请输入4-10位昵称
        let reg = /(^[a-zA-Z0-9]{4,10}$)/; //英文字母a-z,A-Z,数字0-9，位数4-10
        if (value === "") {
          callback(new Error("请输入用户名"));
        } else if (!reg.test(value)) {
          callback(new Error("请输入4-10位昵称"));
        } else {
          callback();
        }
      };
      const validPass = (rule, value, callback) => {
        //请输入6-12位密码 需要包含大小写数字以及特殊符号
        let pass =
          /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
        if (value === "") {
          callback(new Error("请输入密码"));
        } else if (!pass.test(value)) {
          callback(new Error("请输入6-12位密码,需要包含大小写数字以及特殊符号"));
        } else {
          callback();
        }
      };
      return {
        form: {
          username: "",
          password: "",
        },
        rules: {
          username: [{ validator: validName, trigger: "blur" }],
          password: [{ validator: validPass, trigger: "blur" }],
        },
      };
    },
    methods: {
      login(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            console.log("log", this.form);
            this.axios
              .post("https://rapserver.sunmi.com/app/mock/340/login", this.form)
              .then((res) => {
                console.log(res);
                if (res.data.status === 200) {
                  localStorage.setItem("username", res.data.username);
                  this.$message({ message: res.data.message, type: "scssess" });
                  this.$router.push("/home");
                }
              })
              .catch((err) => {
                console.error(err);
              });
          } else {
            console.error("error", this.form);
          }
        });
      },
    },
  };
  </script>
  
  <style lang="scss">
  .login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #409eff;
    .box-card {
      width: 450px;
      margin: 200px auto;
      .el-card__header {
        font-size: 34px;
      }
      .el-button {
        width: 100%;
      }
    }
  }
  </style>
  