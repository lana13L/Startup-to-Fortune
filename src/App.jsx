import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import Ruprose from "./components/Ruprose"
import FeaturesSection from './components/FeaturesSection'
import Monitor from './components/Monitor'
import Pricing from './components/Pricing'
import PurposeSection  from './components/PurposeSection'
import Testimonial from './components/Testimonial'
import News from './components/News'
import Footer from './components/Footer'
import ServicesSection from './components/ServicesSection'
import { DiHeroku } from "react-icons/di"
const App = () => {
  return (
  <main className="relative main-h-screem overflow-x-hidden" >
    <div className="absolute top-0 left-0 w-[50%] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/10 rounded-full blur-[180px] z-[-1]"></div>

  <div className="overflow-hidden ">
  <Navbar/>
  <Hero/>
  <CompanyLogo/>
  <Ruprose/>
  <DiHeroku/>
  <FeaturesSection/>
  <Monitor/>
  <PurposeSection/>
  <Pricing/>
  <ServicesSection/>
  <Testimonial/>
  <News/>
  <Footer/>
  </div>
  </main>
  )
}

export default App
