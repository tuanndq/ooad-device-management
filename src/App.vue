<template>
  <div id="app">
    <Login v-if="!isLoggedIn" />
    <div v-else class="container">
      <md-app md-mode="reveal">
        <md-app-toolbar class="md-primary">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title"></span>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible">
          <md-toolbar class="md-transparent" md-elevation="0">Menu</md-toolbar>

          <md-list>
            <md-list-item
              @click="
                () => {
                  isLoggedIn = false;
                }
              "
            >
              <md-icon>logout</md-icon>
              <span class="md-list-item-text">Logout</span>
            </md-list-item>
          </md-list>
        </md-app-drawer>

        <md-app-content> <list-device /> </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<script>
import ListDevice from "./components/ListDevice.vue";
import Login from "./components/Login.vue";

export default {
  name: "App",
  components: {
    Login,
    ListDevice,
  },
  data() {
    return {
      isLoggedIn: true,
      menuVisible: false,
    };
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

.container {
  height: 100%;
}
.md-app {
  height: 100%;
}
.md-app-drawer {
  width: 22%;
}
</style>
