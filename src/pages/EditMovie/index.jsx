import { Container } from "./styles.js"
import { useState, useEffect, useContext } from "react"
import { api } from "../../services/api.js"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth.hook.jsx"
import { useParams } from "react-router-dom"

import { TextButton, Header, Input, TextArea, TagInput, Button, InputStars } from '../../components'

export function EditMovie() {
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const [rating, setRating] = useState("")

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

  function handleRating(e) {
    setRating(Number(e.target.value))
  }

  // useEffect(() => {
  //   console.log(rating)
  // }, [rating])

  return (
    <Container>
      <Header user={user} />
      <main>
        <TextButton name="Voltar" icon onClick={() => history.back()} />
        <form id="form-edit-movie">
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

                <div>
                  <p>Sua nota:</p>
                  <InputStars handleRating={handleRating} rating={rating} />
                </div>
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
            {tags.map((tag, index) => (
              <TagInput
                isNew={false}
                key={String(index)}
                onClick={() => handleRemoveTag(tag)}
                value={tag}
                size={String(tag.length)}
              />
            ))}

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
          <Button type="submit" form="form-edit-movie" title="Salvar alterações" onClick={handleUpdateMovie}
          />
        </div>
      </main>
    </Container>
  )
}
