<template>
  <div class="box">
    <div class="title">
      <h1>ABOUT ME</h1>
      <div class="separator"></div>
      <button class="button" @click="toggleEditMode" :class="{ active: editMode }">
        {{ editMode ? 'CANCEL' : 'EDIT FORM' }}
      </button>
    </div>
    <FormComponent :editMode="editMode"/>
  </div>
</template>

<script>
import FormComponent from '@/components/FormComponent.vue';
export default {
  components: {
    FormComponent,
  },
  data() {
    return {
      editMode: false,
    };
  },
  methods: {
    toggleEditMode() {
      this.editMode = !this.editMode;

    },
    updateEditMode(newEditMode) {
      this.editMode = newEditMode;
    },
  },
};
</script>

<style scoped>
  .title {
    display: flex;
    align-items: center;
  }
  .separator {
    width: 1px;
    height: 39px;
    background-color: #464157;
    margin: 0 20px;
  }
  .box {
    top: 100px;
    left: 370px;
    position: fixed;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-left: 30px;
  }
  .button {
    width: 97px;
    height: 33px;
    border-radius: 50px;
    color: #FFFFFF;
    background-color: #8645E8;
  }
  .button.active {
    color: #D7B8FF;
    background-color: #391372;
  }
</style>