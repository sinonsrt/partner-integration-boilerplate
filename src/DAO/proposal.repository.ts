import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProposalEntity } from 'src/entities/ProposalEntity';
import { Repository } from 'typeorm';

@Injectable()
export class ProposalRepository {
  constructor(
    @InjectRepository(ProposalEntity)
    private proposalRepository: Repository<ProposalEntity>,
  ) {}

  async create(entity: ProposalEntity) {
    const proposal = new ProposalEntity(entity);

    await this.proposalRepository.save(proposal);
  }
}
