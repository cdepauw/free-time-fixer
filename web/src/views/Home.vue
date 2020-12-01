<template>
  <div class="main-container" v-touch:swipe="handleSwipe">
    <b-tabs v-model="tabIndex" type="is-boxed" expanded destroy-on-hide>
      <b-tab-item icon="flash" id="tabs">
        <ActivityChooser v-if="State == 1" />
        <ActivitySetup v-else-if="State == 0" />
        <OngoingActivity v-else-if="State == 2" :id="'1'" />
      </b-tab-item>

      <b-tab-item icon="format-list-bulleted">
        <ActivityList />
      </b-tab-item>

      <b-tab-item icon="account">
        <Profile />
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import ActivityChooser from "../components/ActivityChooser";
import ActivitySetup from "../components/ActivitySetup";
import OngoingActivity from "../components/OngoingActivity";
import Profile from "../components/Profile";
import ActivityList from "../components/ActivityList";

export default {
  name: "Home",
  components: {
    ActivityChooser,
    ActivitySetup,
    OngoingActivity,
    Profile,
    ActivityList,
  },
  data() {
    return {
      State: 1, // 0 = set-up, 1 = pick activity, 2 = ongoing activity
      tabIndex: 0,
    };
  },
  methods: {
    handleSwipe(direction) {
      if (direction === "left" && this.tabIndex < 2) {
        this.tabIndex += 1;
      } else if (direction === "right" && this.tabIndex > 0) {
        this.tabIndex -= 1;
      }
    },
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
  height: 90%;
  box-sizing: border-box;
}

.b-tabs .tab-content {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.b-tabs .tab-content .tab-item {
  height: 100%;
  box-sizing: border-box;
}
</style>