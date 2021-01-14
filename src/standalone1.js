import { computed, onMounted, ref, toRefs, watch } from "vue";
export default function standalone1() {
  let integer1 = ref(101);

  const obj = { a: "a1", b: "b1" };

  const objRef = toRefs(obj);

  const method1 = () => {
    console.log("method1:", integer1.value * 2);
    console.log("objRef.a.value: ", objRef.a.value);
  };

  const wathInteger1 = () => {
    console.log("wathInteger1: ", integer1.value);
  };

  const computed1 = computed(() => {
    const r = "computed: " + integer1.value;
    console.log(r);
    return r;
  });

  watch(integer1, wathInteger1);

  onMounted(method1);

  return { integer1, method1, computed1 };
}
