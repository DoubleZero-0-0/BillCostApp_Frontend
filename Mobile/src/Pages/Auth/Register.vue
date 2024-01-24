<template>
  <v-container class="fill-height">
    <v-row style="border-radius: 10px" align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" @submit.prevent="register">
              <v-text-field
                  v-model="user.username"
                  label="Username"
                  required
              ></v-text-field>
              <v-text-field
                  v-model="user.email"
                  label="Email"
                  required
                  :rules="emailRules"
              ></v-text-field>
              <v-text-field
                  v-model="user.password"
                  label="Password"
                  type="password"
                  required
              ></v-text-field>
              <v-text-field
                  v-model="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  required
                  :rules="confirmPasswordRules"
              ></v-text-field>
              <v-btn type="submit" color="primary">Register</v-btn>
              <br><br>
              <hr>
              Have Account,<a href="/Login">Login Now</a>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
      },
      confirmPassword: '',
      emailRules: [
        (v) => !!v || 'Email is required',
        (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
      confirmPasswordRules: [
        (v) => !!v || 'Confirm password is required',
        (v) =>
            v === this.user.password || 'Confirm password must match password',
      ],
    };
  },
  methods: {
    register() {
      // Client-side validation
      if (this.$refs.form.validate()) {
        // Form is valid, send data to your API
        const dataToSend = {
          username: this.user.username,
          email: this.user.email,
          password: this.user.password,
        };

        // Example: Send data to an API using Axios
        // Replace this with your actual API endpoint and method
        // axios.post('/api/register', dataToSend)
        //   .then(response => {
        //     console.log(response.data);
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });
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
