<template>
  <!-- <q-page class="flex flex-center"> -->
  <div class="q-pa-md" style="max-width: 400px">
    <q-card class="q-mt-md q-mr-sm">
      <q-card-section>
        <div>Login</div>
      </q-card-section>
      <q-card-section>
        <q-form class="q-gutter-sm" style="width:18rem">
          <q-input
            filled
            v-model="email"
            label="Email *"
            hint="Email Address"
            lazy-rules
            :rules="emailRules"
            required
            dense
          />
          <q-input
            class="login-input"
            v-model="password"
            filled
            type="password"
            hint="Password"
            :rules="passwordRules"
            required
            dense
          />

          <div>
            <q-btn
              :ripple="{ color: 'amber' }"
              label="Login"
              type="submit"
              color="primary"
              @click="submitLoginForm"
              style="width:18rem"
            />
            <!-- <q-btn
          flat
          label="Cancel"
          type="reset"
          color="primary"
          class="q-ml-sm"
						/>-->
          </div>
        </q-form>
      </q-card-section>
    </q-card>

    <div class="row justify-between">
      <router-link to="/register">Register</router-link>
      <router-link to="/register">Forgot Password?</router-link>
    </div>
  </div>
  <!-- </q-page> -->
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    passwordShow: false,
    valid: true,
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
    submitLoginForm() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        const user = {
          email: this.email,
          password: this.password
        };
        this.$store.dispatch('signInAction', user);
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    closeUserLoginDialog() {
      this.$store.dispatch('userLoginDialogAction', false);
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
