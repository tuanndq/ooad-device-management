<template>
  <div>
    <form @submit.prevent="handleLogin">
      <md-dialog :md-active="true" class="container">
        <md-dialog-title>Login</md-dialog-title>
        <md-dialog-content class="body_form">
          <md-field>
            <label>Username</label>
            <md-input v-model="username"></md-input>
          </md-field>

          <md-field>
            <label>Password</label>
            <md-input
              v-model="password"
              type="password"
              v-on:keyup.enter="handleLogin"
            ></md-input>
          </md-field>
        </md-dialog-content>
        <md-dialog-actions>
          <md-button class="md-primary" @click="handleLogin">Submit</md-button>
          <md-button class="md-primary" @click="handleCancel">Cancle</md-button>
        </md-dialog-actions>
      </md-dialog>
    </form>
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
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
    },
    handleCancel() {
      (this.username = ""), (this.password = "");
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
