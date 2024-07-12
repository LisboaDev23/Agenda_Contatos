import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

type BuscaState = {
  termo?: string
  //criando um tipo para conseguirmos definir o termo que será inputado
}

const initialState: BuscaState = {
  termo: '' //inicialmente o termo da busca é vazio
}

const buscandoContatoSlice = createSlice({
  name: 'buscaContato',
  initialState,
  reducers: {
    pesquisandoContato: (state, action: PayloadAction<string>) => {
      //quando for feita a pesquisa, eu vou renderizar um array aonde tenha somente contatos com os caracteres que ele selecionou
      state.termo = action.payload //o estado do termo vai ser o payload da ação
    }
  }
})

export const { pesquisandoContato } = buscandoContatoSlice.actions
export default buscandoContatoSlice.reducer
