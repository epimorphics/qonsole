/*eslint no-unused-vars: "error"*/

export function sendQuery(queryURL) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET",queryURL,false);
	xmlhttp.send();
	return xmlhttp.response; 

}

export function makeQuery(query, baseURL, format) {
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
	return queryURL; 
}

