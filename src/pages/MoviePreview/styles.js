import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  color: ${(props => props.WHITE)};
  display: grid;
  grid-template-rows: 120px auto;
  grid-template-areas:
  "header"
  "content";
  position: relative;
  overflow: hidden;

  > main {
    grid-area: content;
    width: 100vw;
    margin: 0 auto;
    padding: 40px 15px 40px 15px;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.7);
    background: linear-gradient(180deg, hsla(265, 5%, 10%, 1) 1%, rgba(0,0,0,0.1) 100%);

    .wrapper {
      max-width: 1100px;
      margin: auto;
    }
    
    .title-and-rating {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 24px;

      h2 {
        font-size: 36px;
        font-weight: 500;
      }
    }

    .author-datetime {
      display: flex;
      align-items: center;
      font-size: 16px;
      font-family: "Roboto";
      margin-bottom: 40px;

      span {
        margin-left: 8px;
        margin-right: 20px;
      }

      svg {
        color: ${({ theme }) => theme.PINK_SALMON_100};
        font-size: 16px;
      }

      a {
        margin-left: 4px;
      }
    }

    .tags {
      margin-bottom: 40px;
      display: flex;
      gap: 8px;

      span {
        display: inline-block;
        padding: 8px 16px;
        background-color: ${({ theme }) => theme.BLACK_PINK_SALMON};
        height: 30px;
        font-size: 12px;
        font-family: "Roboto";
        border-radius: 8px;
      }
    }

    .description p {
      font-size: 16px;
      line-height: 26px;
      text-align: justify;
      margin-bottom: 24px;
    }

    video {
      position: absolute;
      width: auto;
      height: auto;
      min-height: 100%;
      min-width: 100%;
      top: calc(50% + 120px);
      left: 50%;
      z-index: -1;
      transform: translate(-50%, -50%);
    }
  }
`
