import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import MovieDetailPage from "./pages/MovieDetailPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movies">
          <Route index Component={HomePage} />
          <Route path=":id" Component={MovieDetailPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


