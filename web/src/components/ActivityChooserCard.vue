<template>
  <div class="picker-card">{{ name }}</div>
</template>

<script>
export default {
  name: "ActivityChooserCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.picker-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: lightsteelblue;
  border: 1px solid black;
  border-radius: 5%;
}
</style>