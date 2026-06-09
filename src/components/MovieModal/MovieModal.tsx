import css from './MovieModal.module.css';
import type { Movie } from '../../types/movie';

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://placehold.co/500x750?text=No+Image';

  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={event => event.stopPropagation()}>
        <button className={css.closeButton} type="button" onClick={onClose}>
          ×
        </button>

        <img className={css.image} src={imageUrl} alt={movie.title} />

        <div className={css.info}>
          <h2 className={css.title}>{movie.title}</h2>
          <p className={css.text}>
            Release date: {movie.release_date || 'Unknown'}
          </p>
          <p className={css.text}>Rating: {movie.vote_average.toFixed(1)}</p>
          <p className={css.overview}>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}