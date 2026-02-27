import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow Next.js frontend to access the API
  app.enableCors({
    origin: 'http://localhost:3000', 
  });

  // Run API on port 3001
  await app.listen(process.env.PORT ?? 3001);
  console.log(`🚀 API running on: http://localhost:3001`);
}
bootstrap();
