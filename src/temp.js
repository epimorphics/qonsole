// decomposeXML: function () {
//     this.initXMLContent()
//     var variables = this.result.getElementsByTagName("variable")
//     var columnLength = variables.length
//     var results = this.result.getElementsByTagName("result")
//     var rowLength = result.length
//     for (var i = 0; i < columnLength; i++) {
//         this.xmlContent.columns.push(variables[i].attributes[0].value)
//         console.log(this.xmlContent.columns)
//     }
//     for (i = 0; i < rowLength; i++) {
//         for (j = 0; j < results[i].childNodes.length; i++) 
//         }
//     }
// },
// initXMLContent: function () {
//     this.xmlContent.columns = new Array()
//     this.xmlContent.rows = new Array()
//     this.xmlContent.distinct = false
//     this.xmlContent.ordered = false
// }