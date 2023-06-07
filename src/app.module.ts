import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManageProposalController } from './controller/manage-proposal.controller';
import { ManageProposalService } from './service/manage-proposal.service';
import { Proposal } from './entities/Proposal';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'PARTNER_INTEGRATION',
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
