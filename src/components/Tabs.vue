<template>
  <v-tabs
    next-icon="mdi-arrow-right-bold-box-outline"
    prev-icon="mdi-arrow-left-bold-box-outline"
    show-arrows
  >
    <v-tab v-for="item in items" :key="item.key">
      {{item.title}} - {{getTotal(item)}}
    </v-tab>
    <v-tabs-items>
      <v-tab-item v-for="item in items" :key="item.key">
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>insert_drive_file</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
              <v-list-tile-sub-title v-text="`Service type: ${item.service}`"></v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-content>
              <v-list-tile-sub-title v-text="`Quantity: ${item.quantity}`"></v-list-tile-sub-title>
              <v-list-tile-sub-title v-text="`Unit cost: ${item.unit_cost}`"></v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-content>
              <v-list-tile-sub-title v-text="`Total cost: ${getTotal(item)}`"></v-list-tile-sub-title>
            </v-list-tile-content>
            <v-spacer></v-spacer>
            <v-list-tile-action>
              <v-icon @click="$emit('edit', item.key)">edit</v-icon>
            </v-list-tile-action>
            <v-list-tile-action>
              <v-icon @click="$emit('copy', item.key)">file_copy</v-icon>
            </v-list-tile-action>
            <v-list-tile-action>
              <v-icon @click="$emit('remove', item.key)">delete</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
export default {
  name: 'commmon-tabs',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    getTotal (item) {
      return (item.quantity * 1) * (item.unit_cost * 1)
    }
  }
}
</script>

<style>

</style>
