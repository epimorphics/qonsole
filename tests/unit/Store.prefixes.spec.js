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

test('add_prefix throws if object is blank', () => {
  expect(() => {
    store.commit('add_prefix', {})
  }).toThrow()
})

test('remove_prefix will remove an element', () => {
  let prfx = {prefix: 'example', uri: 'hello:world'}
  store.commit('add_prefix', prfx)
  expect(Object.keys(store.state.config.prefixes).length).toEqual(1)
  store.commit('remove_prefix', prfx)
  expect(Object.keys(store.state.config.prefixes).length).toEqual(0)
})

test('set_selectedPrefixes will add an element', () => {
  expect(Object.keys(store.state.selectedPrefixes).length).toEqual(0)
  let prfxs = {'example': 'hello:world'}
  store.commit('set_selectedPrefixes', prfxs)
  expect(Object.keys(store.state.selectedPrefixes).length).toEqual(1)
})

test('add_selectedPrefix mutation will add remove a prefix', () => {
  expect(Object.keys(store.state.selectedPrefixes).length).toEqual(0)
  let prfx = {prefix: 'example', uri: 'hello:world'}
  store.commit('add_selectedPrefix', prfx)
  expect(Object.keys(store.state.selectedPrefixes).length).toEqual(1)
})
