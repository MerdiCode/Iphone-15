
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HighLights from './components/HighLights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
function app() {
  return (<>
<main className='bg-black'>
  <Navbar/>
 <Hero/>
  <HighLights/>
  <Model/>
  <Features/>
  <HowItWorks/>
  <Footer/>
</main>
  </>);
}

export default app;