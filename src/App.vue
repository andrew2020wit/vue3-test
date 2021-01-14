<template>
  <h1>App</h1>
  <input v-model="integer1" />
  <p>integer1: {{ integer1 }}</p>
  <p>computed1: {{ computed1 }}</p>
</template>

<script>
import standalone1 from "./standalone1";
export default {
  name: "App",
  setup() {
    console.log("setup");

    const { integer1, method1, computed1 } = standalone1();

    return { integer1, method1, computed1 };
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
};
</script>

<style></style>
