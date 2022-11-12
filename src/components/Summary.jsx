import styled from "styled-components"
import {Stars} from "./Stars.jsx"

const Container = styled.div`
  background-color: ${({ theme }) => theme.BLACK_PINK_SALMON};
  width: 100%;
  padding: 32px;
  border-radius: 16px;

  > h2 {
    font-size: 24px;
    font-weight: 500;
  }

  > div {
    width: 100px;
    margin-bottom: 16px;

    svg {
      font-size: 16px;
    }
  }

  > p {
    color: ${({ theme }) => theme.LIGHT_GRAY};
    font-family: "Roboto";
    font-size: 16px;
    line-height: 24px;
    overflow: hidden;
    /* max-width: 140ch; */
    /* text-overflow: ellipsis; */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical
  }
`

export function Summary({ title, rating, children }) {
  return ( 
    <Container>
      <h2>{ title }</h2>
      <Stars rating={rating} />
      <p>{ children }</p>
    </Container>
   )
}