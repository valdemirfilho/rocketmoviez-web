import { Container } from "./styles.js"
import { Header } from "../../components/Header.jsx"
import { TextButton } from "../../components/TextButton.jsx"
import { Stars } from "../../components/Stars.jsx"
import { BsClock } from "react-icons/bs"
import { ProfilePicture } from "../../components/ProfilePicture.jsx"

export function MoviePreview() {
  return (
    <Container>
      <Header />
      <main>
        <TextButton name="Voltar" icon to="/" />
        <div className="title-and-rating">
          <h2>Details</h2>
          <Stars rating="2" />
        </div>
        <div className="author-datetime">
          <ProfilePicture src="https://github.com/valdemirfilho.png" size="20" alt="Valdemir" />
          <span>Por Valdemir Filho</span>
          <BsClock />
          <span>23/05/22 às 08:00</span>
        </div>
        <div className="tags">
          <span>Ficção Científica</span>
          <span>Drama</span>
          <span>Família</span>
        </div>
        <div className="description">
          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.
          </p>

        </div>
      </main>
    </Container>
  )
}




