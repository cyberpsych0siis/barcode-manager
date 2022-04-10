<script>
import { mapMutations } from 'vuex';
export default {
  setup() {},
  methods: {
    ...mapMutations(["toggleEdit", "addItem"]),
    debugAddItem() {
      this.addItem("DEBUG ITEM");
    }
  }
};
</script>

<template>
  <header class="grid">
    <p @click="this.toggleEdit">Edit</p>
    <p class="bold">Hello Header</p>
    <p @click="this.debugAddItem">+</p>
  </header>
</template>

<style scoped>
header {
  /* display: grid; */
  background-color: red;
  text-align: center;
  padding-top: 1vh;
  padding-bottom: 1vh;
  color: white;
  font-size: 2vh;
  /* max-height: 5vh; */
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