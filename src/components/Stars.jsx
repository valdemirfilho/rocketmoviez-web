import styled from "styled-components"
import { FaStar, FaRegStar } from "react-icons/fa"

const Container = styled.div`
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;

  > svg {
    color: ${({ theme }) => theme.PINK_SALMON_100};
    font-size: 20px;
  }
`

export function Stars({ rating }) {
  const stars = [1, 2, 3, 4, 5]
  return (
    <Container>
      {
        stars.map(star => {
          return (star <= Number(rating))
            ? <FaStar key={star} />
            : <FaRegStar key={star} />
        })
      }
    </Container>
  )
}