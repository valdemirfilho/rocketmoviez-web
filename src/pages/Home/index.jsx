import { Container } from "./styles.js"
import { Header } from "../../components/Header.jsx"
import { Summary } from "../../components/Summary.jsx"
import { Link } from "react-router-dom"
import { FiPlus } from "react-icons/fi"
import { useEffect, useState } from "react"
import { api } from "../../services/api.js"
import { useAuth } from "../../hooks/auth.hook.jsx"
import { useNavigate } from "react-router-dom"

export function Home() {
  const [moviesNotes, setMoviesNotes] = useState([])
  const [allMoviesNotes, setAllMoviesNotes] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])

  const { user } = useAuth()

  const navigate = useNavigate()

  function handleMovieDetails(movie_id) {
    navigate(`/movie/${movie_id}`)
  }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/movienotes")
      const data = await response.data
      setMoviesNotes(data)
      setAllMoviesNotes(data)
    }

    fetchData()
    // console.log(moviesNotes)
  }, [])

  useEffect(() => {
    setMoviesNotes(filteredMovies)
  }, [filteredMovies])

  function handleChange(e) {
    const result = allMoviesNotes.filter((movie) => {
      return movie.title.toLowerCase().includes(e.target.value)
    })

    setFilteredMovies(result)
  }


  return (
    <Container>
      <Header onChange={handleChange} user={user} inputShow={true} />
      <main>
        <div className="title-button-wrapper">
          <h1>Meus filmes</h1>
          <Link to="/createmovie">
            <FiPlus /> Adicionar Nota
          </Link>
        </div>

        <div className="summary-wrapper">
          {
            moviesNotes.length > 0
              ? moviesNotes.map((movieNote, index) => {
                return (
                  <Summary
                    key={index}
                    title={movieNote.title}
                    rating={movieNote.rating}
                    tags={movieNote.tags}
                    cover_url={movieNote.cover_url}
                    handleMovieDetails={() => handleMovieDetails(movieNote.id)}
                  >
                    {movieNote.description}
                  </Summary>
                )
              })
              : <span>Nenhum filme para exibir! 😢</span>
          }
        </div>
      </main>
    </Container>
  )
}
