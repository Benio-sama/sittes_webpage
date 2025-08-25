import { Navbar } from './components/Navbar'
import { Main } from './components/Main'

interface AppProps {
  subpage: string;
}

function App(props: AppProps) {

  return (
    <>
      <Navbar />
      <Main subpage={props.subpage} />
    </>
  )
}

export default App
