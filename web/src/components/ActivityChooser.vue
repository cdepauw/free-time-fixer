<template>
  <div class="home-container">
    <div>
      <h1 class="home-title">Let's find something to do.</h1>
      <h2 class="home-subtitle">Choose one:</h2>
    </div>
    <div class="picker-container">
      <ActivityChooserCard
        v-for="item in getActivitySuggestions"
        :name="item.name"
        :id="item.id"
        :key="item.id"
      />
    </div>
    <div>buttons</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ActivityChooserCard from "./ActivityChooserCard";

export default {
  name: "ActivityChooser",
  components: {
    ActivityChooserCard,
  },
  computed: {
    ...mapGetters({
      getActivitySuggestions: "getActivitySuggestions",
    }),
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  align-items: left;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #e1e6fc;
  padding-left: 3em;
  padding-right: 3em;
}

.home-title {
  font-size: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  font-weight: bold;
  text-align: left;
}

.home-subtitle {
  font-size: 1em;
  font-weight: bold;

  text-align: left;
}

.picker-container {
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  row-gap: 1em;
  column-gap: 1em;
  padding: 2em 0 1em 0;
  height: 60%;
  width: 100%;
}
</style>