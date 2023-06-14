import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SendProposalService } from './service/send-proposal.service';
import { ProposalEntity } from './entities/ProposalEntity';
import { ScheduleModule } from '@nestjs/schedule';
import { ProposalRepository } from './DAO/proposal.repository';

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
    ScheduleModule.forRoot(),
  ],
  providers: [ProposalRepository, SendProposalService],
})
export class AppModule {}
