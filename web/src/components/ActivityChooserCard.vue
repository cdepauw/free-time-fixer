<template>
  <div class="picker-card-container">
    <div>
      <b-icon class="card-icon" size="is-medium" :icon="icon" />
    </div>
    <div>
      <p class="card-title">{{ name }}</p>
    </div>
  </div>
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
    category: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.picker-card-container {
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;
  background-color: white;
  // border: 1px solid black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 1em 0em 1em 0em;
}

.card-title {
  font-weight: bold;
}
</style>