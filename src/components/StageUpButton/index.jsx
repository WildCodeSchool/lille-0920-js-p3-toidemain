import { MainButton, Span } from "./style";
import { Link } from "react-router-dom";

const StageUpButton = () => {
  return (
    <MainButton>
      Nous Contacter Découvrez notre programme <br />
      <Link to="/contacter">
        <Span>Stage Up</Span>
      </Link>
    </MainButton>
  );
};

export default StageUpButton;
