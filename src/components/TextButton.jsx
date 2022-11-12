import styled from "styled-components"
import { BsArrowLeftShort } from "react-icons/bs"
import { Link } from "react-router-dom"

const Container = styled(Link)`
  background: none;
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.PINK_SALMON_100};
  width: fit-content;
  /* margin-bottom: 24px; */
  text-align: center;

  > svg {
  font-size: 24px;
  margin-left: -5px;
  }
`

export function TextButton({ icon, name, ...rest }) {
  return (
    <Container {...rest}> 
      { icon && <BsArrowLeftShort /> }
      { name }
    </Container>
  )
}