import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../conatiners/BarraLateral'
import ListaDeTarefas from '../../conatiners/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
