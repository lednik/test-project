<template>
  <div>
    <form class="form app__item" method="post" name="newUser">
      <!-- <p>{{getLogin}}</p> -->
      <p class="form__title title">Sing up</p>
      <div class="form__section section">
        <label for="lol" class="further-text">Login</label>
        <input type="text" name="lol" class="input" @input="updateLogin($event)" required />
      </div>
      <div class="form__section section">
        <label for="email" class="further-text">E-mail</label>
        <input type="email" name="email" class="input" @input="updateEmail($event)" required />
      </div>
      <div class="form__section section">
        <label for="password" class="further-text">Password</label>
        <input type="password" class="input" @input="updatePassword($event)" />
      </div>
      <div class="form__raw">
        <div class="form__section section">
          <label for="firstName" class="further-text">First name</label>
          <input
            type="text"
            name="firstName"
            class="input input_short"
            @input="updateFirstName($event)"
            required
          />
        </div>
        <div class="form__section section">
          <label for="lastName" class="further-text">Last name</label>
          <input
            type="text"
            name="lasttName"
            class="input input_short"
            @input="updateLastName($event)"
            required
          />
        </div>
      </div>
      <button class="form__button button">SING UP</button>
    </form>
  </div>
</template>

<script>
export default {
  /* data() {
    return {
    };
  }, */
  computed: {
    getLogin() {
      return this.$store.state.login;
    }
  },
  methods: {
    updateLogin(event) {
      this.$store.state.login = event.target.value;
    },
    updateEmail(event) {
      this.$store.state.email = event.target.value;
    },
    updatePassword(event) {
      this.$store.state.password = event.target.value;
    },
    updateFirstName(event) {
      this.$store.state.firstName = event.target.value;
    },
    updateLastName(event) {
      this.$store.state.lastName = event.target.value;
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: "Roboto";
  src: url("/src/fonts/Roboto-Regular.ttf") format("ttf");
}

.form {
  max-width: 600px;
  padding: 50px 10px 87px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
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

.input_short {
  width: 228px;
}
</style>
