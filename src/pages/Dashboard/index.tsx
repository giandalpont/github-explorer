import React, { useState, FormEvent } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'

import { Title, Form, Repositores, Error } from './styles'

import logo from '../../assets/github-logo.svg'

interface RepositoryProps {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('')
  const [inputError, setInputError] = useState('')
  const [repositories, setRepositories] = useState<RepositoryProps[]>([])

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório')
      return;
    }

    try {
      // Adição de um novo repositório
      const response = await api.get(`repos/${newRepo}`)

      const repository = response.data;

      setRepositories([...repositories, repository])

      setNewRepo('')
      setInputError('')
      // Consumor API do Github
      // Salvar novo repositório no estado
    } catch (err) {
      setInputError('Erro na busca por esse repositório')
    }
  }

  return (
    <>
      <img src={logo} alt="GitHub"/>
      <Title>Explore repositório no GitHub</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      { inputError && <Error>{inputError}</Error>}
      <Repositores>
        {repositories.map(rep => (
          <a key={rep.full_name} href="teste">
            <img src={rep.owner.avatar_url} alt={rep.owner.login}/>
            <div>
              <h2>{rep.full_name}</h2>
              <p>{rep.description ? rep.description : 'no description'}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositores>
    </>
  )
}

export default Dashboard
