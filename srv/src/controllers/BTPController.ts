import { Request } from '../models/RequestCore';
import { Response } from 'express';

class BTPController {

  /**
   * Retrieve user details in BTP
   * @param request 
   * @param response 
   */
  async retrieveBTPuserInfo(request: Request, response: Response) {
    response.status(200).json(request.user);
  }
}

export default BTPController;