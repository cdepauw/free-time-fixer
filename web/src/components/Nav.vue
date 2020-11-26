<template>
  <div class="nav-container">
    <router-link class="nav-item" to="/home">Home</router-link>
    <router-link class="nav-item" to="/">Log out</router-link>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.nav-container {
  background-color: white;
  overflow: hidden;
//   position: fixed;
//   bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.nav-item {
  padding: 1em;
  border: 2px solid black;
  flex-grow: 1;
}
</style>