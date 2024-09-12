import expressLibrary from 'express';
import passportConfig from '../../../config/passport/PassportConfig';

import jwtRoutes from '../../../routes/jwtRoutes';
import btpRoutes from '../../../routes/btpRoutes';
import sapRoutes from '../../../routes/sapRoutes';

const HTTPMiddleware = (expressModule = expressLibrary, passportConfigModule = passportConfig) => ({
  setup() {
    const express = expressModule;
    const passport = passportConfigModule.config();

    return express()
      .use(passport.initialize())
      .use(passport.authenticate('JWT', { session: false }))
      // .use(express.json())
      // .use(express.urlencoded({ extended: false }))
      .use('/api', [jwtRoutes, btpRoutes, sapRoutes]);
  }
});

export default HTTPMiddleware;
