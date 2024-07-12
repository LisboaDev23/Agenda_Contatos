import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducers/contato'
import buscaReducer from './reducers/busca'

//declarar primeiramente a nossa store
const store = configureStore({
  reducer: {
    //aqui eu posso denominar quais serão os meus reducers, recebem a action e atualizam a store
    contatos: contatosReducer,
    busca: buscaReducer
  }
})

//configurar o typescript para trabalhar com o redux
export type RootReducer = ReturnType<typeof store.getState>

export default store
