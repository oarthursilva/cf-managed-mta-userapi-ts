const approuter = require('@sap/approuter')();

approuter.beforeRequestHandler.use('/services/userapi/currentUser', function (req, res, next) {
  if (!req.user) {
    res.statusCode = 403;
    res.end('Missing JWT Token');
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.user));
  }
});

approuter.start();