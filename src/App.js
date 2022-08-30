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
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='*' element={<NotFound />} />
        <Route path='plans' element={<Plans />} />
        <Route path='trainers' element={<Trainers />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;