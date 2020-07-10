# IRI: A utility for converting and parsing URIs and IRIs

Utilities for using <a href="http://www.ietf.org/rfc/rfc3987.txt">RFC 3987</a> and
<a href="http://www.ietf.org/rfc/rfc3986.txt">RFC 3986</a>

IRIs are unicode URIs, URIs by definition being 7-bit characters.

## Construction of the URI

From <a href="http://www.ietf.org/rfc/rfc3986.txt">RFC 3986</a>:

         foo://example.com:8042/over/there?name=ferret#nose
         \_/   \______________/\_________/ \_________/ \__/
          |           |            |            |        |
       scheme     authority       path        query   fragment
          |   _____________________|__
         / \ /                        \
         urn:example:animal:ferret:nose

The authority exists in a URI/IRI and is marked by a leading `//`. It can be broken down into a number of other components:

         root:hunter2@[::1]:8080
         \__________/ \___/ \__/
               |        |    |
           userinfo   host  port

## Usage of `IRI`

The constructor takes a single argument, a URI or IRI string:

	var iri = require('iri');
	var path = new iri.IRI(str).resolveReference('/');

### toString()

Returns UTF-16 IRI

### defrag()

Returns the IRI without the fragment component. Useful for dereferencing URLs on a network.

	new IRI().defrag() === 'http://example.com/resource'

### isAbsolute()

IRIs with a fragment are not absolute.

### toAbsolute()

Resolves the IRI against itself, having the effect of stripping the fragment and checking that the supplied IRI is valid (absolute).

### authority()

Returns the authority component of the IRI, such as "user:password@example.com:8080"

### fragment()

Returns the fragment component of the IRI.

### hierpart()

Returns the hier-part of the IRI, the hierarchial component: Everything between the scheme and query, including leading `//` for the host, if it exists.

### host()

Returns the host component of the URI, either a domain name or string-formatted IP address. Excludes port number and username/password.

### path()

Returns the path component of the hier-part. Does not include the authority/host, query, or fragment.

### port()

Returns the port component of the authority as a string, or null if there is no port.

### query()

Returns the query component of the IRI including leading "?", or `null` if there is no query component.

### resolveReference(ref)

Resolve the provided URI/IRI reference against this IRI.

### scheme()

Returns the scheme of the IRI, e.g. "https", "file", or "urn".

### userinfo()

Returns the username/password component of the IRI.

### toURIString()

Returns a URI formatted string with only 7-bit characters.

### toIRIString()

Decodes URI-encoded UTF-8 characters and returns a unicode string (Strings in ECMAScript/JavaScript are UTF-16).

### toIRI()

Returns a new IRI object with URI-encoded UTF-8 characters decoded.


## Function Usage

### iri.fromURI(uri)

Returns an iri.IRI object with UTF-8 escaped characterd decoded.

### iri.toIRIString(uri)

Returns an IRI string decoded from the given URI.


## Tests

Tests are available as a Vows test suite. Run `vows` in the package directory to execute.
