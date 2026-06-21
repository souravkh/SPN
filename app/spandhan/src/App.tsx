import './App.css'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import History from './component/History/History'
import Projects from './component/Projects/Projects'
import Impact from './component/About/Impact'
import Testimonial from './component/Testimonial/Testimonial'
import Team from './component/Team/Team'
import Footer from './component/Footer/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <History/>
      <Projects/>
      <Impact/>
      <Testimonial/>
      <Team/>
      <Footer/>
    </>
  )
}

export default App
