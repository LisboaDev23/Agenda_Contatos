import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

//trabalhar no conceito de slices
const contatoSlice = createSlice({
  name: 'contatos',
  initialState: {
    //o estado inicial do meu slice será um array de contatos vazio
    contatosList: [
      new Contato(
        1,
        'Gabriel Lisboa',
        '85998523779',
        'gabriel.lisboadv@gmail.com'
      )
    ]
  },
  reducers: {
    //actions do meu reducer de contatos
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      //fazer verificação se o contato já existe
      const nomePresente = state.contatosList.find((contato) => {
        contato.nome.toLowerCase === action.payload.nome.toLowerCase
      })
      const emailPresente = state.contatosList.find(
        (contato) => contato.email === action.payload.email
      )
      if (nomePresente || emailPresente) {
        alert('Nome do contato ou e-mail já cadastrado!')
      } else {
        const ultimoContato = state.contatosList[state.contatosList.length - 1]
        //último contato da lista é o tamanho do array -1 pois o array começa com 0
        const tarefaNova = {
          ...action.payload, //a nova tarefa tem ... atributos
          id: ultimoContato ? ultimoContato.id + 1 : 1 //caso exista esse último contato, adicione +1 ao seu id, caso não diga que é 1
        }
        state.contatosList.push(tarefaNova)
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      // a ação é do tipo number pois quando ele executar a ação de remover, é o id em número que será o tipo da ação
      // state.contatosList.pop() não podemos utilizar esse método pois ele acaba tirando o último elemento
      //e não queremos remover o último elemento, queremos retornar um array que tenha somente os elementos que sobraram
      state.contatosList = state.contatosList.filter(
        (contato) => contato.id !== action.payload
      )
      //necessário alterar a lista de contatos do próprio estado afirmando que ela agora é uma lista aonde não existe o elemento removido
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.contatosList.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (indexContato >= 0) {
        //se realmente existir o contato
        state.contatosList[indexContato] = action.payload
      }
    }
  }
})

//exportando as minhas actions
export const { adicionar, remover, editar } = contatoSlice.actions

//exportando o reducer de fato
export default contatoSlice.reducer
