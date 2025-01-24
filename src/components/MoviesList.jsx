import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card"; // Assicurati che il componente Card sia impostato correttamente

function MoviesList() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true); // Stato per il caricamento
    const [error, setError] = useState(null); // Stato per errori di fetch

    // Funzione per recuperare i dati dei film
    function fetchMovies() {
        axios.get("http://localhost:3000/movies")
            .then((response) => {
                //console.log(response.data);
                setMovies(response.data.data);
                setLoading(false); // Disabilita il loading una volta completata la richiesta
            })
            .catch((error) => {
                console.error("Si è verificato un errore nel caricamento dei dati:", error);
                setError("errore nel recupero dei film.");
                setLoading(false); // Disabilita il loading anche in caso di errore
            });
    }

    useEffect(() => {
        fetchMovies(); // Chiamata per recuperare i dati quando il componente viene montato
    }, []); // L'array vuoto fa sì che la funzione venga chiamata solo una volta

    return (
        <div className="container mt-4">
            <h1>Bool Movies community</h1>

            {loading ? (
                <p>Loading Movies...</p> // Mostra un messaggio di caricamento mentre i dati sono in fase di recupero
            ) : error ? (
                <p>{error}</p> // Mostra l'errore se c'è stato un problema nel recupero dei dati
            ) : (
                <div className="row">
                    {movies.length === 0 ? (
                        <p>No movies available.</p> // Mostra un messaggio se non ci sono film disponibili
                    ) : (
                        movies.map((movie) => (
                            <Card key={movie.id} movie={movie} />
                        )) // Mappa i film e li passa al componente Card
                    )}
                </div>
            )}
        </div>
    );
}

export default MoviesList;