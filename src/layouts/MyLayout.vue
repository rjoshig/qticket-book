<template>
  <q-layout view="hHh lpr fFf">
    <AppNavBar @onNavBarMenuIconClick="toggleLeftDrawer"></AppNavBar>
    <q-drawer v-model="leftdrawer" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <AppFooter></AppFooter>
  </q-layout>
</template>

<script>
import AppNavBar from './../components/AppNavBar';
import AppFooter from './../components/AppFooter';

export default {
  data() {
    return {
      leftdrawer: false
    };
  },

  components: {
    AppNavBar,
    AppFooter
  },
  methods: {
    toggleLeftDrawer(event) {
      console.log('MyLayout-Event', event);
      this.leftdrawer = !this.leftdrawer;
    }
  }
};
</script>
