<template>
  <div class="home-container">
    <div>
      <h1 class="home-title">Create one more activities to get started!</h1>
    </div>
    <div class="activity-creation-form">Form input stuff</div>
  </div>
</template>

<script>
export default {
  name: "ActivitySetup",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  align-items: left;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #e1e6fc;
  padding-left: 3em;
  padding-right: 3em;
}

.home-title {
  font-size: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  font-weight: bold;
  text-align: left;
}

.activity-creation-form {
  background-color: white;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 2%;
}
</style>
