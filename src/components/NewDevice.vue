<template>
  <md-dialog :md-active.sync="isShow">
    <md-dialog-title>Preferences</md-dialog-title>

    <md-dialog-content> hello </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click="isShow = false">Close</md-button>
      <md-button class="md-primary" @click="isShow = false">Save</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
export default {
  props: ["showDialog"],
  name: "NewDeviceDialog",
  data() {
    return {
      isShow: this.showDialog,
    };
  },
};
</script>

<style></style>
