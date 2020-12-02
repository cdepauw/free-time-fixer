<template>
  <div class="main-container">
    <div class="form-container">
      <div>
        <h1 class="form-title">Your activity</h1>
      </div>
      <b-field label="Name">
        <b-input v-model="activity.name" />
      </b-field>
      <b-field label="Type">
        <b-select placeholder="Select a type" v-model="activity.category">
          <option
            v-for="option in types"
            :value="option.category"
            :key="option.category"
          >
            {{ option.category }}
          </option>
        </b-select>
      </b-field>
    </div>
    <div class="button-container">
      <b-button
        icon-left="close"
        size="is-medium"
        @click="$emit('click-cancel', {})"
        >Cancel</b-button
      >
      <b-button icon-left="check" size="is-medium" type="is-success"
        >Save</b-button
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ActivityForm",
  data() {
    return {
      activity: undefined,
      newActivity: false,
      types: [
        { category: "Sport", icon: "arm-flex" },
        { category: "Fun", icon: "emoticon-excited-outline" },
        { category: "Chore", icon: "broom" },
      ],
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
  beforeMount() {
    if (this.id !== undefined) {
      this.activity = this.getActivity(this.id);
    }
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
}

.form-title {
  font-size: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  font-weight: bold;
  text-align: left;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 0 2em 0 2em;
}

.label {
  text-align: left;
}
</style>