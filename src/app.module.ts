import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManageProposalController } from './controller/manage-proposal.controller';
import { ManageProposalService } from './service/manage-proposal.service';
import { ProposalEntity } from './entities/ProposalEntity';
import { ProposalRepository } from './DAO/proposal.repository';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
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
