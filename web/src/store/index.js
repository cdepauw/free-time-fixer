import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activities: [
      {
        id: "1",
        name: "Stofzuigen",
      },
      {
        id: "2",
        name: "Path of Exile",
      },
      {
        id: "3",
        name: "The Witcher 3",
      },
      {
        id: "4",
        name: "Badkamer kuisen",
      },
      {
        id: "5",
        name: "Lopen",
      },
      {
        id: "6",
        name: "Wandelen met Hailey",
      },
      {
        id: "7",
        name: "Fietsen",
      },
    ],
  },
  getters: {
    // Select 4 at random. Ensure these are 4 unique choices.
    getActivitySuggestions: (state) => {
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
  },
  mutations: {},
  actions: {},
  modules: {},
});
