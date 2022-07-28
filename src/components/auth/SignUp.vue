<template>
  <div>
    <b-form @submit.prevent="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Your Username:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Your Password:"
        label-for="input-2"
      >
        <b-form-input
          type="password"
          v-model="form.password"
          id="input-2"
          aria-describedby="password-help-block"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Sign Up</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      form: {
        username: "",
        password: null,
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("signup", this.form);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.username = "";
      this.form.password = null;
    },
  },
};
</script>
