import { MainButton, Span, Path } from "./style";


const StageUpButton = () => {
  return (
    <MainButton>
      Découvrez notre programme <br />
      <Path to="/action/stageup">
        <Span>Stage Up</Span>
      </Path>
    </MainButton>
  );
};

export default StageUpButton;
