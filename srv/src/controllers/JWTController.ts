import { Request } from '../models/RequestCore';
import { Response } from 'express';
import jwtDecode from '../infra/jwt';

class JWTController {

  /**
   * Retrieve the JWT token
   * @param request 
   * @param response 
   */
  async retrieveJWT(request: Request, response: Response) {
    response.header('Content-Type', 'application/json');
    response.send(JSON.stringify({
      JWT: this.getJWT(request.headers.authorization)
    }));
  }

  /**
   * Decode the JWT token, and send it back to the caller
   * @param request 
   * @param response 
   */
  async retrieveJWTdecode(request: Request, response: Response) {
    if (request.user) {
      const jwt = this.getJWT(request.headers.authorization);
      response.status(200).json(jwtDecode(jwt));
    } else {
      response.status(403).end('Missing JWT Token')
    }
  }

  getJWT(authorization: string) {
    return /^Bearer (.*)$/.exec(authorization)[1];
  }
}

export default JWTController;