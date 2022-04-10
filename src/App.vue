<script>
// import CounterComponent from './components/CounterComponent.vue';
import HeaderComponent from "./components/HeaderComponent.vue";
import ItemsComponent from "./components/ItemsComponent.vue";
import ScanComponent from "./components/ScanComponent.vue";
import { mapState } from 'vuex';
// import 'vue-material/dist/vue-material.min.css';
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld,
    HeaderComponent,
    // CounterComponent,
    ItemsComponent,
    ScanComponent,
  },
  data() {
    return {
      ...mapState(["scaleMode"])
    }
  }
};
</script>

<template>
  <div>
    <HeaderComponent />
    <main>
      <ItemsComponent />
    </main>
  </div>
  <ScanComponent />
</template>

<style>
.scaled {
  transform: scale(0.5);
}

body {
  margin: 0px;
  /* overflow: hidden; */
  background-color: black;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>

<style scoped>
main {
  overflow: scroll;
}
</style>