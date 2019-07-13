<template>
  <q-footer elevated class="bg-primary text-white">
    <q-tabs dense no-caps active-color="amber" class="text-white" v-model="tab">
      <q-tab name="schedules" icon="schedule" label="Schedules" />
      <q-tab name="dashboard" icon="dashboard" label="Dashboard" />
      <q-tab name="bookings" icon="commute" label="Bookings" />
      <q-tab name="movies" icon="movie" label="Movies" />
    </q-tabs>
    <!-- <q-toolbar>
        <q-toolbar-title>&copy; Ramesh Joshi 2019</q-toolbar-title>
		</q-toolbar>-->
  </q-footer>
</template>

<script>
export default {
  data() {
    return {
      tab: 'mails'
    };
  }
};
</script>
