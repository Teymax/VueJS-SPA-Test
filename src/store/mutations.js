import * as constants from './main-types'

function generateID () {
  return '_' + Math.random().toString(36).substr(2, 9)
}

export default {
  [constants.ADD_TAB_ITEM] (state, item) {
    state.items = [...state.items, Object.assign({key: generateID()}, item)]
  },
  [constants.EDIT_TAB_ITEM] (state, key) {
    let edited = state.item
    state.items = state.items.map(item => {
      return item.key === key ? Object.assign(item, edited) : item
    })
  },
  [constants.REMOVE_TAB_ITEM] (state, key) {
    state.items = state.items.filter(item => item.key !== key)
  },
  [constants.COPY_TAB_ITEM] (state, key) {
    let item = state.items.find(item => item.key === key)
    let newItem = {key: generateID(), title: item.title, service: item.service, quantity: item.quantity, unit_cost: item.unit_cost}
    state.items = [...state.items, newItem]
  },
  [constants.SET_ITEM] (state, item) {
    state.item = item
  },
  [constants.SET_TITLE] (state, title) {
    state.item.title = title
  },
  [constants.SET_SERVICE] (state, service) {
    state.item.service = service
  },
  [constants.SET_QUANTITY] (state, quantity) {
    state.item.quantity = quantity
  },
  [constants.SET_UNIT_COST] (state, cost) {
    state.item.unit_cost = cost
  }
}
