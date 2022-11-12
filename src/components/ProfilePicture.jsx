import styled from "styled-components"

const Container = styled.img`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  border-radius: 50%;
  outline: 1px solid ${({ theme }) => theme.PINK_SALMON_200};
`

export function ProfilePicture({ ...rest }) {
  return (
    <Container { ...rest } />
  )
}