<template>
  <h1>App</h1>
  <input v-model="integer1" />
  <p>integer1: {{ integer1 }}</p>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    console.log("setup");
    let integer1 = ref(101);
    return { integer1 };
  },
  data() {
    return {
      integer2: 102,
      integer3: 103,
      arr1: [101, 102],
      arr2: [201, 202],
      arr3: [301, 302],
      obj1: { a: "a1", b: "b2" },
    };
  },
  methods: {
    method1(n) {
      console.log("method1:", this.integer1 * n);
    },
  },
  mounted() {
    this.method1(2);
  },
};
</script>

<style></style>
