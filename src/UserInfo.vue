<template>
  <div class="app__item user-info">
    <p class="title user-info__title">New User</p>
    <p class="main-text user-info__p text">
      {{getFirstName}} {{getLastName}} /
      <span class="further-text text">{{getLogin}}</span>
    </p>
    <p class="text main-text user-info__p">{{getEmail}}</p>
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
    },
    getFirstName() {
      return this.$store.state.firstName;
    },
    getLastName() {
      return this.$store.state.lastName;
    },
    getEmail() {
      return this.$store.state.email;
    }
  }
};
</script>
<style scoped>
.user-info {
  max-width: 600px;
  padding: 40px 10px 40px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #ffffff;
  border-radius: 10px;
}
.user-info__title {
  padding: 0px;
  margin: 20px 0;
}
.user-info__p {
  margin: 12px 0;
  padding: 0px;
}
</style>