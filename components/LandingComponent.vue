<template>
    <div class="box">
      <div class="title">
        <h1 class="main-title">WE</h1>
        <h1 class="love">LOVE</h1>
        <h1 class="main-title">MUSIC</h1>
      </div>
      <div class="powered-by">
        <span class="powered">POWERED BY</span>
        <span class="spotify-api">SPOTIFY API</span>
      </div>
    </div>
  </template>
  
  <style scoped>
  .box {
    top: 0px;
    left: 0px;
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-left: 30px;
    background-image: url('@/assets/octo.jpg');
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  .title {
    display: flex;
    top: 300px;
    left: 101px;
    position: fixed;
    align-items: left;
    flex-direction: column;
  }

  .main-title,
  .love {
    color: #FFF;
    font-family: 'Inter', sans-serif;
    font-size: 128px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin: 0;
  }

  .love {
    color: #FB0048;
  }

  .powered-by {
    display: flex;
    top: 840px;
    left: 101px;
    position: fixed;
    flex-direction: row;
    align-items: left;
  }

  .powered {
    color: #544F69;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .spotify-api {
    color: #67FF64;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
</style>