import { Container } from "./styles.js"
import { TextButton } from "../../components/TextButton.jsx"
import { Header } from "../../components/Header.jsx"
import { InputWithSuggests } from "../../components/InputWithSuggests.jsx"
import { TextArea } from "../../components/TextArea.jsx"
import { TagInput } from "../../components/TagInput.jsx"
import { Button } from "../../components/Button.jsx"
import { useState, useEffect } from "react"
import { api } from "../../services/api.js"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth.hook.jsx"

import { InputStars } from "../../components/InputStars.jsx"

import { data } from "../../services/marvel.json"

export function CreateMovie() {
  const navigate = useNavigate()

  const mcuMoviesTitles = data.map(movie => movie.title.split('|')[0].trim())

  const [moviesNotes, setMoviesNotes] = useState([])

  const [title, setTitle] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const [results, setResults] = useState([])
  const [cover, setCover] = useState("")
  const [movieId, setMovieId] = useState(0)
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const { user } = useAuth()

  function handleClick(item) {
    setTitle(item)
    setShowDropdown(false)
  }

  function handleDescription(item) {
    setDescription(item)
  }

  function handleTags(item) {
    setTags(item)
  }

  function handleCover(item) {
    setCover(item)
  }

  function handleMovieId(item) {
    setMovieId(item)
  }

  function handleChange(e) {
    setTitle(e.target.value)
    e.target.value ? setShowDropdown(true) : setShowDropdown(false)

    const results = data.filter(item => {
      const searchTerm = e.target.value.toLowerCase()
      const fullMovieTitle = item.title.toLowerCase()
      return fullMovieTitle.includes(searchTerm)
    })

    setResults(results)
  }

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
    const ratingValues = [1, 2, 3, 4, 5]

    if (!title) {
      alert("Título não pode ser vazio!")
      return
    }

    if (!ratingValues.includes(rating)) {
      alert("Nota deve ser um valor entre 1 e 5.")
      return
    }

    if (!mcuMoviesTitles.includes(title)) {
      alert("Escolha um filme da lista!")
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

  function handleRating(e) {
    setRating(Number(e.target.value))
  }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/movienotes")
      const data = await response.data
      setMoviesNotes(data)
    }

    fetchData()
  }, [])

  useEffect(() => {
    console.log(moviesNotes)
  }, [moviesNotes])

  // useEffect(() => {
  //   console.log(rating)
  // }, [rating])

  // useEffect(() => {
  //   console.log(mcuMoviesTitles)
  //   console.log(title)
  //   console.log(mcuMoviesTitles.includes(title))
  // }, [title])

  return (
    <Container>
      <Header user={user} />
      <main>
        <TextButton name="Voltar" icon to="/" />
        <form>
          <h2>Novo Filme</h2>
          <div className="form-container">
            <div className="form-container-inputs">
              <div className="col-2">
                <InputWithSuggests
                  type="text"
                  placeholder="Título"
                  pd="true"
                  onChange={handleChange}
                  onFocus={e => e.target.select()}
                  value={title}
                  showDropdown={showDropdown}
                  results={results}
                  handleClick={handleClick}
                  handleDescription={handleDescription}
                  handleTags={handleTags}
                  handleCover={handleCover}
                  handleMovieId={handleMovieId}
                  required
                  autoFocus
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
            <div className="wrapper-image">
              {cover &&
                <img src={cover} width={165} />
              }
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
          <Button
            title="Salvar"
            onClick={handleNewMovie}
          />
        </div>
      </main>
    </Container>
  )
}
