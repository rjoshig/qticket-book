<template>
  <!-- <q-page class="flex flex-center"> -->
  <div class="q-pa-md" style="max-width: 400px">
    <q-form ref="form" v-model="valid" class="q-gutter-sm" style="width:18rem">
      <q-input
        filled
        v-model="fname"
        label="First Name *"
        hint="First Name"
        dense
      />
      <q-input
        filled
        v-model="lname"
        label="Last Name *"
        hint="Last Name"
        dense
      />
      <q-input
        filled
        v-model="email"
        label="Email *"
        hint="Email Address"
        dense
        lazy-rules
        :rules="emailRules"
      />
      <q-input
        class="login-input"
        v-model="password"
        filled
        label="Password *"
        type="password"
        hint="Password"
        :rules="passwordRules"
        dense
      />

      <div>
        <q-btn
          label="Submit"
          type="submit"
          color="primary"
          @click="onClickSubmitButton"
        />
        <q-btn
          label="Cancel"
          type="reset"
          color="primary"
          class="q-ml-sm"
          @click="onClickCancelButton"
        />
      </div>
    </q-form>
  </div>
  <!-- </q-page> -->
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    passwordShow: false,
    valid: true,
    fname: '',
    lname: '',
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    passwordRules: [v => !!v || 'Password is Required']
  }),
  computed: {
    ...mapState(['userLoginDialog', 'userLoginSubmitButtonLoading', 'error'])
  },

  methods: {
    onClickSubmitButton() {
      if (this.$refs.form.validate()) {
        // this.loading = true;
        // this.snackbar = true;
        const user = {
          fname: this.fname,
          lname: this.lname,
          email: this.email,
          password: this.password
        };
        this.$store.dispatch('signUpAction', user);
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    onClickCancelButton() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.login-input {
  font-size: 1rem;
  line-height: 0.5rem;
}
</style>
