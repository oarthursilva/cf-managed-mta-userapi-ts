import BTPController from '../controllers/BTPController';
import AppRouter from '../infra/router';

const router = AppRouter();

router.get('/userInfo', (request, response) => {
  const controller = new BTPController();
  return controller.retrieveBTPuserInfo(request, response);
});

export default router;