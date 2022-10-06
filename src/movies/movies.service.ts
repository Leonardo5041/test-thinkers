import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MovieActors } from './entities/movieActors.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
    @InjectRepository(MovieActors)
    private movieActorsRepository: Repository<MovieActors>,
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    return await this.moviesRepository.save(createMovieDto);
  }

  async findAll() {
    /*
      TODO: Crear un nuevo endpoint que regrese una array de todas los títulos de 
      películas en orden ascendente por la propiedad año de lanzamiento.  
    */
  }

  async findActorsByMovie() {
    /*
     TODO: Crea un nuevo endpoint que reciba como parámetro el id de una película
     y regresa un array de los nombres de los actores que aparecen en esa película 
     en orden alfabético.   
    */
  }

  async findMoviesByReleseYear() {
    /*
      TODO: Crea un nuevo endpoint que reciba como query un intervalo de años y regrese
      toda la información de las películas que su año de lanzamiento se encuentre
      dentro de ese intervalo, ordenadas por año de manera descendente.
    */
  }
}
