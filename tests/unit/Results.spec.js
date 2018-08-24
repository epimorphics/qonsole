import { shallowMount, createLocalVue } from '@vue/test-utils'
import component from '@/components/Results.vue'
import Vuex from 'vuex'
import Element from 'element-ui'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Element)

describe('Results.vue', () => {
  let store
  let wrapper

  const actions = {
    'runQuery': jest.fn(),
    'format_query': jest.fn()
  }

  const mutations = {
    'add_saved': jest.fn(),
    'set_isLoading': (state, val) => {
      state.isLoading = val
    }
  }

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        qonsole: {
          state: {},
          getters: {
            results (state) {
              return {
                asFormat () { return {count: 0} }
              }
            }
          },
          actions,
          mutations
        }
      }
    })
    wrapper = shallowMount(component, {
      localVue,
      store
    })
  })

  it('renders', () => {
    expect(wrapper.find('#results-block').exists())
  })

  // TODO - Issue with loading results in JSDOM as it expects too much from the Window object.
})
