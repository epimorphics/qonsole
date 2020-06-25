import Vue from 'vue'
import Vuex from 'vuex'
// import 'es6-promise/auto'

Vue.use(Vuex)

const webStore = new Vuex.Store({
    state: {
        SparqlCode: '',
        RDFCode: '',
    },
    mutations: {
        changeSparcql (state, newCode) {
            state.SparqlCode = newCode
        },
        changeRDF (state, newCode) {
            state.RDFCode = newCode 
        }
    }
})