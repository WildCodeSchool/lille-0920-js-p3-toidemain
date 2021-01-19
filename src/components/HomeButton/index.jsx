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

const MenuButton = (handleChange) => {



  return (
    <ButtonContainer>
      <Title>Vous êtes</Title>
      <ContainerEntreprise>
        <Button1 onClick={handleChange}>UNE ENTREPRISE</Button1>
      </ContainerEntreprise>
      <ContainerEnseignant>
        <Button2 onClick={handleChange}>UN ENSEIGNANT</Button2>
      </ContainerEnseignant>
      <ContainerLyceen>
        <Button3 onClick={handleChange}>UN LYCEEN</Button3>
      </ContainerLyceen>
    </ButtonContainer>
  );
};

export default MenuButton;
