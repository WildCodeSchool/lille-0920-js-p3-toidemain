import {
  Title,
  ButtonContainer,
  ContainerEntreprise,
  ContainerEnseignant,
  ContainerLyceen,
  Button1,
  Button2,
  Button3,
} from "./style";

const MenuButton = ({ activeId, handleChangeTab }) => {
  
  return (
    <ButtonContainer>
      <Title>Vous êtes</Title>
      <ContainerEntreprise >
        <Button1 
        id="entreprise"
        onClick={handleChangeTab}
        className={activeId === 'entreprise' ? 'active' : ''}
        >
          UNE ENTREPRISE
        </Button1>
      </ContainerEntreprise>
      <ContainerEnseignant>
        <Button2 
        id="enseignant"
        onClick={handleChangeTab}
        className={activeId === 'enseignant' ? 'active' : ''}
      >
        UN ENSEIGNANT
        </Button2>
      </ContainerEnseignant>
      <ContainerLyceen>
        <Button3 
        id="lyceen"
        onClick={handleChangeTab}
        className={activeId === 'enseignant' ? 'active' : ''}
        >
        UN LYCEEN
        </Button3>
      </ContainerLyceen>
    </ButtonContainer>

  );
};

export default MenuButton;
