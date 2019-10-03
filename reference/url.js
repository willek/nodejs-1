const url = require('url');

const tempUrl = 'http://willek.com:8000/about?mobile=true&status=active';

const urlObj = new URL(tempUrl);

// serialized url
console.log(urlObj.href);

// host (root domain)
console.log(urlObj.host);

// hostname (without port)
console.log(urlObj.hostname);

// path name
console.log(urlObj.pathname);

// url query
console.log(urlObj.search);

// url query obj
console.log(urlObj.searchParams);

// add param to query obj
urlObj.searchParams.append('maintenance', 'true');

console.log(urlObj.searchParams);

// loop through params
urlObj.searchParams.forEach((value, name) => {
  console.log(name, value);
});
