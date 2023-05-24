import { Header } from "./components/Header"
import { MenuContextProvider } from "./contexts/menu"

function App() {

  return (
    <>
      <MenuContextProvider>
        <Header/>
      </MenuContextProvider>
    </>
  )
}

export default App
