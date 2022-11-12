import { Container } from "./styles.js"
import { Button } from "../../components/Button.jsx"
import { TextButton } from "../../components/TextButton.jsx"
import { Input } from "../../components/Input.jsx"
import { FiUser, FiMail, FiLock } from "react-icons/fi"
import { useState } from "react"
import { api } from "../../services/api.js"
import { useNavigate } from "react-router-dom"

export function SignUp() {
  const [name, setName] = useState(" ")
  const [email, setEmail] = useState(" ")
  const [password, setPassword] = useState(" ")

  const navigate = useNavigate()
  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos")
    }

    try {
      await api.post("/users", { name, email, password })
      alert("Usuário cadastrado com sucesso!")
      navigate("/")
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar")
      }
    }
  }

  return (
    <Container>
      <div>
        <div className="logo-wrapper">
          <h1>RocketMoviez</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>
        <h2>Crie sua conta</h2>
        <form>
          <Input 
            type="text" 
            placeholder="Nome" 
            icon={FiUser}
            onChange={e => setName(e.target.value)}
          />

          <Input 
            type="email" 
            placeholder="E-mail" 
            icon={FiMail}
            onChange={e => setEmail(e.target.value)}
          />

          <Input 
            type="password" 
            placeholder="Senha" 
            icon={FiLock}
            autoComplete="off"
            onChange={e => setPassword(e.target.value)}
          />

          <Button 
            title="Cadastrar"
            onClick={handleSignUp}
          />

          <TextButton name="Voltar para o login" icon to="/" />
        </form>
      </div>
      <div className="img-wrapper">

      </div>
    </Container>
  )
}