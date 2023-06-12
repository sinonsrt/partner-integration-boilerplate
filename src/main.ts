import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Integração de Parceiros - Message Splitter')
    .setDescription('Insurtech - Integração de Parceiros')
    .setVersion('1.0')
    .addTag('Nest Operation Samples')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('API', app, document);

  await app.listen(3000);
}
bootstrap();
