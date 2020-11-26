<template>
  <div class="main-container">
    <b-tabs type="is-boxed" expanded>
      <b-tab-item icon="flash" id="tabs">
        <ActivityChooser v-if="State == 1" />
        <ActivitySetup v-else-if="State == 0" />
        <OngoingActivity v-else-if="State == 2" />
      </b-tab-item>
      <b-tab-item icon="format-list-bulleted"></b-tab-item>
      <b-tab-item icon="logout-variant"></b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import ActivityChooser from "../components/ActivityChooser";
import ActivitySetup from "../components/ActivitySetup";
import OngoingActivity from "../components/OngoingActivity";

export default {
  name: "Home",
  components: {
    ActivityChooser,
    ActivitySetup,
    OngoingActivity,
  },
  data() {
    return {
      State: 1, // 0 = set-up, 1 = pick activity, 2 = ongoing activity
    };
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

.b-tabs.is-fullwidth {
  height: 100%;
}

.b-tabs .tab-content {
  height: 100%;
}

.b-tabs .tab-content .tab-item {
  height: 100%;
}


</style>