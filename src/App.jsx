import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import MovieDetailPage from "./pages/MovieDetailPage"
import DefaultLayout from "./layout/DefaultLayout"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/movies">
            <Route index Component={HomePage} />
            <Route path=":id" Component={MovieDetailPage} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


