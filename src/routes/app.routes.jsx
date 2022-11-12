import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { MoviePreview } from "../pages/MoviePreview"
import { Profile } from "../pages/Profile"
import { CreateMovie } from "../pages/CreateMovie"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/createmovie" element={<CreateMovie />} />
      <Route path="/moviepreview" element={<MoviePreview />} />
    </Routes>
  )
}
