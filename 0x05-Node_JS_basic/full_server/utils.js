import fs from 'fs/promises';

const readDatabase = async (filePath) => {
try {
const data = await fs.readFile(filePath, 'utf8');
const lines = data.trim().split('\n');
const result = {};

lines.forEach((line) => {
const [firstname, , , field] = line.split(',');
if (firstname && field) {
if (!result[field]) {
result[field] = [];
}
result[field].push(firstname);
}
});

return result;
} catch (error) {
throw new Error('Cannot load the database');
}
};

export default readDatabase;

