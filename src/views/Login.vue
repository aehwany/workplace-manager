<template>
  <div class="login">
    <v-container class="my-5">
      <h1 class="my-5 display-1 font-weight-light">Login</h1>
      <v-row class="my-5 py-5">
        <v-col cols="0" sm="3"></v-col>

        <v-col cols="12" sm="6" class="my-5 py-5">
          <v-text-field
            type="email"
            name="email"
            class="mb-3"
            label="Email"
            width="50%"
            :rules="emailRules"
            @keyup.enter="login"
            v-model="loginUser.email"
            prepend-icon="mdi-account"
            required
          ></v-text-field>

          <v-text-field
            type="password"
            name="password"
            class="mb-3"
            label="Password"
            width="50%"
            v-model="loginUser.password"
            @keyup.enter="login"
            prepend-icon="mdi-key"
            required
          ></v-text-field>

          <div class="primary--text" v-html="error"></div>

          <v-btn
            text
            :loading="loading"
            @click="login"
            class="background mx-0 mt-3 primary--text text-uppercase"
          >login</v-btn>
        </v-col>

        <v-col cols="0" sm="3"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const firebaseConfig = require("../firebaseConfig.js");

export default {
  name: "Login",
  data() {
    return {
      loginUser: {
        email: "",
        password: "",
      },
      loading: false,
      error: "",
      emailRules: [
        (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
    };
  },
  methods: {
    async login() {
      this.loading = true;
      try {
        const user = await firebaseConfig.auth.signInWithEmailAndPassword(
          this.loginUser.email,
          this.loginUser.password
        );
        if (!user.user.emailVerified) {
          console.log("Email not verified");
          await user.user.sendEmailVerification();
          console.log("Email Sent!!");
          firebaseConfig.auth.signOut();
          // display error message that the email is not verified
        } else {
          this.$store.dispatch("setUser", user.user);
          console.log("Logged In!!");
        }
      } catch (e) {
        console.log(e.code + " " + e.message);
        this.error = e.code + " " + e.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
