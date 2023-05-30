import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManageProposalController } from './controller/manage-proposal.controller';
import { ManageProposalService } from './service/manage-proposal.service';
import { Proposal } from './entities/Proposal';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: 'localhost',
      port: 1521,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Proposal],
      migrations: ['../src/infra/database/migrations'],
      migrationsTableName: 'migration_table',
      synchronize: true,
    }),
  ],
  controllers: [ManageProposalController],
  providers: [ManageProposalService],
})
export class AppModule {}
