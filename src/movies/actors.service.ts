import { Actor } from './entities/actor.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateActorDto } from './dto/create-actor.dto';

@Injectable()
export class ActorsService {
    constructor(
        @InjectRepository(Actor)
        private actorsRepository: Repository<Actor>) { }

    async create(createActorDto: CreateActorDto): Promise<Actor> {
        const actor = new Actor();
        actor.name = createActorDto.name;
        actor.gender = createActorDto.gender;
        return this.actorsRepository.save(actor);
    }

    async findAll(): Promise<Actor[]> {
        return this.actorsRepository.find();
    }
}