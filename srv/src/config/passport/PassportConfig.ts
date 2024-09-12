import passport from '../../infra/passport'

import xsenv from '../../infra/sap/xsenv';
import xssec from '../../infra/sap/xssec';

const passportConfig = () => ({
  config() {
    const { JWTStrategy } = xssec.v3;
    const services = xsenv.getServices();
    return passport().use(new JWTStrategy(services.xsuaa, true));
  }
});

export default passportConfig();