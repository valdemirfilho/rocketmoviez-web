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

  > main {
    grid-area: content;
    width: 95%;
    max-width: 1100px;
    margin: 40px auto;
    padding: 0 15px 0 2px;
    overflow-y: auto;

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


  }
`
