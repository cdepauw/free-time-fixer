<template>
  <div class="main-container">
    <div class="main-content">
      <ActivityChooser v-if="State == 1" />
      <ActivitySetup v-else-if="State == 0" />
      <OngoingActivity v-else-if="State == 2" />
    </div>
    <Nav />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import ActivityChooser from "../components/ActivityChooser";
import ActivitySetup from "../components/ActivitySetup";
import OngoingActivity from "../components/OngoingActivity";

export default {
  name: "Home",
  components: {
    Nav,
    ActivityChooser,
    ActivitySetup,
    OngoingActivity,
  },
  data() {
    return {
      State: 2, // 0 = set-up, 1 = pick activity, 2 = ongoing activity
    };
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  align-items: left;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #e1e6fc;
}

.main-content {
  flex-grow: 1;
}
</style>