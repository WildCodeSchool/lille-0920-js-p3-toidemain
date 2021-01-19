import {
  Title,
  ButtonContainer,
  ContainerEntreprise,
  ContainerEnseignant,
  ContainerLyceen,
  Button1,
  Button2,
  Button3
} from "./style";

const MenuButton = () => {
  return (
    <ButtonContainer>
      <Title>Vous êtes</Title>
      <ContainerEntreprise>
        <Button1>UNE ENTREPRISE</Button1>
      </ContainerEntreprise>
      <ContainerEnseignant>
        <Button2>UN ENSEIGNANT</Button2>
      </ContainerEnseignant>
      <ContainerLyceen>
        <Button3>UN LYCEEN</Button3>
      </ContainerLyceen>
    </ButtonContainer>
  );
};

export default MenuButton;
