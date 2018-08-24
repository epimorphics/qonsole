import { shallowMount, createLocalVue } from '@vue/test-utils'
import component from '@/components/Footer.vue'

const localVue = createLocalVue()

describe('Footer.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(component, { localVue })
    expect(wrapper.html()).toContain('Epimorphics')
  })
})
