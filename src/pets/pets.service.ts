import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { Repository } from 'typeorm';
import { Pets } from '@gberdejo/demo-galicarlib';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pets)
    private readonly petRepository: Repository<Pets>,
  ) {}

  async create(createPetDto: CreatePetDto) {
    return await this.petRepository.save(createPetDto);
  }

  findAll() {
    return this.petRepository.find();
  }
}
