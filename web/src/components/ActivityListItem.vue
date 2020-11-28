<template>
  <div class="list-item-container">
    <b-collapse
      aria-id="header-id"
      class="panel"
      animation="slide"
      v-model="isOpen"
      @open="emitOpenEvent"
    >
      <div
        slot="trigger"
        class="panel-heading"
        role="button"
        aria-controls="header-id"
      >
        <div class="header-container">
          <div class="header-content">
            <b-icon class="header-icon" size="is-small" icon="radioactive" />
            <p class="header-title">
              {{ name }}
            </p>
          </div>
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
  methods: {
    emitOpenEvent() {
      this.$emit("open", this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.header-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.header-icon {
  padding-right: 1em;
}

.header-title {
  font-weight: bold;
}

.panel-block {
  background-color: rosybrown;
}

.panel-heading {
  padding: 0;
  padding-left: 1em;
}
</style>