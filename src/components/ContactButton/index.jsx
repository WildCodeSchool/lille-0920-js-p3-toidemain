import { MainButton } from "./style";
import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <MainButton>
      <Link to="/contacter">
      Contactez-nous <br />
      </Link>
    </MainButton>
  );
};

export default ContactButton;
