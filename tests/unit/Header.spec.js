import { shallowMount, createLocalVue } from '@vue/test-utils'
import component from '@/components/Header.vue'

const localVue = createLocalVue()

describe('Header.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(component, { localVue })
    expect(wrapper.html()).toContain('Qonsole')
  })
})
