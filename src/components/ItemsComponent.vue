<script setup>
import ItemListComponent from "./ItemListComponent.vue";
</script>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      newItemText: "unused",
    };
  },
  computed: {
    ...mapState(["items"]),
  },
};
</script>

<template>
  <content>
    <ul>
      <ItemListComponent
        v-for="[key, value] in items"
        :key="key"
        :item="value"
        :ean="value.barcode"
      />
    </ul>
  </content>
</template>

<style scoped>
content {
  display: block;
  background-color: white;
  height: 95vh;
}
ul {
  list-style-type: none;
  padding-inline-start: 0px;
  margin-block-start: 0;
  margin-block-end: 0;
}
</style>