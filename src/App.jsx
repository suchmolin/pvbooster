
import './App.css'
import KidsSmart from './components/KidsSmart'
import Diferenciadores from './components/Diferenciadores'
import EligeTuMision from './components/EligeTuMision'
import GeneracionSmart from './components/GeneracionSmart'
import Header from './components/Header'
import Navbar from './components/Navbar'
import NinoSmart from './components/NinoSmart'
import PorqueEsAtractiva from './components/PorqueEsAtractiva'
import QueIncluye from './components/QueIncluye'
import KidsSecundary from './components/KidsSecundary'
import JuniorsSmart from './components/JuniorsSmart'
import JuniorsSecundary from './components/JuniorsSecundary'
import TeensSmart from './components/TeensSmart'
import TeensSecundary from './components/TeensSecundary'
import Testiminiales from './components/Testiminiales'
import WhatsappButton from './components/WhatsappButton'

function App() {

  return (
    <main className="App gotham w-full overflow-hidden">
      <Navbar />
      <Header />
      <GeneracionSmart />
      <NinoSmart />
      <QueIncluye />
      <PorqueEsAtractiva />
      <Diferenciadores />
      <EligeTuMision />
      <KidsSmart />
      <KidsSecundary />
      <JuniorsSmart />
      <JuniorsSecundary />
      <TeensSmart />
      <TeensSecundary />
      <Testiminiales />
      <WhatsappButton />

    </main>
  )
}

export default App
