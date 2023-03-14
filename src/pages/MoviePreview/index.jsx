import { Container } from "./styles.js"
import { BsClock } from "react-icons/bs"
import { useAuth } from "../../hooks/auth.hook.jsx"
import { useState, useEffect } from "react"
import { api } from "../../services/api.js"
import { useParams, useNavigate } from "react-router-dom"
import avatarPlaceholder from "../../assets/avatar-placeholder.png"
import { FaRegEdit } from "react-icons/fa"

import { Header, TextButton, Stars, ProfilePicture } from '../../components'

export function MoviePreview() {
  const { user, checkTokenExpiration, logOut } = useAuth()
  const isTokenExpired = checkTokenExpiration()

  const params = useParams()

  const [data, setData] = useState(null)

  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  useEffect(() => {
    if (isTokenExpired) {
      logOut()
      navigate("/")
    } else {
      async function fetchData() {
        const response = await api.get(`/movienotes/${params.id}`)
        if (response.data) {
          setData(response.data)
        } else {
          navigate("/")
        }
      }

      fetchData()
    }
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
            <TextButton name="Voltar" to="/" icon />

            <div className="title-and-rating">
              <h2>{data.title}</h2>
              <Stars rating={data.rating} />
            </div>

            <div className="author-datetime">
              <ProfilePicture src={avatarUrl} size="20" alt="Valdemir" />
              <span>Por {user.name}</span>
              <BsClock />
              <span>{formatDateTime(data.created_at)}</span>
              <FaRegEdit />
              <TextButton name="editar" to={`/editmovie/${params.id}`} />
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
              <source src={`${import.meta.env.VITE_VIDEO_URL}/${data.movie_id}`} type="video/webm" preload="metadata" />
            </video>
          </div>
        </main>

      }
    </Container>
  )
}




