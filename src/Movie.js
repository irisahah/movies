function Movie({ title, overview, posterPath }) {
  const imageUrl = posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <div className="movie">
      <img src={imageUrl} className="movie-image" alt={title} />
      <div className="movie-details">
        <h2>{title || 'Unknown Title'}</h2>
        <p>{overview || 'Not available.'}</p>
      </div>
    </div>
  );
}

export default Movie;
