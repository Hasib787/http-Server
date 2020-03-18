let http = require('http');

http.createServer(onRequest).listen(3000);

function onRequest(client_request, client_res) {
  console.log('serve: ' + client_request.url);

  let options = {
    hostname: 'www.google.com',
    port: 80,
    path: client_request.url,
    method: client_request.method,
    headers: client_request.headers
  };

  let proxy = http.request(options, function (res) {
    client_res.writeHead(res.statusCode, res.headers)
    res.pipe(client_res, {
      end: true
    });
  });

  client_req.pipe(proxy, {
    end: true
  });
}