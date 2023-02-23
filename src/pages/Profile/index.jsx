import { Container } from "./styles.js"
import { TextButton } from "../../components/TextButton.jsx"
import { Input } from "../../components/Input.jsx"
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Button } from "../../components/Button.jsx"
import { ProfilePicture } from "../../components/ProfilePicture.jsx"
import { useState } from "react"
import { useAuth } from "../../hooks/auth.hook.jsx"

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [avatar, setAvatar] = useState(user.avatar)

  async function handleUpdate(e) {
    e.preventDefault()

    const user = {
      name,
      email,
      new_password: newPassword,
      old_password: oldPassword,
      avatar
    }

    await updateProfile({ user })
  }

  return (
    <Container>
      <header>
        <div>
          <TextButton
            name="Voltar"
            icon
            to="/"
            onClick={() => history.back()}
          />
        </div>
      </header>

      <form>
        <div className="avatar-wrapper">
          <ProfilePicture
            src={`http://localhost:5000/files/${user.avatar}`}
            size="180"
            alt={user.name}
          />

          <label htmlfrom="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </div>

        <Input
          type="text"
          placeholder="Nome"
          icon={FiUser}
          value={name}
          autoComplete="name"
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="email"
          placeholder="E-mail"
          icon={FiMail}
          value={email}
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Senha atual"
          icon={FiLock}
          value={oldPassword}
          autoComplete="current-password"
          onChange={(e) => setOldPassword(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Nova senha"
          icon={FiLock}
          value={newPassword}
          autoComplete="new-password"
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </form>

    </Container>
  )
}
