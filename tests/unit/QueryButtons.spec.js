import { mount, createLocalVue } from '@vue/test-utils'
import component from '@/components/QueryButtons.vue'
import Vuex from 'vuex'
import Element from 'element-ui'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Element)

describe('Messages.vue', () => {
  let store
  let wrapper

  const actions = {
    'runQuery': jest.fn(),
    'format_query': jest.fn()
  }

  const mutations = {
    'add_saved': jest.fn(),
    'set_isLoading': (state, val) => {
      state.isLoading = val
    }
  }

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        qonsole: {
          state: {
            isLoading: false
          },
          getters: {
            isLoading (state) {
              return state.isLoading
            }
          },
          actions,
          mutations
        }
      }
    })
    wrapper = mount(component, {
      localVue,
      store
    })
  })

  it('renders', () => {
    expect(wrapper.html()).toContain('el-row')
  })

  it('calls store when clicked', () => {
    let buttons = wrapper.findAll('button')
    buttons.trigger('click')

    expect(actions.runQuery).toHaveBeenCalled()
    expect(actions.format_query).toHaveBeenCalled()
    expect(mutations.add_saved).toHaveBeenCalled()
  })

  it('changes text when loading', () => {
    expect(wrapper.html()).toContain('Run')
    store.commit('set_isLoading', true)
    expect(wrapper.html()).toContain('Cancel')
  })
})
