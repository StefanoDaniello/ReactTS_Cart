import { ContextProvider } from './store/context'
import './App.css'
import HeaderComponents from './components/HeaderComponents'
import MainComponents from './components/MainComponents'

function App() {

  return (
    <ContextProvider>
      <HeaderComponents></HeaderComponents>
      <MainComponents></MainComponents>
    </ContextProvider>
  )
}

export default App
