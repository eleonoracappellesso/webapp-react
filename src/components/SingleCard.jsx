export default function SingleCard({ movie }) {
    const imgPath = "http://localhost:3000/images/" + movie.image;
    return (
        <div className="container mt-5">
            <h3 className="fw-bold my-2">{movie.title}</h3>
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={`${imgPath}`}
                        alt={movie.title}
                        className="singleCard"
                    />
                </div>

                <div className="col-md-8 d-flex flex-column justify-content-center">
                    <p className="mb-1">
                        <strong>Regista:</strong> {movie.director}
                    </p>
                    <p className="mb-1">
                        <strong>Anno:</strong> {movie.release_year}
                    </p>
                    <p className="mb-1">
                        <strong>Genere:</strong> {movie.genre}
                    </p>
                    <p className="mt-3">{movie.abstract}</p>
                </div>
            </div>
        </div>
    );
}
