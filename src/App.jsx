import './App.css'
import Header from './components/Header'
import HowItWorks from './components/HowItWorks'
import Home from './components/Home'
import Kids from './components/Kids'
import Educational from './components/Educational'
import Footer from './components/Footer'
import Cat from './components/Cat'
function App() {

  return (
    <>
      <Header/>
      <Home/>
      <img src="/assets/decoration/banner.png" alt="banner" className='px-36 w-auto mb-28'/>
      <Kids/>
      <HowItWorks/>
      <Educational/>
      <Cat/>
      <Footer/>
    </>
  )
}

export default App