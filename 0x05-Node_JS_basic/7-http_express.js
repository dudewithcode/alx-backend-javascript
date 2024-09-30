const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      if (data) {
        let output = '';
        const lines = data.split('\n').slice(1, -1);
        output += `Number of students: ${lines.length}\n`;
        const fieldObj = {};
        for (const x of lines) {
          const student = x.split(',');
          const field = student[3];
          const name = student[0];
          if (field in fieldObj) {
            fieldObj[field].count += 1;
            fieldObj[field].firstName.push(name);
          } else {
            fieldObj[field] = { count: 1, firstName: [name] };
          }
        }
        Object.entries(fieldObj).forEach(([key, value]) => {
          output += `Number of students in ${key}: ${value.count}. List: ${value.firstName.join(', ')}\n`;
        });
        resolve(output);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((output) => {
    const outputStr = output.slice(0, -1);
    res.send(['This is the list of our students', outputStr].join('\n'));
  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
module.exports = app;
