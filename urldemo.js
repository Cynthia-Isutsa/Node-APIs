import url from 'url';

//helps to parse the url


//parse()
const urlString = 'https://www.example.com/path/to/resource?param1=value1&param2=value2#section';
const parsedUrl = url.parse(urlString, true);
console.log(parsedUrl);

//url object
const urlObject = new URL(urlString);
console.log(urlObject);

//format()
const formattedUrl = url.format(urlObject);
console.log(formattedUrl);

//import.meta.url
const __filename = url.fileURLToPath(import.meta.url);
console.log(__filename);
console.log(import.meta.url);

//searchParams
const searchParams = new URLSearchParams(parsedUrl.search);
console.log(searchParams);
console.log(searchParams.get('param1'));
searchParams.delete('param1');
searchParams.append('param3', 'value3');
console.log(searchParams);