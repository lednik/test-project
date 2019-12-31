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
  background-color: white !important;
}
.input:focus {
  border: 1px solid #0056d8 !important;
}
.input:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  margin-bottom: 8px;
}
.button_active {
  background: #0056d8;
}
.button_active:hover {
  background: #003585;
}
.button:hover {
  width: 324px;
  height: 64px;
  margin-bottom: 0px;
}
.section {
  display: flex;
  flex-direction: column;
}
.mx-input {
  height: 64px;
  width: 228px;
}
.mx-input:focus {
  border: 1px solid #0056d8 !important;
}
.mx-input:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
