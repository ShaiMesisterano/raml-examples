const api = require('./api.json');

const example = api.paths["/distributions"].get.responses[200].content['application/json'].schema;

console.log(example);