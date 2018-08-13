import { shallowMount, createLocalVue } from '@vue/test-utils'
import component from '@/components/FormatInput.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FormatInput.vue', () => {
  let store

  const mutations = {
    set_selectedFormat: jest.fn()
  }

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        qonsole: {
          state: {
            formats: [
              {
                name: 'table',
                format: 'tsv'
              }
            ]
          },
          mutations
        }
      }
    })
  })

  it('renders value from store', () => {
    const wrapper = shallowMount(component, { localVue, store })
    expect(wrapper.html()).toContain('tsv')
  })
  it('updates value in store', () => {
    const wrapper = shallowMount(component, { localVue, store })
    let options = wrapper.find('select').findAll('option')
    options.at(0).setSelected()
    expect(mutations.set_selectedFormat).toHaveBeenCalled()
  })
})
