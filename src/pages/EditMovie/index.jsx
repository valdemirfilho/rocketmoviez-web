import { Container } from "./styles.js"
import { TextButton } from "../../components/TextButton.jsx"
import { Header } from "../../components/Header.jsx"
import { Input } from "../../components/Input.jsx"
import { TextArea } from "../../components/TextArea.jsx"
import { TagInput } from "../../components/TagInput.jsx"
import { Button } from "../../components/Button.jsx"
import { useLayoutEffect, useState, useEffect } from "react"
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
  const [rating, setRating] = useState(-1)

  const { user } = useAuth()
  const params = useParams()

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

  async function handleNewMovie(e) {
    e.preventDefault()
    const ratingValues = [0, 1, 2, 3, 4, 5]

    if (!title) {
      alert("Título não pode ser vazio!")
      return
    }

    if (!ratingValues.includes(rating)) {
      alert("Nota não pode ser vazia!")
      return
    }

    await api.post("/movienotes", {
      title,
      rating,
      description,
      tags,
      cover_url: cover,
      movie_id: movieId
    })

    alert("Filme adicionado com sucesso!")
    navigate("/")
  }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/movienotes/${params.id}`)
      console.log('r', response.data)
      const { title, description, rating, movie_tags } = response.data
      setData(response.data)
      setTags(movie_tags)
      setDescription(description)
      setTitle(title)
      setRating(rating)
    }

    fetchData()
  }, [])

  useEffect(() => {
    console.log('rate', rating)
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
                  min="0"
                  max="5"
                  pd="true"
                  onChange={(e) => setRating(Number(e.target.value))}
                  onFocus={e => e.target.select()}
                  required
                  autoFocus
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
                    value={tag.name}
                    size={String(tag.name.length)}
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
          <Button className="button-del" title="Excluir" />
          <Button
            title="Salvar alterações"
            onClick={handleNewMovie}
          />
        </div>
      </main>
    </Container>
  )
}
