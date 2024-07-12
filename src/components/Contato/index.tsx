import { Botao, BotaoSalvar } from '../../styles'
import * as S from './styles'
import ContatoClass from '../../models/Contato'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editar, remover } from '../../store/reducers/contato'

//primeiramente, vamos definir que a propriedade desse componente contato é o próprio Contato em forma de classe, logo
type Prop = ContatoClass

//as propriedades do componente contato serão as propriedades presentes na classe que é o proprio tipo prop
const Contato = ({
  id,
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Prop) => {
  //definindo os estados do componente
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState(nomeOriginal)
  const [email, setEmail] = useState(emailOriginal)
  const [telefone, setTelefone] = useState(telefoneOriginal)

  const dispatch = useDispatch()

  return (
    //primeiramente pensamos no container do contato que será o seu card
    <S.Card>
      <S.DivCard>
        {estaEditando ? (
          <>
            <S.CampoSendoEditado
              type="text"
              onChange={(eventoDigitando) =>
                setNome(eventoDigitando.target.value)
              }
              value={nome}
            ></S.CampoSendoEditado>
            <S.CampoSendoEditado
              type="text"
              value={email}
              onChange={(eventoDigitando) =>
                setEmail(eventoDigitando.target.value)
              }
            ></S.CampoSendoEditado>
            <S.CampoSendoEditado
              type="number"
              value={telefone}
              onChange={(eventoDigitando) =>
                setTelefone(eventoDigitando.target.value)
              }
            ></S.CampoSendoEditado>
          </>
        ) : (
          <>
            <S.CampoDado
              type="text"
              disabled={!estaEditando} //estará desabilitado quando não estiver editando
              placeholder="Nome"
              value={nome}
              onChange={(eventoDigitando) =>
                setNome(eventoDigitando.target.value)
              }
            ></S.CampoDado>
            <S.CampoDado
              type="text"
              disabled={!estaEditando}
              placeholder="E-mail"
              value={email}
              onChange={(eventoDigitando) =>
                setEmail(eventoDigitando.target.value)
              }
            ></S.CampoDado>
            <S.CampoDado
              type="number"
              disabled={!estaEditando}
              placeholder="Nº Telefone"
              value={telefone}
              onChange={(eventoDigitando) =>
                setTelefone(eventoDigitando.target.value)
              }
            ></S.CampoDado>
          </>
        )}
      </S.DivCard>
      {estaEditando ? (
        <div>
          <BotaoSalvar
            onClick={() => {
              dispatch(
                editar({
                  id,
                  nome,
                  email,
                  telefone
                })
              )
              setEstaEditando(false)
            }}
          >
            Salvar
          </BotaoSalvar>
          <S.BotaoCancelarRemover
            onClick={() => {
              setEstaEditando(false)
              setNome(nomeOriginal)
              setEmail(emailOriginal)
              setTelefone(telefoneOriginal)
            }}
          >
            Cancelar
          </S.BotaoCancelarRemover>
          {/*Esse botão de salvar e de cancelar só serão renderizados quando o botão de editar for clicado*/}
        </div>
      ) : (
        <div>
          <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
          <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
            Remover
          </S.BotaoCancelarRemover>
          {/*Fazer lógica da troca de botões quando editar for clicado*/}
        </div>
      )}
    </S.Card>
  )
}

export default Contato
