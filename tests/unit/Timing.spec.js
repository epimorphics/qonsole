import { shallowMount, createLocalVue } from '@vue/test-utils'
import Timing from '@/components/Timing.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Timing.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        qonsole: {
          state: {
            timeTaken: 10
          }
        }
      }
    })
  })

  it('renders timing value from store', () => {
    const wrapper = shallowMount(Timing, {
      localVue,
      store
    })
    expect(wrapper.text()).toMatch('10 ms')
  })
})
