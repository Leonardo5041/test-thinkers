import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Actor } from './entities/actor.entity';
import { ActorsController } from './actors.controller';
import { ActorsService } from './actors.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie, Actor]),
  ],
  controllers: [MoviesController, ActorsController],
  providers: [MoviesService, ActorsService],
})
export class MoviesModule { }
