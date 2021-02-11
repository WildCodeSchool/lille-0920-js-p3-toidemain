import React, { useState } from "react";
import { ContactContainer, FormContainer, Tit, Container } from "./style";
import Title from "../../components/Title";
import * as emailjs from "emailjs-com";
require("dotenv").config();

const Contacter = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "",
  });

  const { name, email, subject, message, type } = data;
  const {
    REACT_APP_SERVICE_ID,
    REACT_APP_TEMPLATE_ID,
    REACT_APP_USER_ID,
  } = process.env;

  const handleSubmit = (event) => {
    event.preventDefault();
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Toi Demain",
      subject: subject,
      message: message,
      entity: type,
    };
    emailjs.send(
      REACT_APP_SERVICE_ID,
      REACT_APP_TEMPLATE_ID,
      templateParams,
      REACT_APP_USER_ID
    );
    resetForm();
  };

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <Tit>
        <Title titleName="Nous Contacter"></Title>
      </Tit>
      <ContactContainer>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="nom complet"
              className="name"
              value={name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              placeholder="email"
              className="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
            />
            <input
              name="subject"
              type="text"
              placeholder="Sujet"
              className="name"
              value={subject}
              onChange={handleChange}
              required
            />
            <select
              name="type"
              form="contacter"
              value={type}
              onChange={handleChange}
            >
              <option value="type" selected disabled hidden>
                Vous êtes :
              </option>
              <option value="entreprise">Entreprise</option>
              <option value="enseignant">Enseignant</option>
              <option value="parents-eleve">Parents/élève</option>
              <option value="autre">Autre</option>
            </select>
            <textarea
              rows="4"
              cols="50"
              name="message"
              placeholder="veuillez entrer votre message"
              className="message"
              value={message}
              onChange={handleChange}
              required
            ></textarea>
            <input
              name="submit"
              className="btn"
              type="submit"
              value="Envoyer"
            />
          </form>
        </FormContainer>
      </ContactContainer>
    </Container>
  );
};

export default Contacter;
