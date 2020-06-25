/*eslint no-unused-vars: "error"*/

function sparqlQuery(query, baseURL, format) {
	if (!format)
		format="application/json";
	var params={
		"default-graph": "", "should-sponge": "soft", "query": query,
		"debug": "on", "timeout": "", "format": format,
		"save": "display", "fname": ""
	};
	
	var querypart="";
	for(var k in params) {
		querypart += k+"="+encodeURIComponent(params[k])+"&";
	}
	var queryURL=baseURL + '?' + querypart;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET",queryURL,false);
	xmlhttp.send();
	return xmlhttp.responseText; 

}

export default sparqlQuery