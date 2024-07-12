import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstilizacaoGlobal, { Container } from './styles'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  const rotas = createBrowserRouter([
    {
      //criando uma rota para a página inicial do projeto
      path: '/',
      element: <Home />
    },
    {
      path: '/cadastroContato',
      element: <Cadastro />
    }
  ])

  return (
    //faltando apenas o provider: adicionar após fazer as configurações e os arquivos de gerenciamento de estados
    <>
      <Provider store={store}>
        <EstilizacaoGlobal />
        <Container>
          <RouterProvider router={rotas} />
        </Container>
      </Provider>
    </>
  )
}

export default App
