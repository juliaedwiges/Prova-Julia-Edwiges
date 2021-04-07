/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Title, Form, Usuarios } from './styles';

interface IUsuario {
  id: string;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
}

const Home: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');

  const [usuarios, setUsuarios] = useState<IUsuario[]>(() => {
    const repoLC = localStorage.getItem('@UsuariosDetails:usuarios');
    if (repoLC) {
      return JSON.parse(repoLC);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@UsuariosDetails:usuarios', JSON.stringify(usuarios));
  }, [usuarios]);

  function submitForm(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const usuarioSubmit: IUsuario = {
      id: String(Math.random() * 10000).substring(0, 4),
      nome,
      email,
      cpf,
      telefone,
    };
    setUsuarios([...usuarios, usuarioSubmit]);
  }

  return (
    <>
      <Title>Cadastro de Usuários</Title>

      <Form onSubmit={submitForm}>
        <div className="form-input">
          <label>Nome:</label>
          <input
            placeholder="Informe o nome"
            value={nome}
            onChange={(e: any) => {
              setNome(e.target.value);
            }}
          />
        </div>

        <div className="form-input">
          <label>E-mail:</label>
          <input
            placeholder="Informe o e-mail"
            value={email}
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-input">
          <label>CPF:</label>
          <input
            placeholder="Informe o CPF"
            value={cpf}
            onChange={(e: any) => {
              setCpf(e.target.value);
            }}
          />
        </div>

        <div className="form-input">
          <label>Telefone:</label>
          <input
            placeholder="Informe o telefone"
            value={telefone}
            onChange={(e: any) => {
              setTelefone(e.target.value);
            }}
          />
        </div>

        <div className="form-input">
          <button type="submit">Enviar</button>
        </div>
      </Form>

      <Usuarios>
        {usuarios.map((usr: IUsuario, index: number) => (
          <li key={usr.id}>
            <Link to={`/usuario/${index}`}>{usr.nome}</Link>
          </li>
        ))}
      </Usuarios>
    </>
  );
};

export default Home;
