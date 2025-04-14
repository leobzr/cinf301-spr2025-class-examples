const http = require('http');

// Create a simple HTTP server
// This server will listen for POST requests on /api/data
// and respond with the received data in JSON format
// The server will listen on port 4000
//
// To test with curl, use the following command:
// curl -X POST -H "Content-Type: application/json" -d '{"name":"John"}' http://localhost:4000/api/data
// To test with Postman, set the method to POST, the URL to http://localhost:4000/api/data,
// and the body to raw JSON with the content type set to application/json

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/api/data') {
    let body = '';

    // Collect data chunks
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    // See output with console.log here, then move after req.on('end') line
    console.log('Received data:', body);

    // When all data is received
    req.on('end', () => {
      try {
        const parsed = JSON.parse(body); // Try parsing JSON
        console.log('Received data:', parsed);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Data received', yourData: parsed }));
      } catch (err) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(4000, () => {
  console.log('Server listening on http://localhost:4000');
});
