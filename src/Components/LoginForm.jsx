import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../Hooks/useForms';
import FormsButton from './FormsButton';
import FormsInput from './FormsInput';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()){
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
        });
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <FormsInput label="Usuário" type="text" name="username" {...username} />
        <FormsInput label="Senha" type="password" name="password" {...password} />
        <FormsButton>Entrar</FormsButton>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}

export default LoginForm