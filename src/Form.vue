<template>
  <div>
    <form class="form" method="post" name="newUser">
      <p class="form__title title">Sing up</p>
      <div class="form__section section">
        <label for="login" class="further-text">Login</label>
        <input type="text" name="login" class="input" required />
      </div>
      <div class="form__section section">
        <label for="email" class="further-text">E-mail</label>
        <input type="email" name="email" class="input" required />
      </div>
      <div class="form__section section">
        <label for="password" class="further-text">Password</label>
        <input type="password" class="input" />
      </div>
      <div class="form__raw">
        <div class="form__section section">
          <label for="firstName" class="further-text">First name</label>
          <input type="text" name="firstName" class="input input_short" required />
        </div>
        <div class="form__section section">
          <label for="lastName" class="further-text">Last name</label>
          <input type="text" name="lasttName" class="input input_short" required />
        </div>
      </div>
      <button class="form__button button">SING UP</button>
    </form>
  </div>
</template>
<style>
@font-face {
  font-family: "Roboto";
  src: url("/src/fonts/Roboto-Regular.ttf") format("ttf");
}
.form {
  max-width: 800px;
  margin: 70px auto 87px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.form__title {
}
.form__section {
  padding-bottom: 25px;
}
.form__raw {
  display: flex;
  width: 480px;
  justify-content: space-between;
}
.form__button {
  margin-top: 47px;
}
.title {
  font-family: Roboto;
  font-weight: bold;
  font-size: 30px;
  color: #333333;
}
.further-text {
  font-family: Roboto;
  font-size: 20px;
  color: #888888;
}
.input {
  width: 480px;
  height: 64px;
  border: 1px solid #c1c1c1;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Roboto;
  font-size: 20px;
  padding-left: 23px;
}
.input_short {
  width: 228px;
}
.section {
  display: flex;
  flex-direction: column;
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
</style>
