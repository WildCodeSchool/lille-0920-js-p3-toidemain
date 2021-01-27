import { MainButton, Span, Path } from "./style";

const Button = () => {
  return (
    <MainButton>
      En savoir plus <br />
      <Path to="/action/pedagogie">
        <Span>Notre Pédagogie</Span>
      </Path>
    </MainButton>
  );
};

export default Button;
