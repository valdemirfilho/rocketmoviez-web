import { Link } from "react-router-dom"
import styled from "styled-components"
import { ProfilePicture } from "./ProfilePicture.jsx"
import { useAuth } from "../hooks/auth.hook.jsx"

const Container = styled.header`
  grid-area: header;
  height: 120px;
  width: 100%;
  background-color: ${({ theme }) => theme.DARK_GRAY};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.BLACK_PINK_SALMON};

  > div {
    height: 100%;
    width: 95%;
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 16px;
    align-items: center;

    h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.PINK_SALMON_100};
    }

    input {
      width: 100%;
      height: 56px;
      background-color: ${({ theme }) => theme.MEDIUM_GRAY};
      color: ${({ theme }) => theme.WHITE};
      border: none;
      outline: none; 
      padding: 8px 24px;
      border-radius: 10px;

      &:focus-within {
        outline: 1px solid ${({ theme }) => theme.PINK_SALMON_200};
      }
    }
  }

  @media (max-width: 500px) {
    > div input {
      display: none;
    }
  }
`

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > div {
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-right: 10px;

    span {
      font-weight: bold;
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.LIGHT_GRAY};
    }
  }
`

export function Header({ user, onChange }) {
  const { logOut } = useAuth()

  return (
    <Container>
      <div>
        <Link to="/">
          <h1>RocketMoviez</h1>
        </Link>

        <input onChange={onChange} type="text" placeholder="Pesquisar por título"></input>

        <Profile>
          <div>
            <span>{user.name}</span>
            <a onClick={logOut}>Sair</a>
          </div>
          <Link to="/profile">
            <ProfilePicture src={`http://localhost:5000/files/${user.avatar}`} alt="Valdemir" size="64" />
          </Link>
        </Profile>
      </div>
    </Container>
  )
}

