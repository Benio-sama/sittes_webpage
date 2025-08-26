import { Navbar } from './components/Navbar'
import { Main } from './components/Main'
import { ContactUs } from './components/pages/Contact_us';
import ScrollToHashElement from './ScrollToHashElement';

interface AppProps {
  subpage: string;
}

function App(props: AppProps) {

  return (
    <>
      <ScrollToHashElement />
      <Navbar />
      <Main subpage={props.subpage} />
      <ContactUs />
    </>
  )
}

export default App
