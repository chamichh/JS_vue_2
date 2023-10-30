<script setup>
import { user } from '@/global-store.js';
</script>
<template>
  <HeaderComponent @user-logged-in="userLoggedIn" @user-logged-out="userLoggedOut"/>
  <NavigationComponent v-if="loggedIn" @show-home="showHome" @show-about-me="showAboutMe" />
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      user: user,
      loggedIn: false,
      showHomeComponent: false,
      showAboutMeComponent: false,
    };
  },
  methods: {
    showHome() {
      this.showHomeComponent = true;
      this.showAboutMeComponent = false;
    },
    showAboutMe() {
      this.showHomeComponent = false;
      this.showAboutMeComponent = true;
    },
    userLoggedIn() {
      this.loggedIn = true;
      this.showHomeComponent = true;
      this.$router.push('/home');
    },
    userLoggedOut() {
      this.loggedIn = false;
      this.showHomeComponent = false;
      this.showAboutMeComponent = false;
      this.$router.push('/');
    },
  },
};
</script>
