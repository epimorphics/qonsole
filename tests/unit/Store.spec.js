import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from '@/stores/qonsole'
import { cloneDeep } from 'lodash'
const localVue = createLocalVue()
localVue.use(Vuex)
let store
let config

beforeEach(() => {
  store = new Vuex.Store(cloneDeep(storeConfig))
  config = {
    queries: [{query: ''}],
    endpoints: {default: 'http://example.com'}
  }
})

test('loads a saved query when config is commited', () => {
  store.commit('set_config', config)
  expect(store.state.config).toEqual(config)
})

test('when initialise is called config is set', () => {
  store.dispatch('initialise', config)
  expect(store.state.config).toEqual(config)
})

test('when initialise is called endpoint is set', () => {
  store.dispatch('initialise', config)
  expect(store.state.endpoint).toEqual(config.endpoints.default)
})
