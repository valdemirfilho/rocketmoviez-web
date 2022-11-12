import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;
    background-color: ${({ theme }) => theme.BLACK_PINK_SALMON};

    > div {
      display: flex;
      align-items: center;
      height: 100%;
      width: 100%;
      max-width: 1100px;
      margin: 0 auto;
    }
  }

  form {
    width: 100%;
    max-width: 400px;
    margin: -120px auto 0 auto;
    padding-top: 30px;
    display: grid;
    place-items: center;
    gap: 10px;

    img {
      margin-bottom: 36px;
    }

    div:nth-of-type(even) {
      margin-bottom: 24px;
    }
  }

`