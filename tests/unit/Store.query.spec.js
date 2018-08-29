import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from '@/stores/qonsole'
import { cloneDeep } from 'lodash'

const localVue = createLocalVue()
localVue.use(Vuex)

let correctQuery = `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT ?predicate ?object WHERE {
  ?bw rdfs:label "Spittal"@en.
  ?bw ?predicate ?object.
}`

let store

beforeEach(() => {
  store = new Vuex.Store(cloneDeep(storeConfig))
})

test('set_query sets the query', () => {
  let query = 'select subject'
  store.commit('set_query', query)
  expect(store.state.query).toBe(query)
})

test('set_isLoading sets the loading state', () => {
  store.commit('set_isLoading', true)
  expect(store.state.isLoading).toBe(true)
  store.commit('set_isLoading', false)
  expect(store.state.isLoading).toBe(false)
})

test('checkQuery passes for correct query', (done) => {
  let query = `prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  prefix owl: <http://www.w3.org/2002/07/owl#>
  prefix xsd: <http://www.w3.org/2001/XMLSchema#>
  prefix bw: <http://environment.data.gov.uk/def/bathing-water/>
  select ?predicate ?object
    where {
      ?bw rdfs:label "Spittal"@en;
      ?predicate ?object}`
  store.dispatch('checkQuery', query)
  setTimeout(() => {
    expect(store.state.error).toBeFalsy()
    done()
  }, 1000)
})

test('checkQuery fails for incorrect query', (done) => {
  let query = `prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  prefix owl: <http://www.w3.org/2002/07/owl#>
  prefix xsd: <http://www.w3.org/2001/XMLSchema#>
  prefix bw: <http://environment.data.gov.uk/def/bathing-water/>
  select ?predicate ?object
    where {
      ?bw rdfs:label "Spittal"@en
      ?predicate ?object}`
  store.dispatch('checkQuery', query)
  setTimeout(() => {
    expect(store.state.error).toBeDefined()
    done()
  }, 1000)
})

test('format_query formats the current query', () => {
  let query = `prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  prefix owl: <http://www.w3.org/2002/07/owl#>
  prefix xsd: <http://www.w3.org/2001/XMLSchema#>
  prefix bw: <http://environment.data.gov.uk/def/bathing-water/>
  select ?predicate ?object
    where {
      ?bw rdfs:label "Spittal"@en;
      ?predicate ?object}`
  store.commit('set_query', query)
  // expect(store.state.query).toEqual(query)
  store.dispatch('format_query', query)
  expect(store.state.query).toEqual(correctQuery)
})

test('runQuery sets loading state for query', () => {
  store.commit('set_query', correctQuery)
  store.commit('set_endpoint', 'http://example.com')
  store.dispatch('runQuery')
  expect(store.state.messages.length).toBe(1)
  expect(store.state.isLoading).toBe(true)
})

test('runQuery errors if no query set', () => {
  store.commit('set_endpoint', 'http://example.com')
  expect(() => {
    store.dispatch('runQuery')
  }).toThrow()
})

test('runQuery errors if no endpoint set', () => {
  store.commit('set_query', correctQuery)
  expect(() => {
    store.dispatch('runQuery')
  }).toThrow()
})

test('runQuery aborts a currently running query', () => {
  store.commit('set_query', correctQuery)
  store.commit('set_endpoint', 'http://example.com')
  store.dispatch('runQuery')
  expect(store.state.isLoading).toBe(true)
  store.dispatch('runQuery')
  expect(store.state.isLoading).toBe(false)
})

// test('runQuery returns results for a query', (done) => {
//   store.commit('set_query', correctQuery)
//   store.commit('set_endpoint', 'http://example.com')
//   store.dispatch('runQuery')
//   expect(store.state.isLoading).toBe(true)
//   setTimeout(() => {
//     store.dispatch('runQuery')
//     console.log(store.state.resultsError)
//     expect(store.state.results).toBe({})
//     done()
//   }, 4000)
// })

// test('runQuery correctly fails with a status error for errornous query', () => {
// })
