<template>
  <div class="list-item-container">
    
  </div>
</template>

<script>
export default {
  name: "ActivityForm",
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
.header-container {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>