import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/github-logo.svg'

import { Header, RepositoryInfo, Issues } from './styles'

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()

  return(
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer"/>
        <Link to="/" >
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="https://avatars0.githubusercontent.com/u/35267440?s=460&u=dbc4b151478e06291f3048d65f9cfc58c9515a3f&v=4" alt=""/>
          <div>
            <h2>{params.repository}</h2>
            <p>description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>234</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>234</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>234</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to={`gian`}>
          <div>
            <h2>Name</h2>
            <p>jhadsgfjasdghfjksdg</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  )
}

export default Repository
