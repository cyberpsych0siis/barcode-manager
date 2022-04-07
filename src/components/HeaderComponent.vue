<script>
import { mapMutations } from 'vuex';
export default {
  setup() {},
  methods: {
    ...mapMutations(["toggleEdit"])
  }
};
</script>

<template>
  <header class="grid">
    <p @click="this.toggleEdit">Edit</p>
    <p class="bold">Hello Header</p>
  </header>
</template>

<style scoped>
header {
  /* display: grid; */
  background-color: red;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  color: white;
  max-height: 5vh;
}

.grid {
  display: grid; 
  grid-template-columns: 1fr 3fr 1fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    ". . ."; 
}

header .bold {
  font-weight: bold;
}

/* header p {
  font-weight: bold;
  color: white;
} */
</style>