import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contacts/contact';
import Gallery from './pages/gallery/gallery';
import NotFound from './pages/notFound/notFound';
import Plans from './pages/plans/plans';
import Trainers from './pages/trainers/trainers';



const App = () => {
  return (
    <div>Oliver Crossfit.Co
      <Home />
      <About />
      <Contact />
      <Gallery />
      <NotFound />
      <Plans />
      <Trainers />
    </div>

  )
}

export default App;