<template>
  <div class="home-container">
    <div>
      <h1 class="home-title">Let's find something to do.</h1>
      <h2 class="home-subtitle">Choose one:</h2>
    </div>
    <div class="picker-container">
      <ActivityChooserCard
        v-for="item in activities"
        :name="item.name"
        :category="item.category"
        :icon="item.icon"
        :id="item.id"
        :key="item.id"
        @click.native="startActivity(item.id)"
      />
    </div>
    <div class="refresh-button-container">
      <b-button
        @click="refreshActivitySuggestions"
        icon-left="rotate-left"
        size="is-medium"
        type="is-warning is-light"
        >Refresh</b-button
      >
    </div>
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
  data() {
    return {
      activities: [],
    };
  },
  methods: {
    startActivity: function (id) {
      this.$emit("activityChosen", { id: id });
    },
    refreshActivitySuggestions: function () {
      this.activities = this.getActivitySuggestions();
    },
  },
  created: function () {
    this.activities = this.getActivitySuggestions();
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
  padding-left: 2em;
  padding-right: 2em;
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

.refresh-button-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 1em;
}
</style>