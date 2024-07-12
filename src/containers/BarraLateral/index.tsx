import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Botao, Campo } from '../../styles'
import * as S from './styles'
import { pesquisandoContato } from '../../store/reducers/busca'

type Props = {
  mostrarBarraPesquisa: boolean
}

const BarraLateral = ({ mostrarBarraPesquisa }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    //dentro dessa aba lateral primeiramente nós teremos um input de busca do contato
    <S.Aside>
      {mostrarBarraPesquisa ? (
        <Campo
          type="text"
          placeholder="Buscar contato"
          onChange={
            (evento) => dispatch(pesquisandoContato(evento.target.value))
            //Aqui no onChange nós precisamos de alguns recursos para efetuar a operação de busca,
            //para renderizar na tela todas os resultados referentes ao valor do termo colocado
            //no input de busca, necessitamos de um novo reducer, criado o reducer, despachamos ele com o meotdo de pesquisa
          }
        />
      ) : (
        <Botao onClick={() => navigate('/')}>
          Voltar para página de contatos.
        </Botao>
      )}
    </S.Aside>
  )
}

export default BarraLateral
