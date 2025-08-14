import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Main } from './components/Main'

interface AppProps {
  subpage: string;
}

function App(props: AppProps) {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Main subpage={props.subpage} />
    </>
  )
}

export default App
