import { mount, createLocalVue } from '@vue/test-utils'
import component from '@/components/Endpoints.vue'
import Vuex from 'vuex'
import Element from 'element-ui'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Element)

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
    const wrapper = mount(component, {
      localVue,
      store
    })
    expect(wrapper.html()).toContain('http://')
  })
  it('updates value in store', () => {
    const wrapper = mount(component, {
      localVue,
      store
    })
    let options = wrapper.find('input')
    options.setValue('example.com')
    expect(mutations.set_endpoint).toHaveBeenCalled()
  })
})
