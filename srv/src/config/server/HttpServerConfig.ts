import HTTPServer from '../../infra/server/HttpServer';

const httpServerConfig = () => ({
  config() {
    const HOST = process.env.HOST || '0.0.0.0';
    const PORT = process.env.PORT || 4004;

    HTTPServer()
      .setup()
      .listen(PORT as number, HOST as string, () => {
        console.log(`🔥 Server running on port ${PORT}`);

        const memoryConsumption = process.memoryUsage().heapUsed / 1024 / 1024;
        const memoryUsed = Math.round(memoryConsumption * 100) / 100;
        console.log(`The script uses approximately ${memoryUsed} MB`);
      })
      .on('error', (error) => console.error(error.stack))
  }
});

export default httpServerConfig;