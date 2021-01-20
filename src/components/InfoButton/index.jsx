import { MainButton } from "./style";
import { Link } from "react-router-dom";

const Button = () => {
  return <MainButton>
    EN SAVOIR PLUS <br />
    <Link to="/action/pedagogie">
    Notre Pédagogie
    </Link>
    </MainButton>;
};

export default Button;
