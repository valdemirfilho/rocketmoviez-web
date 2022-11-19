import styled from "styled-components"
import { Stars } from "./Stars.jsx"

const Container = styled.div`
  background-color: ${({ theme }) => theme.BLACK_PINK_SALMON};
  width: 100%;
  padding: 16px 24px;
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

  > div.tags-wrapper {
    margin-top: 16px;
    margin-bottom: 0;
    display: flex;
    height: 20px;
    gap: 8px;
    align-items: center;

    > span {
      width: fit-content; 
      white-space: nowrap;
      
      padding: 5px 10px;
      background-color: ${({ theme }) => theme.PINK_SALMON_200};
      color: ${({ theme }) => theme.BLACK};

      font-size: 12px;
      font-family: 'Roboto';
      border-radius: 8px;
    }
  }
`

export function Summary({ title, rating, children, tags }) {
  return ( 
    <Container>
      <h2>{ title }</h2>
      <Stars rating={rating} />
      <p>{ children }</p>
      <div className="tags-wrapper">
      {
        tags ? tags.map((tag, index) => {
          return (
            <span key={index}>{ tag.name }</span>
          )
        }) : null
      }
      </div>
    </Container>
   )
}
