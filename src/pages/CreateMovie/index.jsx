import { Container } from "./styles.js"
import { TextButton } from "../../components/TextButton.jsx"
import { Header } from "../../components/Header.jsx"
import { Input } from "../../components/Input.jsx"
import { TextArea } from "../../components/TextArea.jsx"
import { TagInput } from "../../components/TagInput.jsx"
import { Button } from "../../components/Button.jsx"
import { useState } from "react"
import { api } from "../../services/api.js"
import { useNavigate } from "react-router-dom"

export function CreateMovie() {
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  function handleAddTag() {
    if (newTag === "") {
      alert("Preencha o valor do marcador!")
      return
    }

    setTags(prevState => [...prevState, newTag] )
    setNewTag("")
  }

  function handleRemoveTag(tag) {
    setTags(prevState => prevState.filter(item => item !== tag))
  }

  async function handleNewMovie() {
    const ratingValues = [0, 1, 2, 3, 4, 5]

    if (!title) {
      alert("Título não pode ser vazio")
      return
    }

    if (!ratingValues.includes(Number(rating))) {
      alert("Nota não pode ser vazio")
      return
    }

    await api.post("/movienotes", {
      title,
      rating,
      description,
      tags
    })

    alert("Filme adicionado com sucesso!")
    navigate("/")
  }

  return (
    <Container>
      <Header />
      <main>
        <TextButton name="Voltar" icon to="/" />
        <form>
          <h2>Novo Filme</h2>
          <div className="col-2">
            <Input 
              type="text" 
              placeholder="Título" 
              pd="true"
              onChange={(e) => setTitle(e.target.value)}
              required
              autoFocus
            />

            <Input 
              type="number" 
              placeholder="Sua nota (de 0 a 5)" 
              min="0" 
              max="5" 
              pd="true" 
              onChange={(e) => setRating(Number(e.target.value))}
              required
            />
          </div >

          <TextArea 
            placeholder="Descrição"
            onChange={(e) => setDescription(e.target.value)}
          />

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
          <div className="buttons-wrapper">
            <Button className="button-del" title="Excluir" />
            <Button 
              title="Salvar alterações"
              onClick={handleNewMovie}
            />
          </div>
        </form>
      </main>
    </Container>
  )
}
