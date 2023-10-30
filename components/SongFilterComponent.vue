<template>
    <div class="filter">
        <p>Sort by: </p>
      <button :class="{ active: activeFilter === 'None' }" @click="setFilter('None')">None</button>
      <button :class="{ active: activeFilter === 'Name' }" @click="setFilter('Name')">Name</button>
      <button :class="{ active: activeFilter === 'Artist' }" @click="setFilter('Artist')">Artist</button>
    </div>
</template>
  
<script>
export default {
    data() {
      return {
        activeFilter: 'None',
      };
    },
    methods: {
      setFilter(filter) {
        this.activeFilter = filter;
        this.$emit('filter', filter);
      },
    },
  };
</script>
  
<style scoped>
  .filter {
    display: flex;
    margin: 20px 0;
  }
  
  button {
    background-color: transparent;
    color: #FFFFFFCC;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 50px;
  }
  
  .active {
    font-weight: bold;
    color: #FB0048;
    background-color: #FB004833;
  }
</style>