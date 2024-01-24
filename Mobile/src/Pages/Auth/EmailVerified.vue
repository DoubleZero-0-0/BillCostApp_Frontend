<template>
  <v-container  class="fill-height">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Email Verification</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <div>
              <p>Hey {{ this.name }},</p>
              <p>Please verify your email:</p>
              <v-chip color="info">{{ this.email }}</v-chip>
            </div>

            <v-form ref="form" @submit.prevent="verifyEmail">
              <v-text-field
                  v-model="token"
                  label="Verification Token"
                  required
              ></v-text-field>
              <v-btn type="submit" color="primary">Verify Email</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "../../axios.js";
import Swal from 'sweetalert2';
import router from "../../router/index.js";
export default {
  props: ['email', 'name'],
  data() {
    return {
      token: '',
    };
  },
  methods: {
    verifyEmail() {
      // Client-side validation
      if (this.$refs.form.validate()) {
        // Form is valid, send data to your API
        const dataToSend = {
          email: this.email,
          name: this.name,
          token: this.token,
        };
        this.VerifyEmail(this.email,this.token);
      }
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
              Swal.fire({
                icon: 'success',
                title: 'Verify Successful!',
                text: 'You are now logged in.',
              });
              router.push('/');
            })
            .catch((error) => {
              console.log(error)
              Swal.fire({
                icon: 'error',
                title: 'Verify Failed',
                text: error.response.data['message'],
              });
            });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
