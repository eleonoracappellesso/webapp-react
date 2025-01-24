import { Link } from "react-router-dom";

export default function Card({ movie }) {
    const imgPath = "http://localhost:3000/images/" + movie.image;
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img
                    src={`${imgPath}`}
                    className="card-img-top"
                    alt={movie.title}
                />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">
                        <strong>By {movie.director}</strong>
                    </p>
                    <p className="card-text">
                        {movie.abstract}
                    </p>

                    <Link to={`/movies/${movie.id}`} className="btn btn-warning" style={{ color: "#181818" }}>
                        Dettagli
                    </Link>
                </div>
            </div>
        </div>
    );
}