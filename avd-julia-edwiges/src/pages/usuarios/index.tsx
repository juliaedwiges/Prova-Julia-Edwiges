import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Title } from './styles';

interface RepoParams {
  id: string;
}

interface IUsuario {
  id: string;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
}

const Usuario: React.FC = () => {
  const { params } = useRouteMatch<RepoParams>();

  const [usuarios] = useState<IUsuario[]>(() => {
    const repoLC = localStorage.getItem('@UsuariosDetails:usuarios');
    if (repoLC) {
      return JSON.parse(repoLC);
    }
    return [];
  });

  const usuario: IUsuario = usuarios[Number(params.id)];

  return (
    <>
      <Link to="/">Back</Link>
      <Title> Informações do Usuário: {usuario.nome}</Title>
      <p>E-mail: {usuario.email}</p>
      <p>CPF: {usuario.cpf}</p>
      <p>Telefone: {usuario.telefone}</p>
    </>
  );
};

export default Usuario;
