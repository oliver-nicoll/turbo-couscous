import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contacts/contact';
import Gallery from './pages/gallery/gallery';
import NotFound from './pages/notFound/notFound';
import Plans from './pages/plans/plans';
import Trainers from './pages/trainers/trainers';
import Navbar from './components/Navbar';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Gallery />
      <NotFound />
      <Plans />
      <Trainers />
    </BrowserRouter>

  )
}

export default App;