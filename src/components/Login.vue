<template>
  <div>
    <md-dialog :md-active="true" class="container">
      <md-dialog-title>Login</md-dialog-title>
      <md-dialog-content class="body_form">
        <md-field>
          <label>Username</label>
          <md-input v-model="username"></md-input>
        </md-field>

        <md-field>
          <label>Password</label>
          <md-input v-model="password" type="password"></md-input>
        </md-field>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="handleLogin">Submit</md-button>
        <md-button class="md-primary" @click="showDialog = false"
          >Cancle</md-button
        >
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      this.showDialog = false;
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
.body_form {
  width: 400px;
}
.md-field {
  max-width: 100%;
}
</style>
