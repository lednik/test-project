<template>
  <div>
    <form class="form app__item" method="post" name="newUser">
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

      <div class="form__raw">
        <div class="form__section section">
          <label class="further-text" for="country">Country</label>
          <select
            v-model="country"
            @change="setCountry(country)"
            name="country"
            class="input_short input text main-text"
          >
            <option value selected disabled>Select</option>
            <option v-for="value in getCountries">{{value}}</option>
          </select>
        </div>
        <div class="form__section section">
          <label for="city" class="further-text">City</label>
          <select
            @change="setCity(city)"
            v-model="city"
            name="city"
            id="city"
            class="input_short input text main-text"
          >
            <option value selected disabled>Select</option>
            <option v-for="value in getCities" :selected="city">{{value}}</option>
          </select>
        </div>
      </div>

      <div class="form__raw">
        <div class="form__section section">
          <label class="further-text" for="birth">Date of birth</label>
          <date-picker
            @input="updateBirthDay()"
            name="birth"
            v-model="date"
            value-type="DD-MM-YYYY"
            lang="en"
          ></date-picker>
        </div>
        <div class="form__section section">
          <label for="zipCode" class="further-text">Zip code</label>
          <input
            type="text"
            name="zipCode"
            class="input input_short"
            @input="updateZipCode($event)"
            required
          />
        </div>
      </div>

      <button class="form__button button">SING UP</button>
    </form>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  data() {
    return {
      date: "",
      country: "",
      city: ""
    };
  },
  components: {
    DatePicker
  },
  computed: {
    getCountries() {
      return this.$store.state.countries;
    },
    getCities() {
      return this.$store.state.cities[this.$store.state.country];
    },
    getCountry() {
      return this.$store.state.country;
    }
  },
  methods: {
    setCountry(country) {
      this.$store.commit("changeCountry", country);
    },
    setCity(city) {
      this.$store.commit("changeCity", city);
    },
    updateBirthDay() {
      this.$store.state.birthDay = this.date;
    },
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
    },
    updateZipCode(event) {
      this.$store.state.zipCode = event.target.value;
    }
  }
};
</script>

<style scoped>
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
