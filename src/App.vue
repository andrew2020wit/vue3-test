<template>
  <h1>App</h1>
  <input v-model="integer1" />
  <p>integer1: {{ integer1 }}</p>
</template>

<script>
import { ref, onMounted, watch } from "vue";
export default {
  name: "App",
  setup() {
    console.log("setup");
    let integer1 = ref(101);

    const method1 = () => {
      console.log("method1:", integer1.value * 2);
    };

    const wathInteger1 = () => {
      console.log("wathInteger1: ", integer1.value);
    };

    watch(integer1, wathInteger1);

    onMounted(method1);

    return { integer1, method1 };
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
