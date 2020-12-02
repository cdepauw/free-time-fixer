<template>
  <div class="main-container">
    <div class="main-list-container" v-if="!createOrEdit">
      <div>
        <h1 class="list-title">Manage your activities</h1>
      </div>
      <div class="list-container">
        <ActivityListItem
          class="list-item"
          v-for="(item, index) of activities"
          :name="item.name"
          :id="item.id"
          :category="item.category"
          :icon="item.icon"
          :key="index"
          :open="isOpen == index"
          @open="isOpen = index"
          @click-edit="handleEdit"
        />
      </div>
      <div class="create-new-button-container">
        <b-button
          @click="handleCreate"
          icon-left="plus"
          size="is-medium"
          type="is-success"
          rounded
        />
      </div>
    </div>

    <ActivityForm
      v-else
      :id="editId"
      @click-cancel="handleCancelCreateOrEdit"
    />
  </div>
</template>

<script>
import ActivityListItem from "./ActivityListItem";
import ActivityForm from "./ActivityForm";
import { mapState } from "vuex";

export default {
  name: "ActivityList",
  components: {
    ActivityListItem,
    ActivityForm,
  },
  data() {
    return {
      isOpen: -1,
      createOrEdit: false,
      editId: -1,
    };
  },
  computed: {
    ...mapState({
      activities: "activities",
    }),
  },
  methods: {
    handleEdit: function (payload) {
      this.createOrEdit = true;
      this.editId = payload.id;
    },
    handleCreate: function () {
      this.createOrEdit = true;
      this.editId = undefined;
    },
    handleCancelCreateOrEdit: function () {
      this.createOrEdit = false;
      this.editId = undefined;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  height: 100%;
}

.main-list-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
}

.list-title {
  font-size: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  font-weight: bold;
  text-align: left;
}

.list-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
}

.list-item {
  padding: 0.3em;
}

.create-new-button-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 1em;
  padding-right: 1em;
}
</style>