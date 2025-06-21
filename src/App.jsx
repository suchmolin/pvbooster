
import './App.css'
import AQuienVaDirigido from './components/AQuienVaDirigido'
import Diferenciadores from './components/Diferenciadores'
import EligeTuMision from './components/EligeTuMision'
import GeneracionSmart from './components/GeneracionSmart'
import Header from './components/Header'
import Navbar from './components/Navbar'
import NinoSmart from './components/NinoSmart'
import PorqueEsAtractiva from './components/PorqueEsAtractiva'
import QueIncluye from './components/QueIncluye'

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
      <AQuienVaDirigido />

    </main>
  )
}

export default App
