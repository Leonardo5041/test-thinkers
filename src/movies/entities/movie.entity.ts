import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Actor } from './actor.entity';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  releaseYear: number;

  @ManyToMany(() => Actor, (actor) => actor.movies)
  @JoinTable({ name: 'movies_actors', joinColumn: { name: 'movie_id' }, inverseJoinColumn: { name: 'actor_id' } })
  actors: Actor[];
}
