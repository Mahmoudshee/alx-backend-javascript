const fs = require('fs');

function countStudents(path) {
return new Promise((resolve, reject) => {
fs.readFile(path, 'utf8', (error, data) => {
if (error) {
reject(`Cannot load the database\n${error.message}`);
return;
}

const lines = data.split('\n').filter(line => line);

const students = {};
lines.forEach(line => {
const fields = line.split(',');
const field = fields[fields.length - 1];
if (field !== 'field') {
if (!students[field]) {
students[field] = [];
}
students[field].push(fields[0]);
}
});

const totalStudents = Object.values(students).reduce((sum, fieldStudents) => sum + fieldStudents.length, 0);
console.log(`Number of students: ${totalStudents}`);

for (const field in students) {
console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
}

resolve();
});
});
}

module.exports = countStudents;

