function routeNotFound(req, res, next) {
  const error = new Error(`${req.originalUrl} route not found!`);
  res.status(404);
  next(error);
}

function errorHandler(error, req, res, next) {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.send({
    message: error.message,
  });
}

module.exports = { routeNotFound, errorHandler };
