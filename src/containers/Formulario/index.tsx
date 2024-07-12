import { useDispatch } from 'react-redux'
import { BotaoSalvar, Campo, Titulo } from '../../styles'
import { BotaoCancelar, Form } from './styles'
import { adicionar } from '../../store/reducers/contato'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cadastrarContato = () => {
    dispatch(
      adicionar({
        nome,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    //a unica coisa que vou precisar me comprometer a fazer aqui nesse componente, será apenas os elementos do formulário
    //pois na estrutura da página de cadastro, a barra lateral já está sendo retornada
    <>
      <Form onSubmit={cadastrarContato}>
        <Titulo>CADASTRAR NOVO CONTATO</Titulo>
        <Campo
          placeholder="Nome Completo"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
        <Campo
          placeholder="E-mail"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <Campo
          placeholder="Nº Telefone"
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
        />
        <BotaoSalvar type="submit">Salvar contato</BotaoSalvar>
        <BotaoCancelar to="/">Cancelar</BotaoCancelar>
      </Form>
    </>
  )
}

export default Formulario
