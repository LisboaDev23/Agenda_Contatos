import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaContatos from '../../containers/ListaContatos'

const Home = () => {
  //neste arquivo será retornado todo o conteúdo da página principal
  return (
    <>
      <BarraLateral mostrarBarraPesquisa={true} />
      <ListaContatos />
      {/*Aqui o botão de adicionar será tratado como um componente, não como um container*/}
      <BotaoAdicionar />
    </>
  )
}

export default Home
