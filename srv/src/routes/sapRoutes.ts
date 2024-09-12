import SAPController from '../controllers/SAPController';
import AppRouter from '../infra/router';

const router = AppRouter();

router.get('/sap/userInfo', (request, response) => {
  const controller = new SAPController();
  return controller.retrieveSAPuserInfo(request, response);
});

export default router;