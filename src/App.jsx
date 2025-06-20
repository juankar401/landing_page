
import './App.css'
import Header from './components/header'
import HowItWorks from './components/HowItWorks'
import Home from './components/Home'
import Kids from './components/Kids'
import Educational from './components/Educational'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <img src="src/assets/decoration/banner.png" alt="banner" className='px-36 w-auto mb-28'/>
      <Kids/>
      <HowItWorks/>
      <Educational/>
      <Footer/>
    </>
  )
}

export default App
