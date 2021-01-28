import React, { useState } from "react";
import { ContactContainer, FormContainer, Text } from "./style";
import { init } from "emailjs-com";
import * as emailjs from "emailjs-com";
init("user_Thhn4IaRT3llceNo0OZ6m");

const Contacter = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "",
  });

  const { name, email, subject, message, type } = data;

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
      "service_2etpuqa",
      "template_v0o2cnd",
      templateParams,
      "user_Thhn4IaRT3llceNo0OZ6m"
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
    <ContactContainer>
      <Text>
        <h1>Nous Contacter</h1>
      </Text>
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
          <input name="submit" className="btn" type="submit" value="Envoyer" />
        </form>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contacter;
