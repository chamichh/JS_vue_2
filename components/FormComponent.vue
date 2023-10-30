<template>
	<div class="form-component">
	  <label for="first-name" class="form-label">First name</label>
	  <input id="first-name" class="input-field" v-model="user.firstName" :disabled="!editMode" />
	  <label for="last-name" class="form-label">Last name</label>
	  <input id="last-name" class="input-field" v-model="user.lastName" :disabled="!editMode" />
	  <label for="student-code" class="form-label">Student code</label>
	  <input id="student-code" class="input-field" v-model="user.studentCode" :disabled="!editMode" />
	</div>
	<div class="logged-in-at">
	  <label id="logged-in-at" class="logged-in-label">Logged in at</label>
	  <div v-for="timestamp in reversedLoggedInAt" :key="timestamp" class="timestamp">
		{{ timestamp }}
	  </div>
	</div>
  </template>
  
  <script>
  import { user } from "@/global-store.js";
  
  export default {
	props: {
	  editMode: Boolean,
	},
	data() {
	  return {
		user,
	  };
	},
	computed: {
	  reversedLoggedInAt() {
		return user.loggedInAt.slice().reverse();
	  },
	},
	watch: {
	  editMode(newEditMode) {
		if (!newEditMode) {
		  this.$emit("editModeChanged", false);
		}
	  },
	},
  };
  </script>
  
  <style scoped>
  .form-component {
	top: 204px;
	left: 400px;
	position: fixed;
	display: flex;
	flex-direction: column;
  }
  
  .input-field {
	width: 366px;
	height: 42px;
	background-color: #22202B;
	color: #FFFFFF;
	border: none;
	border-radius: 8px;
	padding: 8px;
	margin-bottom: 40px;
  }
  .input-field:disabled {
    background-color: #22202B;
    color: rgba(255, 255, 255, 0.70);
  }

  .input-field:not(:disabled) {
    background-color: #464157;
	color: #FFF;
  }
  
  .form-label {
	color: rgba(255, 255, 255, 0.50);
	font-family: "Inter", sans-serif;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	margin-bottom: 8px;
  }
  
  .logged-in-at {
	top: 520px;
	left: 400px;
	position: fixed;
	display: flex;
	flex-direction: column;
  }
  
  .logged-in-label {
	color: rgba(255, 255, 255, 0.50);
	font-family: "Inter", sans-serif;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	margin-bottom: 20px;
  }
  
  .timestamp {
	color: #544F69;
	font-family: "Inter", sans-serif;
	font-size: 18px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
  }
  </style>