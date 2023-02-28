import { Container } from "./styles.js"
import { Button } from "../../components/Button.jsx"
import { TextButton } from "../../components/TextButton.jsx"
import { Input } from "../../components/Input.jsx"
import { FiMail, FiLock } from "react-icons/fi"
import { useAuth } from "../../hooks/auth.hook.jsx"
import { useState } from "react"

import { validateEmail } from "../../utils/validateEmail.js"

export function SignIn() {
  const [email, setEmail] = useState(" ")
  const [password, setPassword] = useState(" ")

  const { signIn } = useAuth()

  function handleSignIn() {
    if (!validateEmail(email)) return alert("Preencha um e-mail válido")
    signIn({ email, password })
  }

  return (
    <Container>
      <div>
        <div className="logo-wrapper">
          <h1>RocketMoviez</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>
        <h2>Faça seu login</h2>
        <form onSubmit={handleSignIn}>
          <Input
            type="email"
            placeholder="E-mail"
            pattern="\S+@\S+\.\S+"
            icon={FiMail}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Senha"
            icon={FiLock}
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="button" title="Entrar" onClick={handleSignIn} />

          <TextButton name="Criar conta" to="/signup" />
        </form>
      </div>
      <div className="img-wrapper">

      </div>
    </Container>
  )
}