import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SendProposalService } from './services/send-proposal.service';
import { ProposalEntity } from './entities/ProposalEntity';
import { ProposalRepository } from './DAO/proposal.repository';
import { SendProposalController } from './controllers/send-proposal.controller';
import { SFTPProvider } from './utils/providers/sftp/sftp-provider';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'PARTNER_INTEGRATION',
      entities: [ProposalEntity],
      migrations: ['../src/infra/database/migrations'],
      migrationsTableName: 'migration_table',
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ProposalEntity]),
  ],
  providers: [ProposalRepository, SFTPProvider, SendProposalService],
  controllers: [SendProposalController],
})
export class AppModule {}
