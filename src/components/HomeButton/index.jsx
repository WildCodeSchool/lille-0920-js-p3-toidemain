import {
  Title,
  ButtonContainer,
  ContainerEntreprise,
  ContainerEnseignant,
  ContainerLyceen,
} from "./style";

const MenuButton = () => {
  return (
    <ButtonContainer>
      <Title>Vous êtes</Title>
      <ContainerEntreprise>
        <p>UNE ENTREPRISE</p>
      </ContainerEntreprise>
      <ContainerEnseignant>
        <p>UN ENSEIGNANT</p>
      </ContainerEnseignant>
      <ContainerLyceen>
        <p>UN LYCEEN</p>
      </ContainerLyceen>
    </ButtonContainer>
  );
};

export default MenuButton;
