<template>
  <div class="main-container">
    <ActivitySetup v-if="getNumberOfActivities < 4" />
    <ActivityChooser
      v-else-if="!activityOngoing"
      @activityChosen="handleActivityChosen"
    />
    <OngoingActivity
      v-else
      :id="ongoingActivityId"
      @activityCompleted="handleActivityCompleted"
    />
  </div>
</template>

<script>
import ActivityChooser from "../components/ActivityChooser";
import ActivitySetup from "../components/ActivitySetup";
import OngoingActivity from "../components/OngoingActivity";
import { mapGetters } from "vuex";

export default {
  name: "ActivityPanel",
  components: {
    ActivityChooser,
    ActivitySetup,
    OngoingActivity,
  },
  data() {
    return {
      ongoingActivityId: 1,
      activityOngoing: false,
    };
  },
  methods: {
    handleActivityChosen: function (payload) {
      this.ongoingActivityId = payload.id;
      this.activityOngoing = true;
    },
    handleActivityCompleted: function () {
      this.ongoingActivityId = -1;
      this.activityOngoing = false;
    },
  },
  computed: {
    ...mapGetters({
      getNumberOfActivities: "getNumberOfActivities",
    }),
  },
};
</script>

<style lang="scss">
.main-container {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #e1e6fc;
}
</style>