import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import { Title, Form, Repositores } from './styles'

import logo from '../../assets/github-logo.svg'

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="GitHub"/>
    <Title>Explore repositório no GitHub</Title>
    <Form action="">
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositores>
      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/35267440?s=460&u=dbc4b151478e06291f3048d65f9cfc58c9515a3f&v=4" alt="Gian Dal Pont"/>
        <div>
          <h2>giandalpont/repo</h2>
          <p>rescription</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/35267440?s=460&u=dbc4b151478e06291f3048d65f9cfc58c9515a3f&v=4" alt="Gian Dal Pont"/>
        <div>
          <h2>giandalpont/repo</h2>
          <p>rescription</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/35267440?s=460&u=dbc4b151478e06291f3048d65f9cfc58c9515a3f&v=4" alt="Gian Dal Pont"/>
        <div>
          <h2>giandalpont/repo</h2>
          <p>rescription</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/35267440?s=460&u=dbc4b151478e06291f3048d65f9cfc58c9515a3f&v=4" alt="Gian Dal Pont"/>
        <div>
          <h2>giandalpont/repo</h2>
          <p>rescription</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositores>
  </>
)

export default Dashboard
