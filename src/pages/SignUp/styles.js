import styled from "styled-components"
// import imageBg from "../../assets/background.webp"
import imageBg from "../../assets/bg.webp"

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 600px auto;
  align-items: center;
  margin: 0 auto;

  > div {
    display: grid;
    gap: 48px;
    padding: 100px;
  }

  .logo-wrapper h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.PINK_SALMON_100};
  }

  .logo-wrapper p {
    font-size: 14px;
    color: ${({ theme }) => theme.LIGHT_GRAY};
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    button {
      margin: 14px 0;
    }
  }

  h2 {
    font-size: 24px;
  }

  .img-wrapper {
    position: relative;
    background-image: url(${imageBg}); 
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
  }

  /* .img-wrapper::after {
    content: "";
    position: absolute;
    background: linear-gradient(to left, ${({ theme }) => theme.DARK_GRAY} 0%, transparent 100%); 
    height: 100%;
    width: 100%;
  } */

`