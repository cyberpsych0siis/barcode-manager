<script>
// import '../assets/trash.svg';
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["editMode"]),
  },
  props: {
    item: Object,
    ean: String,
  },
  methods: {
    ...mapMutations(["removeItem"]),
    remove(data) {
      console.log(data);
      this.removeItem(data.target.dataset.ean);
    },
  },
};
</script>

<template>
  <li>
    <!--       <p></p>
    <div class="container">
      <div class="withicon"> -->
    <span class="withicon">
      {{ item.name }} - x{{ item.qty }}
    </span>
    <div v-if="this.editMode" @click="this.remove" :data-ean="ean">
      <img class="trash" src="trash.svg" />
    </div>
  </li>
</template>

<style scoped>
img.trash {
  width: 2vh;
}

li {
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  border-bottom: 1px solid darkgrey;
  background-color: lightgrey;
  font-size: 2vh;
  display: grid;
  grid-template-columns: 8fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". .";
}

.withicon {
  /* display: block; */
  /*   padding-top: 1.5vh;
  padding-bottom: 1.5vh; */
  box-sizing: border-box;
  padding-left: 5px;
  /* padding-left: 2em; */
}
li:active {
  background-color: darkgrey;
}
.withicon:before {
  content: "";
  display: inline-block;
  background-color: black;
  width: 2vh;
  height: 2vh;
  vertical-align: text-top;
  border-radius: 100%;
  /* margin-left: 5px; */
  margin-right: 5px;
}
</style>