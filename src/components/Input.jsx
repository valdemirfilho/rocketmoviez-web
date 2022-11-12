import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.BLACK_PINK_SALMON};
  border-radius: 10px;

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.PINK_SALMON_200};
  }

  > input {
    font-size: 16px;
    height: 56px;
    width: 100%;
    background-color: transparent;
    color: ${({ theme }) => theme.WHITE};
    border: none;
    outline: none;
    padding-left: ${({ pd }) => pd ? 20 : 0}px;
    padding-right: 20px;

    &::placeholder {
      color: ${({ theme }) => theme.LIGHT_GRAY};
    }
  }

  > svg {
    margin: 0 16px;
    color: ${({ theme }) => theme.LIGHT_GRAY};
  }
`

export function Input({ icon: Icon, ...rest}) {
  return (
    <Container pd={rest.pd}>
      { Icon && <Icon size={20} /> }
      <input {...rest} />
    </Container>
  )
}