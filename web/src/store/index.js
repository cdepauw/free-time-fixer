import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activities: [
      {
        id: "1",
        name: "Stofzuigen",
        category: "Chore",
        icon: "broom",
      },
      {
        id: "2",
        name: "Path of Exile",
        category: "Fun",
        icon: "emoticon-excited-outline",
      },
      {
        id: "3",
        name: "The Witcher 3",
        category: "Fun",
        icon: "emoticon-excited-outline",
      },
      {
        id: "4",
        name: "Badkamer kuisen",
        category: "Chore",
        icon: "broom",
      },
      {
        id: "5",
        name: "Lopen",
        category: "Sport",
        icon: "arm-flex",
      },
      {
        id: "6",
        name: "Wandelen met Hailey",
        category: "Fun",
        icon: "emoticon-excited-outline",
      },
      {
        id: "7",
        name: "Fietsen",
        category: "Sport",
        icon: "arm-flex",
      },
    ],
  },
  getters: {
    // Select 4 at random. Ensure these are 4 unique choices.
    getActivitySuggestions: (state) => () => {
      var res = [];
      for (var i = 0; i < 4; i++) {
        var choice = Math.floor(Math.random() * state.activities.length);
        if (res.length == 0) {
          res.push(state.activities[choice]);
        } else {
          var foundOne = false;
          while (!foundOne) {
            var ok = true;
            for (var item of res) {
              if (item.id == state.activities[choice].id) {
                ok = false;
              }
            }

            if (ok) {
              foundOne = true;
              res.push(state.activities[choice]);
            } else {
              choice = Math.floor(Math.random() * state.activities.length);
            }
          }
        }
      }

      return res;
    },

    getActivity: (state) => (id) => {
      return state.activities.find((activity) => activity.id == id);
    },
    getNumberOfActivities: (state) => {
      return state.activities.length;
    },
  },
  mutations: {
    deleteActivity(state, id) {
      for (var i = 0; i < state.activities.length; i++) {
        if (state.activities[i].id == id) {
          state.activities.splice(i, 1);
          break;
        }
      }
    },
    updateActivity(state, activity) {
      for (var i = 0; i < state.activities.length; i++) {
        if (state.activities[i].id == activity.id) {
          state.activities[i] = activity;
          break;
        }
      }
    },
    addNewActivity(state, activity) {
      if (activity.id == "") {
        activity.id = uuidv4();
      }

      state.activities.push(activity);
    },
  },
  actions: {
    deleteActivity({ commit }, id) {
      commit("deleteActivity", id);
    },
    updateActivity({ commit }, activity) {
      commit("updateActivity", activity);
    },
    addNewActivity({ commit }, activity) {
      commit("addNewActivity", activity);
    },
  },
  modules: {},
});
