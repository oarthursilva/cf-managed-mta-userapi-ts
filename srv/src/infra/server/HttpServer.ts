import { createServer } from 'http';
import HTTPMiddleware from '../middlewares/http/HTTPMiddleware';

const HTTPServer = (createServerModule = createServer, httpMiddlewareModule = HTTPMiddleware()) => ({
  setup() {
    const http = httpMiddlewareModule.setup();
    return createServerModule(http);
  }
});

export default HTTPServer;