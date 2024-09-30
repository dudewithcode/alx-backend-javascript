const fs = require('fs');
const http = require('http');

const host = 'localhost';
const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
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

const requestListener = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const outputStr = output.slice(0, -1);
      res.end(outputStr);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
};

const app = http.createServer(requestListener);
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

module.exports = app;
