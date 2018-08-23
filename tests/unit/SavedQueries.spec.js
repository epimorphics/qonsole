import { shallowMount, createLocalVue } from '@vue/test-utils'
import component from '@/components/SavedQueries.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ExampleQueries.vue', () => {
  let store

  const mutations = {
    load_saved: jest.fn()
  }

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        qonsole: {
          selectedExample: {},
          getters: {
            config (state) {
              return {
                queries: [
                  {
                    'name': 'Properties of a named bathing water',
                    'query': 'select ?predicate ?object\nwhere'
                  }
                ]
              }
            },
            selectedExample (state) {
              return {}
            },
            query (state) {
              return [
                {
                  'name': 'Properties of a named bathing water',
                  'query': 'select ?predicate ?object\nwhere'
                }
              ]
            }
          },
          mutations
        }
      }
    })
  })

  it('renders value from store', () => {
    const wrapper = shallowMount(component, {
      localVue,
      store
    })
    expect(wrapper.html()).toContain('named bathing water')
  })
  it('updates value in store', () => {
    const wrapper = shallowMount(component, {
      localVue,
      store
    })
    let options = wrapper.find('.saved').findAll('a')
    options.at(0).trigger('click')
    expect(mutations.load_saved).toHaveBeenCalled()
  })
})
