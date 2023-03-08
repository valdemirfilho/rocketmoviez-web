import { Container } from "./styles.js"
import { TextButton } from "../../components/TextButton.jsx"
import { Header } from "../../components/Header.jsx"
import { Input } from "../../components/Input.jsx"
import { TextArea } from "../../components/TextArea.jsx"
import { TagInput } from "../../components/TagInput.jsx"
import { Button } from "../../components/Button.jsx"
import { useState, useEffect, useRef } from "react"
import { api } from "../../services/api.js"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth.hook.jsx"
import { useParams } from "react-router-dom"


// import { data } from "../../services/marvel.json"

export function EditMovie() {
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const [data, setData] = useState({})
  const [rating, setRating] = useState("")

  const { user } = useAuth()
  const params = useParams()

  const inputRating = useRef(null)

  function handleAddTag() {
    if (newTag === "") {
      alert("Preencha o valor do marcador!")
      return
    }

    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(tag) {
    setTags(prevState => prevState.filter(item => item !== tag))
  }

  async function handleUpdateMovie(e) {
    e.preventDefault()
    const ratingValues = [0, 1, 2, 3, 4, 5]

    if (!ratingValues.includes(Number(rating))) {
      alert("Nota não pode ser vazia!")
      return
    }

    await api.patch(`/movienotes/${params.id}`, {
      title,
      rating,
      description,
      tags
    })

    alert(`Filme ${title} atualizado!`)
    navigate(`/movie/${params.id}`)
  }

  async function handleDeleteMovie() {
    const confirmInput = confirm(`Deseja excluir o filme ${title}?`)

    if (confirmInput) {
      await api.delete(`/movienotes/${params.id}`)
      navigate("/")
    } else {
      return
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/movienotes/${params.id}`)

      if (!response.data) {
        return navigate("/")
      }

      const { title, description, rating, movie_tags } = response.data
      setDescription(description)
      setTitle(title)
      setRating(rating)

      const arrayTagsNames = movie_tags.map(tag => tag.name)
      setTags(arrayTagsNames)
    }

    fetchData()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRating.current.focus()
    }, 500)
    return () => clearTimeout(timer)
  }, [rating])

  return (
    <Container>
      <Header user={user} />
      <main>
        <TextButton name="Voltar" icon onClick={() => history.back()} />
        <form>
          <h2>Editar Filme</h2>
          <div className="form-container">
            <div className="form-container-inputs">
              <div className="col-2">
                <Input
                  type="text"
                  pd="true"
                  value={title}
                  disabled
                />

                <Input
                  type="number"
                  value={rating}
                  placeholder="Sua nota (de 0 a 5)"
                  innerRef={inputRating}
                  min="0"
                  max="5"
                  pd="true"
                  onChange={(e) => setRating(e.target.value)}
                  onFocus={e => e.target.select()}
                  required
                />
              </div >

              <TextArea
                placeholder="Descrição"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>
          </div>

          <h3>Marcadores</h3>
          <div className="tags-wrapper">
            {
              tags.map((tag, index) => {
                return (
                  <TagInput
                    isNew={false}
                    key={String(index)}
                    onClick={() => handleRemoveTag(tag)}
                    value={tag}
                    size={String(tag.length)}
                  />
                )
              })
            }

            <TagInput
              isNew={true}
              placeholder="Novo marcador"
              onClick={handleAddTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyPress={(e) => { if (e.key === "Enter") handleAddTag() }}
              value={newTag}
              size="12"
            />

          </div>
        </form>

        <div className="buttons-wrapper">
          <Button className="button-del" title="Excluir" onClick={handleDeleteMovie} />
          <Button
            title="Salvar alterações"
            onClick={handleUpdateMovie}
          />
        </div>
      </main>
    </Container>
  )
}
