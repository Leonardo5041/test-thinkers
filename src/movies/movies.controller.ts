import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) { }

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  findAll() {
    return this.moviesService.findAll()
  }

  @Get('/:id/actors')
  findActorsByMovieId(@Param('id') id: number) {
    return this.moviesService.findActorsByMovie(id);
  }

  @Get('/release-year')
  findReleaseYearByMovieId(@Query() params) {
    const { start, end } = params;
    console.log(start, end);
    return this.moviesService.findMoviesByReleseYear(start, end);
  }

}
