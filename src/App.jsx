
import './App.css'
import GeneracionSmart from './components/GeneracionSmart'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {

  return (
    <main className="App gotham w-full overflow-hidden">
      <Navbar />
      <Header />
      <GeneracionSmart />
    </main>
  )
}

export default App
