<template>
  <v-container>
    <v-card>
      <v-toolbar>
        <v-spacer></v-spacer>
        <v-btn fab dark small @click="showForm = true">
          <v-icon>add</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <custom-tabs
          v-if="items.length"
          :items="items"
          @edit="edit"
          @remove="removeItem"
          @copy="copyItem"
        />
        <p v-else class="text-xs-center mb-0 pb-0">No data</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" :disabled="!items.length" @click="saveHandler">Save</v-btn>
      </v-card-actions>
    </v-card>
    <v-navigation-drawer
      v-model="showForm"
      fixed
      temporary
      right
      width="500"
    >
      <item-form
        :itemKey="itemKey"
        @close="showForm = false; itemKey = ''"
        @add="addItem"
        @edit="editItem"
      />
    </v-navigation-drawer>
    <p>{{result}}</p>
  </v-container>
</template>

<script>
import Tabs from '@/components/Tabs'
import ItemForm from '@/components/ItemForm'
import { mapMutations } from 'vuex'
import { ADD_TAB_ITEM, EDIT_TAB_ITEM, REMOVE_TAB_ITEM, COPY_TAB_ITEM } from '@/store/main-types'

export default {
  name: 'home',
  components: {
    'custom-tabs': Tabs,
    'item-form': ItemForm
  },
  data () {
    return {
      showForm: false,
      itemKey: '',
      result: ''
    }
  },
  computed: {
    items: {
      get () {
        return this.$store.state.items
      }
    }
  },
  methods: {
    ...mapMutations({
      addItem: ADD_TAB_ITEM,
      editItem: EDIT_TAB_ITEM,
      removeItem: REMOVE_TAB_ITEM,
      copyItem: COPY_TAB_ITEM
    }),
    edit (key) {
      this.itemKey = key
      this.showForm = true
    },
    saveHandler () {
      this.result = JSON.stringify({items: this.items})
    }
  },
  created () {
  }
}
</script>
