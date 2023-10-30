<script setup>
import SongFilterComponent from '@/components/SongFilterComponent.vue';
import songsData from '@/songsData.js';
</script>
<template>
  <div class="song-list">
    <SongFilterComponent @filter="updateFilter"/>
    <div class="box">
      <table class="table">
        <thead class="table-head">
          <tr>
            <th class="name">Name</th>
            <th class="artist">Artist</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(song, index) in sortedSongs" :key="index">
            <td>{{ song.song }}</td>
            <td>{{ song.artist }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    SongFilterComponent,
  },
  data() {
    return {
      filter: 'None',
      songsData: songsData,
    };
  },
  computed: {
    sortedSongs() {
      return this.sortSongs(this.filter);
    },
  },
  methods: {
    updateFilter(newFilter) {
      this.filter = newFilter;
    },
    sortSongs(filter) {
      if (filter === 'None') {
        return [...this.songsData];
      } else if (filter === 'Name') {
        return [...this.songsData].sort((a, b) => a.song.localeCompare(b.song));
      } else if (filter === 'Artist') {
        return [...this.songsData].sort((a, b) => a.artist.localeCompare(b.artist));
      }
    },
  },
};
</script>

  <style scoped>
  .box {
    background-color: transparent;
  }
  .table-head {
    height: 40px;
    color: white;
    position: relative;
  }
  .table {
    width: 100%;
  }
  .name {
    width: 50%;;
    text-align: left;
  }

  .artist {
    width: 50%;
    text-align: left;
  }

  .table-head::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #464157;
  }
  </style>