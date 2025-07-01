import './css/App.css'
import TopBar from "./components/TopBar"
import Display from "./components/Display"
import MainPalettes from "./components/MainPalettes"
import { VarProvider } from './context/MainContext'

function App() {

  return (
    <VarProvider>
      <div className='body'>
        <TopBar />
        <div className='full-width'>
          <div></div>
          <Display number={{ val: "1" }} />
          <MainPalettes />
          <Display number={{ val: "2" }} />
          <div></div>
        </div>
      </div>
    </VarProvider>
  )
}

export default App