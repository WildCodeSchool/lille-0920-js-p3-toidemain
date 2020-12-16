import React from "react";
import { ContactContainer } from "./contacter.style";

const Contacter = () => {
  return (
    <ContactContainer>
      <form>
        <input name="name" placeholder="Full name" className="name" required />
        <input name="emailaddress" placeholder="email" className="email" type="email" required />
        <textarea rows="4" cols="50" name="subject" placeholder="Please enter your message" className="message" required></textarea>
        <input name="submit" className="btn" type="submit" value="Send" />
      </form>
    </ContactContainer>
  );
};

export default Contacter;
