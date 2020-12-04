<template>
  <div class="login-container">
    <h1 class="login-title">Free time fixer</h1>
    <div class="login">
      <b-field label="Username">
        <b-input icon="account"></b-input>
      </b-field>

      <b-field label="Password">
        <b-input icon="key-variant" type="password" password-reveal> </b-input>
      </b-field>
      <div class="check-keep-logged-in">
        <b-checkbox>Keep me logged in</b-checkbox>
      </div>
      <b-button tag="router-link" to="/" type="is-link">
        Log in
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fcf1e1;
}

.login {
  width: 300px;
}

.login-title {
  font-size: 4em;
  padding: 1em;
  font-weight: bold;
}

@media all and (max-device-width: 480px) {
  .login-title {
    font-size: 2em;
    padding: 2em;
    font-weight: bold;
  }
}
</style>
