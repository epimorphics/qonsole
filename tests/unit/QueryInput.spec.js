import { shallowMount, createLocalVue } from '@vue/test-utils'
import component from '@/components/QueryInput.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('QueryInput.vue', () => {
  let store

  const mutations = {
    add_selectedPrefix: jest.fn(),
    set_selectedPrefixes: jest.fn()
  }

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        qonsole: {
          state: {
            query: 'prefix bw: <http://environment.data.gov.uk/def/bathing-water/>'
          },
          mutations,
          getters: {
            query: state => {
            }
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
