<template>
  <v-form
    ref="form"
    class="item-form"
    v-model="valid"
    @submit.prevent="submitHandler"
    lazy-validation
  >
    <v-card class="item-card">
      <v-toolbar
        flat
        dark
        color="primary"
      >
        <v-toolbar-title>{{edit ? 'Edit item' : 'Add item'}}</v-toolbar-title>
      </v-toolbar>
      <div class="item-card-content">
        <v-text-field
          label="Title"
          v-model="title"
          :rules="[v => !!v || 'Field is required']"
        ></v-text-field>
        <v-select
          :items="services"
          v-model="service"
          label="Service"
          :rules="[v => !!v || 'Field is required']"
        ></v-select>
        <v-text-field
          label="Quantity"
          v-model="quantity"
          :rules="[v => !!v || 'Field is required', v => /[0-9]/.test(v) || 'Must include numbers']"
        ></v-text-field>
        <v-text-field
          label="Unit cost"
          v-model="cost"
          :rules="[v => !!v || 'Field is required', v => /[0-9]/.test(v) || 'Must include numbers']"
        >
        </v-text-field>
      </div>
      <v-card-actions>
        <v-btn @click="$emit('close'); $refs.form.reset()">
          Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn type="submit" color="primary">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
import { SET_ITEM, SET_TITLE, SET_SERVICE, SET_QUANTITY, SET_UNIT_COST } from '@/store/main-types'
import { mapMutations } from 'vuex'

export default {
  name: 'item-form',
  props: {
    itemKey: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data () {
    return {
      valid: true
    }
  },
  computed: {
    services () {
      return this.$store.state.services
    },
    edit () {
      return this.itemKey !== ''
    },
    item: {
      get () {
        return this.$store.state.item
      },
      set (val) {
        this.setItem(val)
      }
    },
    title: {
      get () {
        return this.item.title
      },
      set (val) {
        this.setTitle(val)
      }
    },
    service: {
      get () {
        return this.item.service
      },
      set (val) {
        this.setService(val)
      }
    },
    quantity: {
      get () {
        return this.item.quantity
      },
      set (val) {
        this.setQuantity(val)
      }
    },
    cost: {
      get () {
        return this.item.unit_cost
      },
      set (val) {
        this.setUnitCost(val)
      }
    }
  },
  watch: {
    itemKey (newVal) {
      if (newVal) {
        let item = this.$store.state.items.find(item => item.key === this.itemKey)
        this.item = JSON.stringify(item)
        this.item = JSON.parse(this.item)
        // this.item = this.$store.state.items.find(item => item.key === this.itemKey)
      }
    }
  },
  methods: {
    ...mapMutations({
      setItem: SET_ITEM,
      setTitle: SET_TITLE,
      setService: SET_SERVICE,
      setQuantity: SET_QUANTITY,
      setUnitCost: SET_UNIT_COST
    }),
    submitHandler () {
      if (this.$refs.form.validate()) {
        if (this.edit) {
          this.$emit('edit', this.itemKey)
        } else {
          this.$emit('add', this.item)
        }
        this.$emit('close')
        this.$refs.form.reset()
      }
    }
  }
}
</script>

<style scoped lang="sass">
.item-card, .item-form
  height: 100%
.item-card-content
  padding: 10px 30px
</style>
