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

  async listByPartner(partner: string): Promise<ProposalEntity[]> {
    const allProposals = await this.proposalRepository.find({
      where: {
        PARCEIRO: partner,
      },
    });

    return allProposals;
  }
}
