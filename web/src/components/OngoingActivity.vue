<template>
  <div class="activity-container">
    <div>
      <b-icon
        class="activity-icon"
        size="is-medium"
        :icon="getActivity(id).icon"
      />
    </div>
    <div>
      <p class="activity-title">{{ getActivity(id).name }}</p>
    </div>
    <div>
      <b-button @click="completeActivity(id)">Complete activity</b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "OngoingActivity",
  data() {
    return {
      activeActivityId: 1,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      getActivity: "getActivity",
    }),
  },
  methods: {
    completeActivity: function (id) {
      this.$emit("activityCompleted", { id: id });
    },
  },
};
</script>

<style lang="scss" scoped>
.activity-container {
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

.activity-title {
  font-size: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  font-weight: bold;
  text-align: left;
}
</style>