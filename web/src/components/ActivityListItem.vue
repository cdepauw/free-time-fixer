<template>
  <div class="list-item-container">
    <b-collapse
      aria-id="header-id"
      class="panel"
      animation="slide"
      v-model="isOpen"
    >
      <div
        slot="trigger"
        class="panel-heading"
        role="button"
        aria-controls="header-id"
      >
        <div class="header-container">
          <p>
            <strong>{{ name }}</strong>
          </p>
          <b-button
            size="is-medium"
            icon-left="pencil"
            tag="router-link"
            to="/edit"
            />
          
        </div>
      </div>
      <div class="panel-block">Text</div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: "ActivityListItem",
  data() {
    return {
      isOpen: false,
    };
  },
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