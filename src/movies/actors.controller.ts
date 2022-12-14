import { Body, Controller, Get, Post } from "@nestjs/common";
import { ActorsService } from "./actors.service";
import { CreateActorDto } from "./dto/create-actor.dto";

@Controller('actors')
export class ActorsController {
    constructor(private readonly actorsService: ActorsService) { }

    @Post()
    create(@Body() createActorDto: CreateActorDto) {
        return this.actorsService.create(createActorDto);
    }

    @Get()
    findAll() {
        return this.actorsService.findAll();
    }

}