<script setup>
import {user, logIn, resetValues} from '@/global-store.js';
</script>
<template>
    <div class = "header" :style="{ 'background-color': headerColor }">
        <img src="@/assets/logo (white).svg" class="logo" />
        <h1 class="siteName" :style="{ 'margin-right' : marginRight}">HelloPG</h1>
        <img v-if="user.loggedInStatus" src="@/assets/avatar.png" class="avatar" />
        <h1 v-if="user.loggedInStatus" class="fullName">{{ full_name }}</h1>
        <button @click="handleLogin" class="login_button" :style='buttonStyle'>
            {{ user.loggedInStatus ? 'LOGOUT' : 'LOGIN' }}
        </button>
    </div>
</template>
<script>
    export default {
        data() {
          return {
            headerColor: "rgba(8, 2, 16, 0.50)",
            marginRight: "86%"
            };
        },
        computed: {
          full_name() {
            return user.firstName + ' ' + user.lastName;
          },
          buttonStyle() {
            return {
              'background-color': this.buttonBackgroundColor,
              'color': this.buttonTextColor,
            };
          },
          buttonBackgroundColor() {
            return this.headerColor === 'rgba(8, 2, 16, 0.50)' ? '#8645E8' : '#391372';
          },
          buttonTextColor() {
            return this.headerColor === 'rgba(8, 2, 16, 0.50)' ? '#1C073A' : '#D7B8FF';
          },
        },
        methods: {
            handleLogin() {
                if (user.loggedInStatus) {
                    //for login
                    const confirmLogout = confirm('Do you want to log out?');
                    if (confirmLogout) {
                      resetValues();
                      this.headerColor = "rgba(8, 2, 16, 0.50)";
                      this.marginRight = "86%";
                      this.$emit('user-logged-out');
                    }
                } else {
                    //for log out
                    const confirmLogin = confirm('Do you want to log in?');
                    if (confirmLogin) {
                      logIn();
                      this.marginRight = "75%";
                      this.headerColor = "#8645E8";
                      this.$emit('user-logged-in');
                    }
                }
            }
        }        
    };
</script>
  
<style scoped>
.header {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #8645E8;
  display: flex;
  align-items: center;
}

.logo {
  width: 60px;
  margin-left: 20px;
}

.siteName {
  font-size: 24px;
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  margin-left: 10px;
  margin-right: 86%;
}

.login_button {
  background-color: #8645E8;
  color: #D7B8FF;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 10px;
}

.fullName {
  font-size: 24px;
  margin-right: 30px;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 50px;
  display: flex;
}
</style>