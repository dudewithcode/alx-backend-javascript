const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      if (data) {
        const lines = data.split('\n').slice(1, -1);
        console.log(`Number of students: ${lines.length}`);
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
          console.log(`Number of students in ${key}: ${value.count}. List: ${value.firstName.join(', ')}`);
        });
        resolve(true);
      }
    });
  });
}
module.exports = countStudents;
