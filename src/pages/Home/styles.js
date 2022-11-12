import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  main {
    grid-area: content;
    width: 100%;
    max-width: 1100px;
    margin: 50px auto;
  }

  .title-button-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    > h1 {
      font-size: 32px;
      font-weight: 400;
    }

    > a {
      width: 210px;
      background-color: ${({ theme }) => theme.PINK_SALMON_100};
      color: ${({ theme }) => theme.BLACK_PINK_SALMON};
      height: 56px;
      border-radius: 10px;
      border: none;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;

      svg {
        font-size: 20px;
      }
    }
  }

  .summary-wrapper {
    height: 600px;
    display: grid;
    gap: 24px;
    overflow-y: auto;
  }

`