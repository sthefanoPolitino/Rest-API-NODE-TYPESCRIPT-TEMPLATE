import { Request, Response, NextFunction } from 'express';

/** Custom middleware to log each incoming request */
const loguearRequest = (req: Request, res: Response, next: NextFunction) => {
  console.log(
    `Incoming request to path ${JSON.stringify(
      req.baseUrl + req.path
    )} from IP ${req.ip} with headers ${JSON.stringify(req.headers)}, type: ${
      req.method
    } and body: ${JSON.stringify(req.body)}`
  );
  return next();
};

export { loguearRequest };
