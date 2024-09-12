import { Request } from '../models/RequestCore';
import { Response } from 'express';
import { executeHttpRequest } from '@sap-cloud-sdk/http-client';

class SAPController {

  /**
   * Retrieve user details in SAP
   * @param request 
   * @param response 
   */
  async retrieveSAPuserInfo(request: Request, response: Response) {
    try {
      const resultServiceCollection = await executeHttpRequest(
        this.getDestination(request.headers.authorization),
        {
          method: 'get',
          url: '/sap/opu/odata/IWFND/USERSERVICE/UserCollection?$format=json'
        }
      );
      response.send(resultServiceCollection.data);

    } catch (error) {
      let message = error.message;
      if (error.rootCause && error.rootCause.message) {
        message += ' Root Cause: ' + error.rootCause.message;
      }
      response.send(message);
    }
  }

  getDestination(authorization: string) {
    return {
      destinationName: process.env.DESTINATION || 'SAP_ABAP_BACKEND',
      jwt: this.getJWT(authorization),
    };
  }

  getJWT(authorization: string) {
    return /^Bearer (.*)$/.exec(authorization)[1];
  }
}

export default SAPController;