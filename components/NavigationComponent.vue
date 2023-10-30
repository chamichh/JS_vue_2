<template>
  <div class="sidebar">
      <router-link class="button" to="/home" @click="showHome" :class="{ active: isHomeActive }">HOME</router-link>
      <router-link class="button" to="/about-me" @click="showAboutMe" :class="{ active: isAboutMeActive }">ABOUT ME</router-link>
  </div>
</template>
<script>
export default {
  data() {
      return {
          isHomeActive: true,
          isAboutMeActive: false,
      };
  },
  methods: {
      showHome() {
          this.isHomeActive = true;
          this.isAboutMeActive = false;
          this.$emit("show-home");
      },
      showAboutMe() {
          this.isHomeActive = false;
          this.isAboutMeActive = true;
          this.$emit("show-about-me");
      },
  },
};
</script>
<style scoped>
  .sidebar {
      top: 80px;
      left: 0;
      position: fixed;
      width: 350px;
      height: 100%;
      display: flex;
      flex-direction: column;
  }
  .button{
        background-color: transparent;
        color: white;
        border: none;
        width: 70%;
        padding: 10px 20px;
        cursor: pointer;
        margin-top: 20px;
        margin-left: 20px;
  }
  .button.active {
      background-color: #8645E8;
  }
  h1{
      color: black;
  }
</style>