export default function SingleCard({ movie }) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={movie.image}
                        alt={movie.title}
                    />
                </div>

                <div className="col-md-8 d-flex flex-column justify-content-center">
                    {/* <h3 className="fw-bold">{movie.title}</h3> */}
                    <p className="mb-1">
                        <strong>Regista:</strong> {movie.director}
                    </p>
                    <p className="mb-1">
                        <strong>Anno:</strong> {movie.release_year}
                    </p>
                    <p className="mb-1">
                        <strong>Genere:</strong> {movie.genre}
                    </p>
                    <p className="mt-3 fst-italic">{movie.abstract}</p>
                </div>
            </div>
        </div>
    );
}
