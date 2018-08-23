import { shallowMount, createLocalVue } from '@vue/test-utils'
import Timing from '@/components/Timing.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Timing.vue', () => {
  it('renders timing value from store', () => {
    const wrapper = shallowMount(Timing, {
      localVue,
      propsData: {
        timeTaken: 10,
        resultsCount: 11
      }
    })
    expect(wrapper.text()).toContain('10ms')
    expect(wrapper.text()).toContain('11 result(s)')
  })
})
