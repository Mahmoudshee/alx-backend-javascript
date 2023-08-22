const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);
const databasePath = args[0];

const app = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');

if (req.url === '/') {
res.end('Hello Holberton School!\n');
} else if (req.url === '/students') {
res.write('This is the list of our students\n');
countStudents(databasePath)
.then((result) => {
res.end(result);
})
.catch((error) => {
res.end(error.message);
});
} else {
res.end('Not found\n');
}
});

app.listen(1245, () => {
console.log('Server is running at http://localhost:1245/');
});

module.exports = app;

