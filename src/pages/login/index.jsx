import React, { useState } from "react";
import { Container, Formulaire } from "./style";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { api, cookies } from "../../conf";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    let url = "/auth/login";
    let formData = { email, password };
    console.log(form);

    api
      .post(url, formData)
      .then(({ data }) => {
        const { token, user } = data;
        cookies.set("token", token);
        api.defaults.headers.authorization = "Bearer " + token;
        dispatch({ type: "LOGIN", user });
        toast(`You're now logged in`);
      })
      .catch((e) => {
        toast.error("Erreur!" + e);
      });
  };

  return (
    <Container>
      <Formulaire onSubmit={handleSubmit}>
        <h2>ADMINISTRATION</h2>
        <input
          name="email"
          placeholder="Email"
          className="email"
          type="email"
          onChange={handleChange}
          required
          autoComplete="email"
        />
        <input
          name="password"
          placeholder="Mot de passe"
          type="password"
          minLength="8"
          onChange={handleChange}
          autoComplete="password"
          required
        />
        <button name="submit" className="btn" type="submit" value="Connexion">
          Connexion
        </button>
      </Formulaire>
    </Container>
  );
}
