import { Container } from "./styles.js"
import { Header } from "../../components/Header.jsx"
import { Summary } from "../../components/Summary.jsx"
import { Link } from "react-router-dom"
import { FiPlus } from "react-icons/fi"
import { useEffect, useState } from "react"
import { api } from "../../services/api.js"

export function Home() {
  const [moviesNotes, setMoviesNotes] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/movienotes")
      const data = response.data
      setMoviesNotes(data)
    }

    fetchData()
    // console.log(moviesNotes)
  }, []) 

  return (
    <Container>
      <Header />
      <main>
        <div className="title-button-wrapper">
          <h1>Meus filmes</h1>
          <Link to="/createmovie">
            <FiPlus />
            Adicionar filme
          </Link>
        </div>

        <div className="summary-wrapper">
        {
          moviesNotes.length > 0 ?
          moviesNotes.map((movieNote, index) => {
            return (
              <Summary 
                key={index}
                title={movieNote.title} 
                rating={movieNote.rating}
                tags={movieNote.tags}
              >
                {movieNote.description}
              </Summary>
            )
          }) : <span>Nenhum filme adicionado! 😢</span> 
        }
        </div>
      </main>
    </Container>
  )
}
