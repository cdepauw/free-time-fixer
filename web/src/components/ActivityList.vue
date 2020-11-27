<template>
  <div class="list-container">
    <ActivityListItem 
        v-for="item in activities"
        :name="item"
        :key="item"
    />
  </div>
</template>

<script>
import ActivityListItem from "./ActivityListItem";

export default {
  name: "ActivityList",
  components: {
    ActivityListItem,
  },
  data() {
    return {
        activities: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
    };
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

ActivityListItem {
  padding: 0.1em;
}
</style>