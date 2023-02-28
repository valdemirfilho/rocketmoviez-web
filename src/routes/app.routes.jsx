import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { MoviePreview } from "../pages/MoviePreview"
import { Profile } from "../pages/Profile"
import { CreateMovie } from "../pages/CreateMovie"
import { EditMovie } from "../pages/EditMovie"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/createmovie" element={<CreateMovie />} />
      <Route path="/editmovie/:id" element={<EditMovie />} />
      <Route path="/movie/:id" element={<MoviePreview />} />
    </Routes>
  )
}
