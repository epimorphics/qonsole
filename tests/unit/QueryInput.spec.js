import { shallowMount, createLocalVue } from '@vue/test-utils'
import component from '@/components/QueryInput.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('QueryInput.vue', () => {
  let store

  const mutations = {}

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        qonsole: {
          state: {},
          mutations,
          getters: {
            query: state => {}
          }
        }
      }
    })
  })

  it('renders', () => {
    const wrapper = shallowMount(component, {
      localVue,
      store
    })
    expect(wrapper.html()).toContain('query-edit')
  })
})
