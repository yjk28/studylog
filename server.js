const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, 'public');

http.createServer((req, res) => {
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = path.join(PUBLIC, filePath);
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
