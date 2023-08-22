import readDatabase from '../utils';

class StudentsController {
static async getAllStudents(req, res) {
try {
const database = await readDatabase(process.argv[2]);
const response = ['This is the list of our students'];

Object.keys(database).sort().forEach((field) => {
response.push(`Number of students in ${field}: ${database[field].length}. List: ${database[field].join(', ')}`);
});

res.status(200).send(response.join('\n'));
} catch (error) {
res.status(500).send(`Cannot load the database\n${error.message}`);
}
}

static async getAllStudentsByMajor(req, res) {
const { major } = req.params;

if (major !== 'CS' && major !== 'SWE') {
res.status(500).send('Major parameter must be CS or SWE');
return;
}

try {
const database = await readDatabase(process.argv[2]);
const students = database[major] || [];

res.status(200).send(`List: ${students.join(', ')}`);
} catch (error) {
res.status(500).send(`Cannot load the database\n${error.message}`);
}
}
}

export default StudentsController;

