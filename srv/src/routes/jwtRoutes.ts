import JWTController from '../controllers/JWTController';
import AppRouter from '../infra/router';

const router = AppRouter();

router.get('/jwt', (request, response) => {
  const controller = new JWTController();
  return controller.retrieveJWT(request, response);
})

router.get('/jwtdecode', (request, response) => {
  const controller = new JWTController();
  return controller.retrieveJWTdecode(request, response);
})

export default router;