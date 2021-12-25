import { NestFactory } from '@nestjs/core';
import { MainModule } from './mainModule';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app.enableCors();
  await app.listen(8000);
}
bootstrap();
