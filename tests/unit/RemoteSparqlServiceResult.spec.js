import RemoteSparqlServiceResult from '@/remote-sparql-service-result'

describe('remoteSparqlServiceResult', () => {
  it('Gets basic info from result object', () => {
    const val = 'sdfsdfklvjsdlfj'
    const format = 'text'
    const sampleObj = new RemoteSparqlServiceResult(val, format)
    expect(sampleObj.getExtension()).toBe('txt')
    expect(sampleObj.asRaw()).toBe(val)
  })

  it('Gets text data from result object', () => {
    const val =
`-----
-----
-----
sdfsdfklvjsdlf
-----
asas
asasas`
    const format = 'text'
    const sampleObj = new RemoteSparqlServiceResult(val, format)
    const res = sampleObj.asText()
    expect(res.data).toBe(val)
    expect(res.mime).toBe('text/plain')
    expect(res.count).toBe(2)
  })

  it('Gets json data from result string', () => {
    const val = `{}`
    const format = 'json'
    const sampleObj = new RemoteSparqlServiceResult(val, format)
    const res = sampleObj.asJSON()
    expect(res.data).toBe(val)
    expect(res.mime).toBe('application/json')
    expect(res.count).toBe(1)
  })

  it('Gets json data from result object', () => {
    const val = {results: {bindings: [{}, {}]}}
    const format = 'json'
    const sampleObj = new RemoteSparqlServiceResult(val, format)
    const res = sampleObj.asJSON()
    expect(res.data.replace(/\s/g, '').replace(/\n/g, '')).toBe(JSON.stringify(val))
    expect(res.mime).toBe('application/json')
    expect(res.count).toBe(2)
  })

  it('Gets xml data from result object', () => {
    const val = `<results><res></res></results>`
    const format = 'xml'
    const sampleObj = new RemoteSparqlServiceResult(val, format)
    const res = sampleObj.asXML()
    expect(res.data).toBe(val)
    expect(res.mime).toBe('application/xml')
    expect(res.count).toBe(1)
  })

  // it('Gets table data from result object', () => {
  //   const val = `<results><res></res></results>`
  //   const format = 'xml'
  //   const sampleObj = new RemoteSparqlServiceResult(val, format)
  //   const res = sampleObj.asXML()
  //   expect(res.data).toBe(val)
  //   expect(res.mime).toBe('application/xml')
  //   expect(res.count).toBe(1)
  // })

  it('Gets string from xmlToString', () => {
    const val = `<results><res></res></results>`
    const format = 'xml'
    const sampleObj = new RemoteSparqlServiceResult(val, format)
    const res = sampleObj.xmlToString(val)
    expect(res).toBe(val)
  })
})
