// Your code here
const http = require('http');

const data = 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World!</title>
</head>
<body>
  <h1>Hello there!</h1>
</body>
</html>`

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // res.write(data);
    res.end(data);
});

const port = 5000;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});