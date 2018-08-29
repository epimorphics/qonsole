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

test('load_saved loads a saved query', () => {
  let savedQuery = {
    query: 'select'
  }
  store.commit('load_saved', savedQuery)
  expect(store.state.query.trim()).toBe(savedQuery.query)
})

test('save_current_state saves a query', () => {
  // Set query
  // Set endpoint
  let query = 'example query'
  let endpoint = 'example.com'
  let name = 'my saved query'
  store.commit('set_query', query)
  store.commit('set_endpoint', endpoint)
  store.commit('save_current_state', name)
  expect(store.state.config.queries.length).toBe(1)
  let saved = store.state.config.queries[0]
  expect(saved).toEqual({
    query,
    endpoint,
    name
  })
})

test('remove_saved removed a saved query', () => {
  let query = 'example query'
  let endpoint = 'example.com'
  let name = 'my saved query'
  store.commit('set_query', query)
  store.commit('set_endpoint', endpoint)
  store.commit('save_current_state', name)
  expect(store.state.config.queries.length).toBe(1)
  store.commit('remove_saved', store.state.config.queries[0])
  expect(store.state.config.queries.length).toBe(0)
})
