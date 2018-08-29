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

test('add_message throws if message object is committed', () => {
  expect(() => {
    store.commit('add_message', {})
  }).toThrow()
})

test('remove_message will remove an element', () => {
  let msg = 'hello world'
  store.commit('add_message', msg)
  expect(store.state.messages.length).toEqual(1)
  store.commit('remove_message', msg)
  expect(store.state.messages.length).toEqual(0)
})

test('add_message action will automaticaly remove a message', (done) => {
  store.dispatch('add_message', {message: 'hello my world', duration: 10})
  expect(store.state.messages.length).toEqual(1)
  setTimeout(() => {
    expect(store.state.messages.length).toEqual(0)
    done()
  }, 20)
})
