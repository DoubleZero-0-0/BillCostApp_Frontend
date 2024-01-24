<script>
import {defineComponent} from 'vue'
import axios from "@/axios";
import { alertSuccess, alertError } from "@/components/JS/alertToster";
import router from "@/router/index.js";

export default defineComponent({
  name: "register",
  data() {
    return {
      registerForm: {
        name: "",
        email: "",
        password: "",
      },
      validationRules: {
        name: [
          { required: true, message: 'Please Write Your Name', trigger: 'blur' },
          { validator: this.validateNameCheck, trigger: 'blur' },
        ],
        email: [
          { required: true, message: 'Please Write Your Email', trigger: 'blur' },
          { validator: this.validateEmailCheck, trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Please Enter Password', trigger: 'blur' },
          { validator: this.validatePassword, trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    //filed Validations
    validateNameCheck(rule, value, callback) {
      if (value) {
        callback();
      } else {
        callback(new Error("Please write a valid name."));
      }
    },
    validateEmailCheck(rule, value, callback) {
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


    RegisterPostCheck() {
      const { name, email, password } = this.registerForm;

      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          this.registerUser(name, email, password);
        } else {
          // Form validation failed
        }
      });
    },


    async registerUser(name, email, password) {
      try {
        const postData = {
          userName: name,
          userEmail: email,
          userPassword: password,
        };

        const headers = {
          'Content-Type': 'application/json',
        }

        const dataJson = JSON.stringify(postData);

        // Request send to API
        axios.post("/register", dataJson, { headers })
            .then((res) => {
              if (res.data['code'] === 0) {
                alertSuccess("Registration Success");
                router.push("/login");
              } else {
                alertError("Registration Failed");
              }
            })
            .catch((error) => {
              console.log(error);
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
        <el-form ref="registerForm" :model="registerForm" label-width="80px" rules="rules" style="padding: 20px">
          <h2 class="text-center headLineFont">BillCostApp</h2>
          <hr />
          <h3 class="">Registration</h3>
          <el-form-item label="Name" prop="name" :rules="validationRules.name">
            <el-input v-model="registerForm.name" type="text" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Email" prop="email" :rules="validationRules.email">
            <el-input v-model="registerForm.email" type="text" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password" :rules="validationRules.password">
            <el-input v-model="registerForm.password" type="password" autocomplete="off"></el-input>
          </el-form-item>
          <el-button class="btn" type="primary" @click="RegisterPostCheck">Registration</el-button>
          <p>
            Account Have，Please
            <router-link to="/login" @click.prevent>Login</router-link>
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