<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["count"]),
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
};
</script>

<template>
  <p>Current Count: {{ count }}</p>
  <p><button @click="increment">Increment!</button></p>
</template>