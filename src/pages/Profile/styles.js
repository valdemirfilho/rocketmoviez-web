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

    > div.avatar-wrapper {
      display: grid;
      place-items: center;

      position: relative;

      > label {
        font-size: 40px;
        position: absolute;
        bottom: 0;
        right: 10px;
        height: 40px;
        cursor: pointer;
      }

      input {
        display: none;
      }
    }

    > div:nth-of-type(2n+1) {
      margin-bottom: 24px;
    }
  }

`