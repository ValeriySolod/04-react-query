import css from './MovieGrid.module.css';
import MovieCard from '../MovieCard/MovieCard';
import type { Movie } from '../../types/movie';

interface MovieGridProps {
  movies: Movie[];
}

export default function MovieGrid({ movies }: MovieGridProps) {
  return (
    <ul className={css.grid}>
      {movies.map(movie => (
        <li className={css.item} key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}