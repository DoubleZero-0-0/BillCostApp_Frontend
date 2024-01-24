<script>
import {defineComponent} from 'vue'
import axios from "@/axios";
import { alertSuccess, alertError } from "@/components/JS/alertToster";
import router from "@/router";

export default defineComponent({
  name: "login",
  data(){
    return {
      loginForm: {
        email: "",
        password: "",
      },
      validationRules: {
        email: [
          { required: true, message: 'Please Write Your Email', trigger: 'blur' },
          { validator: this.validateEmail, trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Please Enter Password', trigger: 'blur' },
          { validator: this.validatePassword, trigger: 'blur' },
        ],
      },
    }
  },
  methods : {
    //from validations
    validateEmail(rule, value, callback) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailRegex.test(value)) {
        callback();
      } else {
        callback(new Error("Please Write a valid Email"));
      }
    },
    validatePassword(rule, value, callback) {
      // Add your password validation logic here if needed
      callback();
    },
    LoginPostCheck() {
      const { email, password } = this.loginForm;

      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loginPost(email, password);
        } else {
          // Form validation failed
        }
      });
    },

    async loginPost(email, password) {
      try {
        const postData = {
          userEmail: email,
          userPassword: password,
        };

        const headers = {
          'Content-Type': 'application/json',
        };

        const dataJson = JSON.stringify(postData);

        axios.post("/login", dataJson, { headers })
            .then((res) => {
                alertSuccess("Login Successfully!!");
                localStorage.setItem("token",res.data['token']);
                router.push('/');
            })
            .catch((error) => {
              console.log(error.response.data.data);
              localStorage.setItem("token",error.response.data.data['token']);
              //check email verified or not
              if (error.response.data['status'] === "406") {
                alertError(error.response.data['message']);
                const { Email, Name } = error.response.data['data'];
                router.push("/emailVerify/"+Name+"/"+Email);
              } else {
                alertError(error.response.data['message']);
              }
            });
      } catch (error) {
        console.log(error);
      }
    },
  }
})
</script>

<template>
  <div class="ViewBody">
    <el-row justify="center" align="middle" id="el-row">
      <el-col :md="{ span: '6' }" :sm="{ span: '12' }" id="el-col">
        <el-form ref="loginForm" :model="loginForm" label-width="80px" rules="rules" style="padding: 20px">
          <h2 class="text-center headLineFont">BillCostApp</h2>
          <hr />
          <h3 class="">Login</h3>
          <el-form-item label="Email" prop="email" :rules="[
            {
              required: true,
              message: 'Please Write Your Email',
              trigger: 'blur',
            },
            { validator: validateEmail, trigger: 'blur' },
          ]">
            <el-input v-model="loginForm.email" type="text" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password" :rules="[
            {
              required: true,
              message: 'Please Enter Password',
              trigger: 'blur',
            },
            { validator: validatePassword, trigger: 'blur' },
          ]">
            <el-input v-model="loginForm.password" type="password" autocomplete="off"></el-input>
          </el-form-item>
          <el-button class="btn" type="primary" @click="LoginPostCheck">Login</el-button>
          <p>
            No Account，Please
            <router-link to="/register" @click.prevent>Registrations</router-link>
          </p>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>


#el-row {
  height: 100vh;
}

#el-col {
  box-shadow: 10px 10px 10px 10px lightblue;
  padding: 10px;
  border: 1px solid black;
  background: rgba(255, 255, 255, 0.76);
}

.btn {
  margin: 3px;
}

p {
  margin: 5px 5px;
}
</style>