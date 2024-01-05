<script>
import {ElNotification} from "element-plus";
import axios from '@/axios';
import router from "@/router";
import { validateEmail,loginPost } from '@/views/LoginView/LoginMethod.js';
import {alertSuccess,alertError} from '@/components/js/alertToster';




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

    validateEmailCheck()
    {
      validateEmail
    },

    
    LoginPostCheck()
    {
      loginPost(this.loginForm.email,this.loginForm.password);
    }
    
 

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
          <el-button class="btn" type="primary" @click="LoginPostCheck">Login</el-button>
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