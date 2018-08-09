import { shallowMount, createLocalVue } from '@vue/test-utils'
import component from '@/components/Endpoints.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Endpoints.vue', () => {
  let store

  const mutations = {
    set_endpoint: jest.fn()
  }

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        qonsole: {
          state: {
            endpoint: ''
          },
          getters: {
            config (state) {
              return { endpoints: [
                'http://'
              ] }
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
    expect(wrapper.html()).toContain('http://')
  })
  it('updates value in store', () => {
    const wrapper = shallowMount(component, {
      localVue,
      store
    })
    let options = wrapper.find('select').findAll('option')
    options.at(0).setSelected()
    expect(mutations.set_endpoint).toHaveBeenCalled()
  })
})
