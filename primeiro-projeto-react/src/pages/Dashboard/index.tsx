import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" width={40} />
      <Title>Explore repositórios no github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/6265740?s=460&u=044b66cf1ffa6cb64c2d8fb5090f17a4a4653ec1&v=4"
            alt="Diego Neves"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição de teste</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/6265740?s=460&u=044b66cf1ffa6cb64c2d8fb5090f17a4a4653ec1&v=4"
            alt="Diego Neves"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição de teste</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/6265740?s=460&u=044b66cf1ffa6cb64c2d8fb5090f17a4a4653ec1&v=4"
            alt="Diego Neves"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição de teste</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
