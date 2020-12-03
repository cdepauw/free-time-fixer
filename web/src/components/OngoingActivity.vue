<template>
  <div class="activity-container">
    <div class="activity-information-container">
      <div>
        <h1 class="activity-title">{{ getActivity(id).name }}</h1>
      </div>
      <div class="activity-information">
        <p>
          <strong>Category: </strong>{{ getActivity(id).category }}
          <b-icon
            class="activity-icon"
            size="is-medium"
            :icon="getActivity(id).icon"
          />
        </p>
      </div>
    </div>

    <div class="activity-button-container">
      <b-button
        @click="completeActivity(id)"
        icon-left="check"
        size="is-medium"
        type="is-success"
        >Complete activity</b-button
      >
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
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #e1e6fc;
  padding: 0 2em;
}

.activity-title {
  font-size: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  font-weight: bold;
  text-align: center;
}

.activity-button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>