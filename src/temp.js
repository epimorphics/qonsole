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

// makeTable (jsonResponse, variables) {

    // this.table = ''
    // this.table += '<table style="width:60%">'

    // this.table += '<thead><tr>'
    // for (var x = 0; x < variables.length; x++) {
    //     this.table += '<th>'
    //     this.table += variables[x]
    //     this.table += '</th>'
    // }
    // this.table += '</tr></thead>'
    // this.table += '<tbody>'
    // for (var i = 0; i < jsonResponse.length; i++) {
    //     this.table += '<tr>'

    //     for (var j = 0; j < variables.length; j ++) {
    //         this.table += '<td>'
    //         this.table += jsonResponse[i][variables[j]]
    //         this.table += '</td>'
    //     }
    //     this.table += '</tr>'
    // }
    // this.table += '</tbody></table>'

    // document.querySelectorAll(".table-sortable th").forEach(headerCell => {
    //     headerCell.addEventListener("click", () => {
    //         const tableElement = headerCell.parentElement.parentElement;
    //         const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
    //         const currentIsAscending = headerCell.classList.contains("th-sort-asc");

    //         sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    //     });
    // });
// }