import { MainButton, Span, Path } from "./style";


const ContactButton = () => {
  return (
    <MainButton>
      En savoir plus <br/>
      <Path to="/contacter">
      <Span>Contactez-nous</Span>
      </Path>
    </MainButton>
  );
};

export default ContactButton;
