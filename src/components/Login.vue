<template>
  <div>
    <md-dialog :md-active="true" class="container">
      <md-dialog-title>Login</md-dialog-title>
      <md-content class="body_form">
        <md-field>
          <label>Username</label>
          <md-input></md-input>
        </md-field>

        <md-field>
          <label>Password</label>
          <md-input type="password"></md-input>
        </md-field>
      </md-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false"
          >Submit</md-button
        >
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
};
</script>

<style scoped>
.body_form {
  width: 300px;
  margin-left: 30px;
  margin-right: 30px;
}
</style>
