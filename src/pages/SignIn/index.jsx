import { Container } from "./styles.js";
import { FiMail, FiLock } from "react-icons/fi";
import { useAuth } from "../../hooks/auth.hook.jsx";
import { useState, useEffect } from "react";
import { validateEmail } from "../../utils/validateEmail.js";
import { api } from "../../services/api.js";

import { Button, TextButton, Input, Loading } from "../../components";

export function SignIn() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();

  useEffect(() => {
    console.log("wake up backend");
    async function fetchData() {
      const response = await api.get("/healthz");
      const data = await response.data;
      console.log(data);
    }
    fetchData();
  }, []);

  async function handleSignIn(e) {
    e.preventDefault();
    if (!validateEmail(email)) return alert("Preencha um e-mail válido");

    setIsLoading(true);
    try {
      await signIn({ email, password });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <div>
        <div className="logo-wrapper">
          <h1>RocketMoviez</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>

        <h2>Faça seu login</h2>

        <form id="form-signin" onSubmit={handleSignIn}>
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

          <Button type="submit" form="form-signin" title="Entrar" onClick={handleSignIn} />

          <TextButton name="Criar conta" to="/signup" />
        </form>
      </div>

      <div className="img-wrapper"></div>
    </Container>
  );
}
