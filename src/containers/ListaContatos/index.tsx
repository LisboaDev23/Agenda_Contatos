import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Titulo } from '../../styles'
import { MainContainer } from './styles'
import * as S from './styles'
import Contato from '../../components/Contato'

const ListaContatos = () => {
  //preciso de um useSelector para eu conseguir recuperar o array do meu reducer
  const { contatosList } = useSelector((state: RootReducer) => state.contatos)
  //importar o termo através do useSelector para saber oq está sendo escrito no campo de busca
  const { termo } = useSelector((state: RootReducer) => state.busca)

  const listaDeContatosVazia = () => {
    if (contatosList.length <= 0) {
      return true
    } else {
      return false
    }
  }

  const contatosFiltrados = () => {
    let contatos = [...contatosList]
    //se o termo não estiver indefinido e se não for uma string vazia...demonstre os contatos de acordo com o termo
    if (termo !== undefined && termo.trim() !== '') {
      contatos = contatos.filter((contato) =>
        contato.nome.toLowerCase().includes(termo.toLowerCase())
      )
      return contatos
    }
    contatos.sort((a, b) => a.nome.localeCompare(b.nome)) //localeCompare é melhor para garantir a ordenação correta da string
    return contatos
  }

  const contatosResultado = contatosFiltrados()

  return (
    //a tag main de fato aonde estarão todos os contatos armazenados de fato, será MainContainer
    //então nela teremos uma estilização diferente, aonde importaremos do arquivo de estilização
    <MainContainer>
      <Titulo as="p">
        {listaDeContatosVazia() ? (
          <h3>Nenhum contato cadastrado.</h3>
        ) : (
          <h3>{contatosList.length} contato(s) cadastrado(s).</h3>
        )}
      </Titulo>

      <S.ContainerLista>
        {
          //aqui será necessário percorrer cada item da lista e transformar ele num li
          contatosResultado.map((c) => (
            <li key={c.id}>
              <Contato
                id={c.id}
                nome={c.nome}
                email={c.email}
                telefone={c.telefone}
              />
            </li>
          ))
        }
      </S.ContainerLista>
    </MainContainer>
  )
}

export default ListaContatos
