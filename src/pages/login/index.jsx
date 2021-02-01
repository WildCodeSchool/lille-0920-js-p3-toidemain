import React from "react";
import { Container, Formulaire } from "./style";

export default function Login() {
  return (
    <Container>
      <Formulaire>
        <h2>ADMINISTRATION</h2>
        <input
          name="emailaddress"
          placeholder="Email"
          className="email"
          type="email"
          required
        />
        <input
          name="password"
          placeholder="Mot de passe"
          type="password"
          minLength="8"
          required
        />
        <button name="submit" className="btn" type="submit" value="Connexion">
          Connexion
        </button>
      </Formulaire>
    </Container>
  );
}
