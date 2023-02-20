import { Container } from "./styles.js"
import { Header } from "../../components/Header.jsx"
import { TextButton } from "../../components/TextButton.jsx"
import { Stars } from "../../components/Stars.jsx"
import { BsClock } from "react-icons/bs"
import { ProfilePicture } from "../../components/ProfilePicture.jsx"
import { useAuth } from "../../hooks/auth.hook.jsx"
import { useState, useEffect } from "react"
import { api } from "../../services/api.js"
import { useParams } from "react-router-dom"

export function MoviePreview() {
  const { user } = useAuth()
  const params = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/movienotes/${params.id}`)
      setData(response.data)
    }

    fetchData()
  }, [])

  function formatDateTime(dateString) {
    const [date, time] = dateString.split("T")
    const [year, month, day] = date.split("-")
    const [hours, minutes, _] = time.split(":")
    return `${day}/${month}/${year} às ${hours}:${minutes}`
  }

  return (
    <Container>
      <Header user={user} />
      {
        data &&
        <main>
          <div className="wrapper">
            <TextButton name="Voltar" icon to="/" />
            <div className="title-and-rating">
              <h2>{data.title}</h2>
              <Stars rating={data.rating} />
            </div>
            <div className="author-datetime">
              <ProfilePicture src="https://github.com/valdemirfilho.png" size="20" alt="Valdemir" />
              <span>Por {user.name}</span>
              <BsClock />
              <span>{formatDateTime(data.created_at)}</span>
            </div>

            <div className="tags">
              {
                data.movie_tags.map((tag, index) => {
                  return <span key={index}>{tag.name}</span>
                })
              }
            </div>

            <div className="description">
              <p>{data.description}</p>
            </div>

            <video autoPlay muted loop>
              <source src={`https://rocketmoviez-api.onrender.com/video/${data.movie_id}`} type="video/webm" preload="metadata" />
            </video>
          </div>
        </main>

      }
    </Container>
  )
}




