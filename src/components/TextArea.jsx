import styled from "styled-components"

const Container = styled.textarea`
  width: 100%;
  height: 150px; 
  background-color: ${({ theme }) => theme.BLACK_PINK_SALMON};
  color: ${({ theme }) => theme.WHITE};
  border: none;
  border-radius: 8px;
  resize: none;
  padding: 16px;
  font-size: 16px;
  
  &:focus {
    outline: 1px solid ${({ theme }) => theme.PINK_SALMON_200};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.LIGHT_GRAY};
  }
`

export function TextArea({ value, ...rest }) {
  return (
    <Container value={value} { ...rest }/>
  )
}
