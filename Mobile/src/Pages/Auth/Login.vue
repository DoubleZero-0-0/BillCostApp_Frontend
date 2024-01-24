<template>
  <v-container class="fill-height">
    <v-row style="border: 1px solid black;border-radius: 10px" align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="headline">Login Page</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                  v-model="email"
                  label="Email"
                  type="email"
                  :rules="emailRules"
                  required
              ></v-text-field>
              <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  :rules="passwordRules"
                  required
              ></v-text-field>
              <v-btn type="submit" color="primary">Login</v-btn> <br><br>
              <hr>
              Don't Have Account,<a href="/Register">Register Now</a>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import axios from "../../axios.js";
import Swal from 'sweetalert2';
import router from "../../router/index.js";


export default defineComponent({
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length >= 5 || 'Password must be at least 6 characters',
      ],
    };
  },
  methods: {
    login() {
      // Your login logic here
      console.log('Logging in...');
      this.loginPost(this.email, this.password);
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
              Swal.fire({
                icon: 'success',
                title: 'Login Successful!',
                text: 'You are now logged in.',
              });
              localStorage.setItem("token",res.data['token']);
              router.push('/');
            })
            .catch((error) => {
              console.log(error.response.data);
              localStorage.setItem("token",error.response.data['token']);
              //check email verified or not
              if (error.response.data['status'] === "406") {
                Swal.fire({
                  icon: 'error',
                  title: 'Login Failed',
                  text: error.response.data['message'],
                });
                const { Email, Name } = error.response['data'];
                router.push("/emailVerify/"+Name+"/"+Email);
              } else {
                Swal.fire({
                  icon: 'error',
                  title: 'Login Failed',
                  text: error.response.data['message'],
                });
              }
            });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
