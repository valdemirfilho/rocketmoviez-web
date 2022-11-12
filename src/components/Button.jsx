import styled from "styled-components"

const Container = styled.button`
  background-color: ${({ theme }) => theme.PINK_SALMON_100};
  color: ${({ theme }) => theme.BLACK_PINK_SALMON};
  height: 56px;
  border-radius: 10px;
  width: 100%; 
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.button-del {
    background-color: ${({ theme }) => theme.BLACK};
    color: ${({ theme }) => theme.PINK_SALMON_100};
  }
`

export function Button({ title, icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      { Icon && <Icon size={24} /> }
      { title }
    </Container>
  )
}




