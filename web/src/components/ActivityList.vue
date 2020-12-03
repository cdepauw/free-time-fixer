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
          @click-delete="handleDelete"
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
      @click-save="handleSaveActivity"
    />
  </div>
</template>

<script>
import ActivityListItem from "./ActivityListItem";
import ActivityForm from "./ActivityForm";
import { mapState, mapGetters, mapActions } from "vuex";

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
      editId: "",
    };
  },
  computed: {
    ...mapState({
      activities: "activities",
    }),
    ...mapGetters({
      getActivity: "getActivity",
    }),
  },
  methods: {
    ...mapActions(["deleteActivity", "updateActivity", "addNewActivity"]),
    handleEdit: function (payload) {
      this.createOrEdit = true;
      this.editId = payload.id;
    },
    handleDelete: function (payload) {
      var activity = this.getActivity(payload.id);
      this.$buefy.dialog.confirm({
        title: "Deleting activity",
        message:
          "Are you sure you want to delete activity <b>" +
          activity.name +
          "</b>? This action cannot be undone.",
        confirmText: "Delete",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => this.deleteActivity(payload.id),
      });
    },
    handleCreate: function () {
      this.createOrEdit = true;
      this.editId = "";
    },
    handleCancelCreateOrEdit: function () {
      this.createOrEdit = false;
      this.editId = "";
    },
    handleSaveActivity: function (payload) {
      if (payload.activity.id == "") {
        this.addNewActivity(payload.activity);
      } else {
        this.updateActivity(payload.activity);
      }

      this.createOrEdit = false;
      this.editId = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-list-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
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