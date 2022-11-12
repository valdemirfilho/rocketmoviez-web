import { Container } from "./styles.js"
import { TextButton } from "../../components/TextButton.jsx"
import { Header } from "../../components/Header.jsx"
import { Input } from "../../components/Input.jsx"
import { TextArea } from "../../components/TextArea.jsx"
import { TagInput } from "../../components/TagInput.jsx"
import { Button } from "../../components/Button.jsx"
import { useState } from "react"

export function CreateMovie() {
  const [title, setTitle] = useState("")
  const [stars, setStars] = useState(0)
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  function handleAddTag() {
    if (newTag === "") return
    setTags(prevState => [...prevState, newTag] )
    setNewTag("")
  }

  function handleSubmit() {
    console.table({
      title,
      stars,
      description,
      tags
    })
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
            />

            <Input 
              type="number" 
              placeholder="Sua nota (de 0 a 5)" 
              min="0" 
              max="5" 
              pd="true" 
              onChange={(e) => setStars(Number(e.target.value))}
            />
          </div >

          <TextArea placeholder="Descrição" />

          <h3>Marcadores</h3>
          <div className="tags-wrapper">
            {
              tags.map((tag, index) => {
                return (
                  <TagInput 
                    isNew={false}
                    key={String(index)}
                    onClick={() => {}}
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
              onClick={handleSubmit}
            />
          </div>
        </form>
      </main>
    </Container>
  )
}
