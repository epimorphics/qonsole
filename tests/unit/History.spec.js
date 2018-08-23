import { mount, createLocalVue } from '@vue/test-utils'
import component from '@/components/History.vue'
import Vuex from 'vuex'
import Element from 'element-ui'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Element)

describe('History.vue', () => {
  let store

  const mutations = {
    // set_endpoint: jest.fn()
  }

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        qonsole: {
          state: {
            history: []
          },
          mutations
        }
      }
    })
  })

  it('renders empty value', () => {
    const wrapper = mount(component, {
      localVue,
      store
    })
    expect(wrapper.html()).toContain('Sorry')
  })

  // it('renders value from store', () => {
  //   const wrapper = mount(component, {
  //     localVue,
  //     store
  //   })
  //   expect(wrapper.html()).toContain('http://')
  // })
})
