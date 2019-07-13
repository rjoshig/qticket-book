<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-btn
        dense
        flat
        round
        color="amber"
        icon="menu"
        @click="onClickNavBarMenuIcon"
        aria-label="Menu"
      >
        <!-- <q-icon name="menu" /> -->
      </q-btn>
      <q-toolbar-title>Ticketing App</q-toolbar-title>

      <!-- <div class="row">
        <router-link class="text-warning q-pa-sm" to="/Login"
          >Login</router-link
        >
        <router-link class="text-warning q-pa-sm" to="/register"
          >Register</router-link
        >
			</div>-->

      <q-btn
        rounded
        dense
        flat
        color="amber"
        label="Login"
        v-if="!isUserLoggedIn"
        @click="handleRegisterAndLogin('Login')"
      />

      <q-btn stretch flat label="Logout" v-else />
      <q-separator vertical />
      <q-btn
        dense
        stretch
        color="amber"
        flat
        label="Register"
        @click="handleRegisterAndLogin('Register')"
        v-if="!isUserLoggedIn"
      />
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  //   props: ['isLeftDrawerClicked'],

  data() {
    return {
      isLeftDrawerClicked: true
    };
  },
  methods: {
    onClickNavBarMenuIcon(event) {
      console.log('event', event);
      this.$emit('onNavBarMenuIconClick', event); //clickedShowDetailModal
    },

    handleRegisterAndLogin(itemKey) {
      if (itemKey == 'Login') {
        this.$router.push('/login');

        // console.log(this.isUserLoggedIn, this.isLoginButtonClicked);
      } else if (itemKey == 'Register') {
        this.$router.push('/register');
      }
    }
  },

  computed: {
    isUserLoggedIn() {
      return this.$store.getters.user;
    }
  }
};
</script>
