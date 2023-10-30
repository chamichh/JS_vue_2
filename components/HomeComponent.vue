<script setup>
import SongListComponent from '@/components/SongListComponent.vue';
</script>
<template>
    <div class="box">
        <h1>HOME</h1>
        <SongListComponent/>
    </div>
</template>
<style scoped>
  .box {
    top: 80px;
    left: 400px;
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-left: 30px;
  }
</style>