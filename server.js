const http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>StudyLog Server Running!</h1>');
}).listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
