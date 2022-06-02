<template>
  <v-app>

    <v-main class="gray">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
@import './assets/css/style.css';
</style>