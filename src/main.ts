import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
//import { HttpExceptionFilter } from '@algoan/http-exception-filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalFilters();

  app.enableCors({
    //origin: "http://localhost:4200/",
    origin: true,
    methods: 'GET,POST,PUT,DELETE,OPTIONS,PATCH,UPDATE',
    credentials: true,
  });

  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT || 3000);
}

bootstrap();

if (process.env.NODE_ENV === 'development') {
  (async () => {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
      .setTitle('Metastore API')
      .setDescription('Metastore API documentation')
      .setVersion('0.5')
      .addTag('Metastore')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3001);
  })();
}
