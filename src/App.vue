<template>
  <v-app>
    <v-toolbar app color="primary" dark>
      <v-toolbar-title class="headline text-uppercase">
        Tab SPA
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
