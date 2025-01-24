import MoviesList from "../components/MoviesList"
import FooterComponent from "../components/FooterComponent"

export default function HomePage() {
    return (
        <>
            <main>
                <MoviesList />
            </main>
            <FooterComponent />
        </>
    )
}