import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocenteController } from './docente/docente.controller';
import { AsignaturaController } from './asignatura/asignatura.controller';

@Module({
  imports: [],
  controllers: [AppController, DocenteController, AsignaturaController],
  providers: [AppService],
})
export class AppModule {}
