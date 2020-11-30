<template>
  <div class="list-container">
    <ActivityListItem
      class="list-item"
      v-for="(item, index) of activities"
      :name="item.name"
      :id="item.id"
      :category="item.category"
      :icon="item.icon"
      :key="index"
      :open="isOpen == index"
      @open="isOpen = index"
    />
  </div>
</template>

<script>
import ActivityListItem from "./ActivityListItem";
import { mapState } from "vuex";

export default {
  name: "ActivityList",
  components: {
    ActivityListItem,
  },
  data() {
    return {
      isOpen: -1,
    };
  },
  computed: {
    ...mapState({
      activities: "activities",
    }),
  },
};
</script>

<style lang="scss" scoped>
.list-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
}

.list-item {
  padding: 0.3em;
}
</style>