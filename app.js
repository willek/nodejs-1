const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // if (req.url === '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
  //     if (err) throw err;
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.end(data);
  //   });
  // }

  // if (req.url === '/about') {
  //   fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
  //     if (err) throw err;
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.end(data);
  //   });
  // }

  // if (req.url === '/api/users') {
  //   const users = [
  //     { name: 'Willy Setiawan', age: 19 },
  //     { name: 'john Doe', age: 20 },
  //   ];

  //   res.writeHead(200, { 'Content-Type': 'application/json' });

  //   res.end(JSON.stringify(users));
  // }

  // build file path
  const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

  const extname = path.extname(filePath);

  let contentType;

  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    default:
      contentType = 'text/html';
      break;
  }

  // read file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code == 'ENOENT') {
        // not found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data, 'utf8');
        });
      } else {
        // server error
        res.writeHead(500);
        res.end(`Error: ${err.code}`);
      }
    } else {
      // no error
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data, 'utf8');
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => { console.log(`Server running on port: ${PORT}`); });
