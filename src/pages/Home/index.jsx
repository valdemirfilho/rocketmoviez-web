import { Container } from "./styles.js"
import { Link } from "react-router-dom"
import { FiPlus } from "react-icons/fi"
import { useEffect, useState } from "react"
import { api } from "../../services/api.js"
import { useAuth } from "../../hooks/auth.hook.jsx"
import { useNavigate } from "react-router-dom"
import { Header, Summary, LoaderRainbow } from '../../components'

export function Home() {
  const { user, checkTokenExpiration, logOut } = useAuth()
  const navigate = useNavigate()

  const isTokenExpired = checkTokenExpiration()


  const [moviesNotes, setMoviesNotes] = useState({})
  const [allMoviesNotes, setAllMoviesNotes] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [hasMovies, setHasMovies] = useState(false)


  function handleMovieDetails(movie_id) {
    navigate(`/movie/${movie_id}`)
  }

  function handleChange(e) {
    const result = allMoviesNotes.filter((movie) => {
      return movie.title.toLowerCase().includes(e.target.value.toLowerCase())
    })

    setFilteredMovies(result)
  }

  useEffect(() => {
    if (isTokenExpired) {
      logOut()
      navigate("/")
    } else {
      async function fetchData() {
        const response = await api.get("/movienotes")
        const data = await response.data
        setMoviesNotes(data)
        localStorage.setItem("@rocketmoviez:movies", JSON.stringify(data))
        setAllMoviesNotes(data)
        setLoading(false)
        setHasMovies(data.length > 0)
      }

      fetchData()
      console.log("passei aqui")
    }
  }, [])

  useEffect(() => {
    setMoviesNotes(filteredMovies)
  }, [filteredMovies])

  return (
    <Container>
      <Header handleChange={handleChange} user={user} inputShow={true} />
      <main>
        <div className="title-button-wrapper">
          <h1>Meus filmes</h1>
          <Link to="/createmovie">
            <FiPlus /> Adicionar Nota
          </Link>
        </div>

        {isLoading && <LoaderRainbow />}

        {!isLoading &&
          <div className="summary-wrapper">
            {hasMovies &&
              moviesNotes.map((movieNote, index) => (
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
              ))
            }

            {!hasMovies && <span>Nenhum filme para exibir! 😢</span>}
          </div>
        }
      </main>
    </Container>
  )
}
