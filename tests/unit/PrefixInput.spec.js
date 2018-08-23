import { shallowMount, createLocalVue } from '@vue/test-utils'
import component from '@/components/PrefixInput.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('PrefixInput.vue', () => {
  let store

  const mutations = {
    add_selectedPrefix: jest.fn(),
    set_selectedPrefixes: jest.fn()
  }

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        qonsole: {
          state: {},
          mutations,
          getters: {
            config: state => {
              return {
                prefixes: {
                  'bw': 'http://environment.data.gov.uk/def/bathing-water/'
                }
              }
            },
            selectedPrefixes: state => {
              return {}
            }
          }
        }
      }
    })
  })

  it('renders value from store', () => {
    const wrapper = shallowMount(component, {
      localVue,
      store
    })
    expect(wrapper.html()).toContain('bw')
  })
  it('updates value in store', () => {
    const wrapper = shallowMount(component, { localVue, store })
    wrapper.findAll('.prefixes a').at(0).trigger('click')
    expect(mutations.set_selectedPrefixes).toHaveBeenCalled()
  })
})
