<template>
  <div class="list-container">
    <ActivityListItem
      class="list-item"
      v-for="item in activities"
      :name="item.name"
      :id="item.id"
      :key="item.id"
      :open="openId == item.id"
      @open="openId = item.id"
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
      openId: -1,
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