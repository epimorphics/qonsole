import { mount, createLocalVue } from '@vue/test-utils'
import component from '@/components/Messages.vue'
import Vuex from 'vuex'
import Element from 'element-ui'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Element)

describe('Messages.vue', () => {
  let store

  const mutations = {
    // set_endpoint: jest.fn()
  }

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        qonsole: {
          state: {
            messages: ['Message 1', 'Message 2']
          },
          mutations
        }
      }
    })
  })

  it('renders messages value', () => {
    const wrapper = mount(component, {
      localVue,
      store
    })
    expect(wrapper.findAll('.message').at(0).text()).toContain('Message 1')
    expect(wrapper.findAll('.message').length).toBe(2)
  })
  // TODO support checking of rendering values
  // TODO support checking reloading values from history
  // it('renders value from store', () => {
  //   const wrapper = mount(component, {
  //     localVue,
  //     store
  //   })
  //   expect(wrapper.html()).toContain('http://')
  // })
})
