import React from "react";
import { ContactContainer, FormContainer, Text } from "./style";

const Contacter = () => {
  return (
    <ContactContainer>
      <Text>
        <h1>Nous Contacter</h1>
      </Text>
      <FormContainer>
        <form>
          <input
            name="name"
            placeholder="Nom complet"
            className="name"
            required
          />
          <input
            name="emailaddress"
            placeholder="Email"
            className="email"
            type="email"
            required
          />
          <input name="sujet" placeholder="Sujet" className="name" required />
          <select name="vous" form="contacter">
            <option value="vous" selected disabled hidden>
              Vous êtes :
            </option>
            <option value="entreprise">Entreprise</option>
            <option value="enseignant">Enseignant</option>
            <option value="eleve">Parents/élevé</option>
            <option value="autre">Autre</option>
          </select>
          <textarea
            rows="4"
            cols="50"
            name="subject"
            placeholder="veuillez entrer votre message"
            className="message"
            required
          ></textarea>
          <input name="submit" className="btn" type="submit" value="Envoyer" />
        </form>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contacter;
