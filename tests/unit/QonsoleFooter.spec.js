import { shallowMount, createLocalVue } from '@vue/test-utils'
import component from '@/components/QonsoleFooter.vue'

const localVue = createLocalVue()

describe('QonsoleFooter.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(component, { localVue })
    expect(wrapper.html()).toContain('Epimorphics')
  })
})
