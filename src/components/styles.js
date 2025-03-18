import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 1rem;
    font-size: 1.2rem;
  }

  .spinner {
    text-align: center;
  }

  .spinner > div {
    width: 12px;
    height: 12px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    border-radius: 100%;
    display: inline-block;
    margin: 0 4px;
    animation: bounce 1.4s infinite ease-in-out both;
  }

  .spinner .bounce1 {
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    animation-delay: -0.16s;
  }

  @keyframes bounce {
    0%, 80%, 100% { 
      transform: scale(0);
    } 
    40% { 
      transform: scale(1.0);
    }
  }
`; 
