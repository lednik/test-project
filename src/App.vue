<template>
  <div>
    <app-info></app-info>
    <app-form></app-form>
  </div>
</template>

<script>
import Form from "./Form.vue";
import UserInfo from "./UserInfo.vue";

export default {
  name: "app",
  components: {
    appForm: Form,
    appInfo: UserInfo
  },
  data() {
    return {
      date: ""
    };
  }
};
</script>

<style>
@font-face {
  font-family: "Roboto";
  src: url("/src/fonts/Roboto-Regular.ttf") format("font-truetype"),
    url("/src/fonts/roboto-regular.woff2") format("woff2"),
    url("/src/fonts/roboto-regular.woff") format("woff");
}
.app__item {
  margin: 43px auto 43px auto;
}
body {
  background-color: #f0f0f0;
}
.title {
  font-family: "Roboto";
  font-weight: bold;
  font-size: 30px;
  color: #333333;
}
.text {
  font-size: 20px;
  font-family: Roboto;
}
.further-text {
  color: #888888;
}
.main-text {
  color: #333333;
}
.input {
  width: 480px;
  height: 64px;
  border: 1px solid #c1c1c1;
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 23px;
  color: #333333;
  background-color: white;
}
.button {
  width: 292px;
  height: 56px;
  font-family: Roboto;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  border-radius: 0px 20px;
  background: #c4c4c4;
  border: 0;
}
.section {
  display: flex;
  flex-direction: column;
}
.mx-input {
  height: 64px;
  width: 228px;
}
</style>
