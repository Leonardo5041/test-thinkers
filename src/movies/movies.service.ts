import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Actor } from './entities/actor.entity';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
    @InjectRepository(Actor)
    private actorsRepository: Repository<Actor>,
  ) { }

  async create(createMovieDto: CreateMovieDto) {
    const movie = new Movie();
    movie.title = createMovieDto.title;
    movie.releaseYear = createMovieDto.releaseYear;
    movie.actors = await this.actorsRepository.findByIds(createMovieDto.actors);
    return await this.moviesRepository.save(movie);
  }

  async findAll() {
    /*
      TODO: Crear un nuevo endpoint que regrese una array de todas los títulos de 
      películas en orden ascendente por la propiedad año de lanzamiento.  
    */
    return this.moviesRepository.find({ select: ['title'], order: { releaseYear: 'ASC' } });
  }

  async findActorsByMovie(id: number) {
    /*
     TODO: Crea un nuevo endpoint que reciba como parámetro el id de una película
     y regresa un array de los nombres de los actores que aparecen en esa película 
     en orden alfabético.   
    */
    const movie = await this.moviesRepository.find({ where: { id }, relations: ['actors'] });
    return movie[0].actors.map(actor => actor.name).sort();
  }

  async findMoviesByReleseYear(start: number, end: number) {
    /*
      TODO: Crea un nuevo endpoint que reciba como query un intervalo de años y regrese
      toda la información de las películas que su año de lanzamiento se encuentre
      dentro de ese intervalo, ordenadas por año de manera descendente.
    */
    return this.moviesRepository.find({ where: { releaseYear: Between(start, end) }, order: { releaseYear: 'DESC' } });
  }
}
