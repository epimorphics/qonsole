import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from '@/stores/qonsole'
import { cloneDeep } from 'lodash'
const localVue = createLocalVue()
localVue.use(Vuex)
let store

beforeEach(() => {
  store = new Vuex.Store(cloneDeep(storeConfig))
})

test('add_history throws if a blank element is committed', () => {
  expect(() => {
    store.commit('add_history', {})
  }).toThrow()
})

test('add_history will add a new element', () => {
  store.commit('add_history', {
    date: '120',
    query: 'select',
    elapsed: '110'
  })
  expect(store.state.history.length).toEqual(1)
})
