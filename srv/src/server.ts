import 'reflect-metadata';
import httpServerConfig from "./config/server/HttpServerConfig";

const server = (httpServerConfigModule = httpServerConfig()) => {
  return {
    start() {
      httpServerConfigModule.config();
    }
  }
}

// start server
server().start();