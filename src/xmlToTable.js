/*eslint no-unused-vars: "error"*/

// A function to translate xml text file to js and output as a js table

function xmlToTable(xmlResponse) {
    var variables = xmlResponse.getElementsByTagName("variable").childNodes[0].nodeValue
    console.log("found some variables")
    console.log(variables)
}

export default xmlToTable