import React, { useState, useRef } from "react";
import axios from "axios";
import * as Components from "./components";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const [signIn, toggle] = useState(true);
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const urlApi = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const loginButtonRef = useRef(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${urlApi}/user`, {
        name,
        email,
        password,
      });
      console.log("Cadastro realizado com sucesso:", response.data);
      saveToken(response.data.token);
      alert("Cadastro realizado com sucesso!");
      loginButtonRef.current.click();
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar. Tente novamente.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${urlApi}/login`, {
        email: emailLogin,
        password: passwordLogin,
      });

      const token = response.data.token;

      saveToken(token);

      console.log("Login realizado com sucesso!");
      alert("Login realizado com sucesso! Você será redirecionado.");
      navigate("/home");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login. Tente novamente.");
    }
  };

  const saveToken = (token) => localStorage.setItem("authToken", token);

  return (
    <Components.Container>
      <Components.GlobalStyle />
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form onSubmit={handleRegister}>
          <Components.Title>Cadraste-se</Components.Title>
          <Components.Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Components.Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Components.Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Components.Button type="submit">Cadastrar</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form onSubmit={handleLogin}>
          <Components.Title>Login</Components.Title>
          <Components.Input
            type="email"
            placeholder="Email"
            value={emailLogin}
            onChange={(e) => setEmailLogin(e.target.value)}
          />
          <Components.Input
            type="password"
            placeholder="Senha"
            value={passwordLogin}
            onChange={(e) => setPasswordLogin(e.target.value)}
          />
          <Components.Anchor href="#">Esqueceu a senha?</Components.Anchor>
          <Components.Button>Entrar</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Bem-vindo de volta!</Components.Title>
            <Components.Paragraph>
              Para se conectar conosco faça login com as suas informações
              pessoais!
            </Components.Paragraph>
            <Components.GhostButton
              ref={loginButtonRef}
              onClick={() => toggle(true)}
            >
              Login
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Bem-vindo!</Components.Title>
            <Components.Paragraph>
              Insira seus dados pessoais e comece a sua jornada conosco!
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Cadraste-se
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default AuthPage;
