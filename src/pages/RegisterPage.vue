<template>
  <q-page class="flex flex-center">
    <AppRegister></AppRegister>
  </q-page>
</template>

<script>
import AppRegister from './../components/AppRegister';
export default {
  name: 'RegisterPage',
  data: () => ({
    title: process.env.VUE_APP_TITLE
  }),
  components: {
    AppRegister
  }
};
</script>
