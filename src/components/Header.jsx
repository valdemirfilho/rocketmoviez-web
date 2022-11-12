import { Link } from "react-router-dom"
import styled from "styled-components"
import { ProfilePicture } from "./ProfilePicture.jsx"
import { useAuth } from "../hooks/auth.hook.jsx"

const Container = styled.header`
  grid-area: header;
  height: 120px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.BLACK_PINK_SALMON};

  > div {
    height: 100%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.PINK_SALMON_100};
    }

    input {
      width: 640px;
      height: 56px;
      background-color: ${({ theme }) => theme.MEDIUM_GRAY};
      color: ${({ theme }) => theme.WHITE};
      border: none;
      padding: 24px;
      border-radius: 10px;
    }
  }
`

const Profile = styled.div`
  display: flex;
  align-items: center;

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

export function Header() {
  const { logOut } = useAuth()

  return (
    <Container>
      <div>
        <h1>RocketMoviez</h1>
        <input type="text" placeholder="Pesquisar por título"></input>
        <Profile>
          <div>
            <span>Valdemir Filho</span>
            <a onClick={logOut}>Sair</a>
          </div>
          <Link to="/profile">
            <ProfilePicture src="https://github.com/valdemirfilho.png" alt="Valdemir" size="64" />
          </Link>
        </Profile>
      </div>
    </Container>
  )
}

