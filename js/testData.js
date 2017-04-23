export const testData = {
    'http://localhost/apiRoot/': { "version": "0.0.1", "_links": { "link1": { "href": "http://localhost/apiRoot/link1" }, "link2": { "href": "http://localhost/apiRoot/link2" }, "link3": { "href": "http://localhost/apiRoot/link3" } } },
    'http://localhost/apiRoot/link1': { "name": "Finlay Smith", "address": "Edinburgh", "_links": { "self": { "href": "http://localhost/apiRoot/link1" }, "link3": { "href": "http://localhost/apiRoot/link3" } } },
    'http://localhost/apiRoot/link2': { "pathWithOnlyLinks": [], "_links": { "self": { "href": "http://localhost/apiRoot/link2" }, "link1": { "href": "http://localhost/apiRoot/link1" } } },
    'http://localhost/apiRoot/link3': {}
};