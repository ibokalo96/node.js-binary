const responseMiddleware = (req, res, next) => {
   // TODO: Implement middleware that returns result of the query
    next();
    console.log(req.body)
    next();
}

exports.responseMiddleware = responseMiddleware;