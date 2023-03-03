import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  
  main {
    width: 95%;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    h2 {
      font-size: 36px;
      margin-bottom: 40px;
      margin-top: 24px;
    }
  }

  .form-container-inputs {
    width: 100%;
  }

  .form-container {
    display: flex;
    gap: 20px;
  }

  .wrapper-image {
  }

  .col-2 {
    display: flex;
    gap: 40px;
  }

  form textarea {
    margin-top: 40px;
  }

  h3 {
    margin: 40px 0 24px 0;
    padding-left: 2px;
    color: ${({ theme }) => theme.WHITE};
  }

  .tags-wrapper {
    background-color: ${({ theme }) => theme.BLACK};
    padding: 16px;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .buttons-wrapper {
    margin-top: 40px;
    display: flex;
    justify-content: flex-end;
    gap: 40px;

    button {
      width: 50%;
    }
  }
`
