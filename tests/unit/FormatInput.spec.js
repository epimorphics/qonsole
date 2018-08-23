import { shallowMount, createLocalVue } from '@vue/test-utils'
import component from '@/components/FormatInput.vue'
import Vuex from 'vuex'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Element, { locale })

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
  // TODO known issue with testing Element https://github.com/ElemeFE/element/issues/11811
  // it('updates value in store', () => {
  //   const wrapper = mount(component, { localVue, store })
  //   let options = wrapper.find('el-select').findAll('el-option')
  //   options.at(0).setSelected()
  //   expect(mutations.set_selectedFormat).toHaveBeenCalled()
  // })
})
