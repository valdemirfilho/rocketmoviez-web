import { Container } from "./styles";

export function Loading() {
  return (
    <Container>
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
      <p>Carregando...</p>
    </Container>
  );
}
