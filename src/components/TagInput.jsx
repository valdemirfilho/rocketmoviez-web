import styled from "styled-components"
import { FiPlus, FiX } from "react-icons/fi"

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, isNew}) => isNew ? "trasnparent" : theme.BLACK_PINK_SALMON};
  color: ${({ theme }) =>  theme.WHITE};
  border: ${({ theme, isNew}) => isNew ? `1px dashed ${theme.LIGHT_GRAY}` : "none"};
  border-radius: 10px;
  padding-right: 16px;

  > input {
    height: 56px; 
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.WHITE};
    padding-left: 12px;
    outline: none;
    font-size: 14px;
    font-family: "Roboto Mono";

    &::placeholder {
      color: ${({ theme }) => theme.LIGHT_GRAY};
    } 
  }

  > button {
    padding-top: 2px;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: white;
  }

  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.PINK_SALMON_100};
  }
`

export function TagInput({ isNew, value, onClick, onInput, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        //size={isNew ? "12" : "19"}
        size="12"
        maxLength="30"
        // onInput={(e) => {
        //   console.log(e.target.value.length)
        //   if (e.target.value.length <= 30) { 
        //     e.target.size = e.target.value.length || "12"
        //   } 
        // }}
        { ...rest }
      />

      <button 
        type="button"
        onClick={() => value !== "" ? onClick() : null} 
      >
        { isNew ? <FiPlus /> : <FiX /> }
      </button>
    </Container>
  )
}
