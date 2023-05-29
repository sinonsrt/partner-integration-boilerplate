import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManageProposalController } from './controller/manage-proposal.controller';
import { ManageProposalService } from './service/manage-proposal.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: 'localhost',
      port: 1521,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [ManageProposalController],
  providers: [ManageProposalService],
})
export class AppModule {}
