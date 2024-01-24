<script>
import {defineComponent} from 'vue'
import axios from "@/axios.js";
import {alertError, alertSuccess} from "@/components/JS/alertToster.js";
import router from "@/router/index.js";



export default defineComponent({
  path: '/emailVerify',
  name: "EmailVerify",
  props: ['email', 'name'],
  created() {
    console.log('Received props:', this.email, this.name);
  },
  data() {
    return {
      disabled: true,
      EmailVerifyForm: {
        userEmail: this.email,
        verificationCode: "",
      },
      validationRules: {
        token: [
          { required: true, message: 'Please Check Your Mail', trigger: 'blur' },
          { validator: this.validatePassword, trigger: 'blur' },
        ],
      },
    }
  },
  methods: {

    VerifyEmailCheck() {
      const { userEmail, verificationCode } = this.EmailVerifyForm;

      this.$refs.EmailVerifyForm.validate((valid) => {
        if (valid) {
          // this.VerifyEmail(email, token);
         this.VerifyEmail(userEmail,verificationCode);
        } else {
          // Form validation failed
        }
      });
    },
    async VerifyEmail(email, token) {
      try {
        const postData = {
          userEmail: email,
          verifyToken: token,
        };

        const headers = {
          'Content-Type': 'application/json',
          'Authorization' : localStorage.getItem('token')
        };

        const dataJson = JSON.stringify(postData);

        axios.post("/emailVerified", dataJson, { headers })
            .then((res) => {
              console.log(res.data);
              alertSuccess(res.data['message']);
              router.push('/');
            })
            .catch((error) => {
              console.log(error)
              alertError("Token was invalid")
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
        <el-form ref="EmailVerifyForm" :model="EmailVerifyForm" label-width="80px" rules="rules"
                 style="padding: 20px">
          <h2 class="text-center headLineFont">Email Verify</h2>
          <hr />
          <small>Hey {{this.name}}, Your Email Are Not Verified , Please Verify First!!!</small>
          <hr>
          <el-form-item label="Email:" prop="email" >
            <el-input v-model="EmailVerifyForm.userEmail" :disabled="disabled" type="text" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Token:" prop="verificationCode" :rules="validationRules.token">
            <el-input placeholder="Enter 4 Digit Number" v-model="EmailVerifyForm.verificationCode" type="number" autocomplete="off"></el-input>
          </el-form-item>
          <el-button class="btn" type="primary" @click="VerifyEmailCheck">Verify</el-button>
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