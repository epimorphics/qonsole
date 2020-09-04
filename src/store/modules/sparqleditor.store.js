import {makeQuery, sendQuery} from '@/scripts/remoteQuery.js'
import {saveAs} from 'file-saver'
import {toolbox} from '@/scripts/toolbox.js'

export default {
    namespaced: true, 
    state: {
        SPARQLCode: '', 
        endpoint: '', 
        errorStatus: false,
        errorMessage: '', 
        // For SPARQL Editor only 
        remoteResult: {
            cols: null,
            rows: null
        },
        remoteResultIsReady: false,
        remoteResultTime: 0, 
        remoteResultJSON: null, 
        remoteResultXML: null, 
        remoteResultCSV: null, 
        // For using SPARQL editor to query "local" RDF store 
        localResult: {
            cols: null, 
            rows: null
        },
        localResultIsReady: false,
        localResultTime: 0,
        exampleQueries: toolbox,
        outputFormat: 'Table', 
    }, 
    getters: {
        SPARQLCode: state => state.SPARQLCode,
        errorStatus: state => state.errorStatus,
        errorMessage: state => state.errorMessage, 
        remoteResultCols: state => state.remoteResult.cols,
        remoteResultRows: state => state.remoteResult.rows, 
        remoteResultIsReady: state => state.remoteResultIsReady,
        remoteResultTime: state => state.remoteResultTime, 
        localResultCols: state => state.localResult.cols,
        localResultRows: state => state.localResult.rows,
        localResultIsReady: state => state.localResultIsReady,
        localResultTime: state => state.localResultTime,
        exampleQueries: state => state.exampleQueries,
        outputFormat: state => state.outputFormat,
        remoteResultJSON: state => state.remoteResultJSON, 
        remoteResultXML: state => state.remoteResultXML,
        remoteResultCSV: state => state.remoteResultCSV,
        endpoint: state => state.endpoint
    },
    mutations: {
        updateCode (state, newCode) {
            state.SPARQLCode = newCode 
        },
        updateResponse (state, newResponse) {
            state.jsonResponse = newResponse
        },
        updateError (state, {newErrorStatus, newErrorMessage}) {
            state.errorStatus = newErrorStatus
            state.errorMessage = newErrorMessage
        },
        updateEndpoint (state, newEndpoint) {
            state.endpoint = newEndpoint
        },
        updateRemoteResult (state, newResponse) {
            // Get collumn headings i.e. variables 
            state.remoteResult.cols = newResponse.head.vars 
            
            // Get row of data for output 
            var rows = []
            for ( var i = 0; i< newResponse.results.bindings.length; i++) {
                var entries = Object.entries(newResponse.results.bindings[i])
                var row = []
                for (var j = 0; j < entries.length; j++) {
                    row.push(entries[j][1].value)
                }
                rows.push(row)
            }
            state.remoteResult.rows = rows 
            state.remoteResultIsReady = true 
        },
        updateLocalResult (state, newLocalResult) {
            var variables = []
            var entries = Object.entries(newLocalResult[0])
            for (var i = 0; i < entries.length; i++) {
                variables.push(entries[i][0])
            }
            state.localResult.cols = variables 

            var rows = []
            for (i = 0; i < newLocalResult.length; i++) {
                entries = Object.entries(newLocalResult[i])
                var row = []
                for (var j = 0; j < entries.length; j++) {
                    row.push(entries[j][1].value)
                }
                rows.push(row)
            }
            state.localResult.rows = rows 

            state.localResultIsReady = true 
        },
        updateLocalResultTime (state, newTime) {
            state.localResultTime = newTime 
        },
        updateRemoteResultTime (state, newTime) {
            state.remoteResultTime = newTime
        },
        addPrefixToCode (state, payload) {
            state.SPARQLCode = 'PREFIX ' + payload.name + ': <' + payload.url + '>\n' + state.SPARQLCode
        },
        removePrefixFromCode (state, payload) {
            let removeCode = 'PREFIX ' + payload.name + ': <' + payload.url + '>\n'
            let code = state.SPARQLCode
            state.SPARQLCode = code.replace(removeCode, '')
        },
        updateOutputFormat (state, newOutputFormat) {
            state.outputFormat = newOutputFormat
        },
        updateRemoteResultJSON (state, newResponse) {
            state.remoteResultJSON = JSON.stringify(newResponse)
        },
        updateRemoteResultXML(state, newResponse) {
            state.remoteResultXML = newResponse
        },
        updateRemoteResultCSV(state, newResponse) {
            state.remoteResultCSV = newResponse
        }
    },
    actions: {
        updateCode: ({commit}, newCode) => {
            commit('updateCode', newCode)
        },
        queryStore: ({state, dispatch}) => {
            dispatch('rdfEditorStore/queryStore', state.SPARQLCode, {root: true})
        },
        queryEndpoint: ({state, commit}) => {
            var t0 = performance.now()
            
            state.remoteResultIsReady = false; 

            var queryURL = null
            var rawResponse = null

            switch (state.outputFormat) {
                case 'Table':
                    queryURL = makeQuery(state.SPARQLCode, state.endpoint, 'json')
                    rawResponse = sendQuery(queryURL)
                    try {
                        commit('updateRemoteResult', JSON.parse(rawResponse))
                        commit('updateError', {newErrorStatus: false, newErrorMessage: ''})
                    } catch (error) {
                        commit('updateError', {newErrorStatus: true, newErrorMessage: rawResponse.split("\n")[0]})
                    }
                    break;
                case 'JSON':
                    queryURL = makeQuery(state.SPARQLCode, state.endpoint, 'json')
                    rawResponse = sendQuery(queryURL)
                    try {
                        commit('updateRemoteResultJSON', JSON.parse(rawResponse))
                        commit('updateError', {newErrorStatus: false, newErrorMessage: ''})
                    } catch (error) {
                        commit('updateError', {newErrorStatus: true, newErrorMessage: rawResponse.split("\n")[0]})
                    }
                    break; 
                case 'XML':
                    queryURL = makeQuery(state.SPARQLCode, state.endpoint, 'xml')
                    rawResponse = sendQuery(queryURL)
                    try {
                        commit('updateRemoteResultXML', rawResponse)
                        commit('updateError', {newErrorStatus: false, newErrorMessage: ''})
                    } catch (error) {
                        commit('updateError', {newErrorStatus: true, newErrorMessage: rawResponse.split("\n")[0]})
                    }
                    break;
                case 'CSV':
                    queryURL = makeQuery(state.SPARQLCode, state.endpoint, 'csv')
                    rawResponse = sendQuery(queryURL)
                    try {
                        commit('updateRemoteResultCSV', rawResponse)
                        commit('updateError', {newErrorStatus: false, newErrorMessage: ''})
                    } catch (error) {
                        commit('updateError', {newErrorStatus: true, newErrorMessage: rawResponse.split("\n")[0]})
                    }
                    break;
            }
            var t1 = performance.now()
            commit('updateRemoteResultTime', (Math.round( (t1-t0) * 100 + Number.EPSILON ) / 100))
        },
        updateEndpoint: ({commit}, newEndpoint) => {
            commit('updateEndpoint', newEndpoint)
        },
        saveQuery: ({state}) => {
            console.log(state.SPARQLCode)
            var blob = new Blob([state.SPARQLCode], {type: "text/plain;charset=utf-8"})
            saveAs(blob, 'query.txt')
        },
        updateLocalResult: ({commit}, newLocalResult) => {
            commit('updateLocalResult', newLocalResult)
        },
        addPrefixToCode: ({commit}, payload) => {
            commit('addPrefixToCode', payload)
        },
        removePrefixFromCode: ({commit}, payload) => {
            commit('removePrefixFromCode', payload)
        },
        loadExampleQuery: ({state, commit}, queryFile) => {
            commit('updateCode', state.exampleQueries[queryFile])
        },
        updateOutputFormat: ({commit}, newOutputFormat) => {
            commit('updateOutputFormat', newOutputFormat)
        }
    }
}