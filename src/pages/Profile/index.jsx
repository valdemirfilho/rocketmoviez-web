import { Container } from "./styles.js"
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { useState, useEffect } from "react"
import { useAuth } from "../../hooks/auth.hook.jsx"
import { api } from "../../services/api.js"
import avatarPlaceholder from "../../assets/avatar-placeholder.png"
import { useNavigate } from "react-router-dom"

import { TextButton, Input, Button, ProfilePicture } from '../../components'

export function Profile() {
  const { user, checkTokenExpiration, logOut, updateProfile } = useAuth()
  const isTokenExpired = checkTokenExpiration()

  const navigate = useNavigate()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate(e) {
    const user = {
      name,
      email,
      avatar,
      new_password: newPassword,
      old_password: oldPassword
    }

    await updateProfile({ user, avatarFile })
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  useEffect(() => {
    if (isTokenExpired) {
      logOut()
      navigate("/")
    }
  }, [])

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
            src={avatar}
            size="180"
            alt={user.name}
          />

          <label htmlfrom="avatar">
            <FiCamera />
            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
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

        <Button type="button" title="Salvar" onClick={handleUpdate} />
      </form>

    </Container>
  )
}
