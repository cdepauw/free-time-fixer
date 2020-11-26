<template>
  <div class="home-container">
    <div>
      <h1 class="home-title">Let's get rid of your free time.</h1>
      <h2 class="home-subtitle">Choose one:</h2>
    </div>
    <div class="picker-container">
      <div class="picker-card">1</div>
      <div class="picker-card">2</div>
      <div class="picker-card">3</div>
      <div class="picker-card">4</div>
    </div>
    <div>buttons</div>
  </div>
</template>

<script>
export default {
  name: "Home",
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

.home-subtitle {
  font-size: 1em;
  font-weight: bold;

  text-align: left;
}

.picker-container {
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  row-gap: 1em;
  column-gap: 1em;
  padding: 2em 0 1em 0;
  height: 60%;
  width: 100%;
}

.picker-card {
  background-color: lightsteelblue;
  border: 1px solid black;
  border-radius: 5%;
}
</style>