<script>
import {ElNotification} from "element-plus";
import axios from '@/axios';
import router from "@/router";
import {validateEmail} from '@/views/LoginView/LoginMethod.js';



export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
      },
    };
  },
  methods: {

    validateEmail,

    async loginReq() {
          try {
            const postData = {
                username: this.loginForm.username,
                userpassword: this.loginForm.password
              }

            const postDataJson = JSON.stringify(postData);
            const response = await axios.post('/api/login', postDataJson, {
              headers: {
                'Content-Type': 'application/json',
              },
            });

            if (response.data['data'] !== null) {
              console.log(response.data['data']);

              const token = localStorage.setItem("token", response.data['data']);

              const notificationOptions = {
                title: '成功',
                message: '登录成功',
                type: 'success',
              };

              ElNotification(notificationOptions);

              this.$router.push('/');
            } else {
              const notificationOptions = {
                title: '错误',
                message: response.data['message'],
                type: 'error',
              };

              ElNotification(notificationOptions);
            }
          } catch (error) {
            // Handle errors here
            console.error('Error during login:', error);

            const notificationOptions = {
              title: '错误',
              message: '登录时发生错误',
              type: 'error',
            };

            ElNotification(notificationOptions);
          }
        },

    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {

            this.loginReq();
        } else {
          console.log('Login failed');
          const notificationOptions = {
            title: '错误',
            message: '请填写表格并确保正确。',
            type: 'error',
          };

          ElNotification(notificationOptions);
        }
      });
    },
  },
};
</script>

<template>
  <div class="LoginViewBody">
    <el-row justify="center" align="middle" id="el-row" >
      <el-col  :md="{span:'6'}" :sm="{span:'12'}"   id="el-col">
        <el-form ref="loginForm" :model="loginForm" label-width="80px" rules="rules" style="padding: 20px">
          <h2 class="text-center headLineFont">BillCostApp</h2>
          <hr>
          <h3 class="">Login</h3>
          <el-form-item label="Email" prop="email" :rules="[{ required: true, message: 'Please Write Your Email', trigger: 'blur' }, {validator: validateEmail , trigger: 'blur'}]">
            <el-input v-model="loginForm.email" type="text" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password" :rules="[{ required: true, message: 'Please Enter Password', trigger: 'blur' }, {validator: validatePassword , trigger: 'blur'}]">
            <el-input v-model="loginForm.password" type="password" autocomplete="off"></el-input>
          </el-form-item>
          <el-button class="btn" type="primary" @click="login">Login</el-button>
          <p>No Account，Please <router-link to="/register"  @click.prevent>Registrations</router-link></p>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.LoginViewBody {
  width: 100%;
  height: 100%;
  background: url("public/money.png");
  background-size: cover;

}

#el-row
{
  height: 100vh;

}

#el-col
{
  box-shadow: 10px 10px 10px 10px lightblue; padding: 10px;border: 1px solid black;
  background: rgba(255, 255, 255, 0.76);
}

.btn
{
  margin: 3px;
}

p{
  margin: 5px 5px;
}
</style>