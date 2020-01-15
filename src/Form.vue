<template>
  <div>
    <form class="form app__item" method="post" name="newUser">
      <p class="form__title title">Sing up</p>

      <div class="form__section section">
        <label for="lol" class="further-text">
          Login
          <span class="form__required">*</span>
        </label>
        <input type="text" name="lol" class="input" @input="updateLogin($event)" required />
      </div>

      <div class="form__section section">
        <label for="email" class="further-text">
          E-mail
          <span class="form__required">*</span>
        </label>
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
          />
        </div>
        <div class="form__section section">
          <label for="lastName" class="further-text">Last name</label>
          <input
            type="text"
            name="lasttName"
            class="input input_short"
            @input="updateLastName($event)"
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
            class="input_short input text main-text form__select"
            :class="{'form__select_activeSelect':isActiveCountrySelect}"
          >
            <option value selected disabled hidden class="disabled-option">Select</option>
            <option v-for="value in getCountries">{{ value }}</option>
          </select>
        </div>
        <div class="form__section section">
          <label for="city" class="further-text">City</label>
          <select
            @change="setCity(city)"
            v-model="city"
            name="city"
            id="city"
            class="input_short input text main-text form__select"
            :class="{'form__select_activeSelect':isActiveCitySelect}"
          >
            <option value selected hidden disabled>Select</option>
            <option v-for="value in getCities" :selected="city">
              {{
              value
              }}
            </option>
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
          />
        </div>
      </div>

      <button
        @click="checkRequired()"
        class="form__button button"
        :class="{'button_active':isRequiredDone}"
      >SING UP</button>
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
      city: "",
      isAvtiveBtn: false,
      isActiveCountrySelect: false,
      isActiveCitySelect: false,
      isRequiredDone: false
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
      this.isActiveCountrySelect = true;
    },
    setCity(city) {
      this.$store.commit("changeCity", city);
      this.isActiveCitySelect = true;
    },
    updateBirthDay() {
      this.$store.state.birthDay = this.date;
    },
    updateLogin(event) {
      this.$store.state.login = event.target.value;
      this.checkREquiredDone();
    },
    updateEmail(event) {
      this.$store.state.email = event.target.value;
      this.checkREquiredDone();
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
    },
    checkREquiredDone() {
      if (this.$store.state.login !== "" && this.$store.state.email !== "") {
        this.isRequiredDone = true;
      }
    },
    checkRequired() {
      if (this.isRequiredDone) {
        alert("Регистрация завершена");
      } else {
        alert("Заполните все обязательные поля");
      }
    }
  }
};
</script>

<style>
.form {
  max-width: 600px;
  padding: 50px 10px 87px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
}
.form__select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  color: #c1c1c1;
  background: url("/src/assets/img/arrow.svg") 100% 50% no-repeat;
}
.form__select option {
  color: #333333;
}

.form__select_activeSelect {
  color: #333333 !important;
  background: url("/src/assets/img/active-arrow.svg") 100% 50% no-repeat;
}
.form__required {
  color: #e90000;
}
.form__section {
  padding-bottom: 25px;
}
.form__raw {
  display: flex;
  width: 480px;
  justify-content: space-between;
  flex-wrap: wrap;
}
.form__button {
  margin-top: 47px;
}

.input_short {
  width: 228px;
}
.disabled-option {
  color: #c1c1c1;
}
@media screen and (max-width: 585px) {
  .form__raw {
    width: 230px;
    justify-content: space-around;
  }
}
</style>
