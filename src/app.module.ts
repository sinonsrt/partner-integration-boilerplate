import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManageProposalController } from './controller/manage-proposal.controller';
import { ManageProposalService } from './service/manage-proposal.service';
import { ProposalEntity } from './entities/ProposalEntity';
import { ProposalRepository } from './DAO/proposal.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'PARTNER_INTEGRATION',
      entities: [ProposalEntity],
      migrations: ['../src/infra/database/migrations'],
      migrationsTableName: 'migration_table',
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ProposalEntity]),
  ],
  controllers: [ManageProposalController],
  providers: [ProposalRepository, ManageProposalService],
})
export class AppModule {}
