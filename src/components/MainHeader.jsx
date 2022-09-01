import {Link} from 'react-router-dom';
import Image from '../images/avatar4.jpg'

const MainHeader = () => {
  return (
    <header>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysofWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis illum, 
            reprehenderit temporibus odit non quidem debitis corrupti soluta placeat eos, possimus porro aliquam voluptatibus
            minus repudiandae cupiditate consequuntur tenetur ratione.
          </p>
          <Link to="/plans" className="btn lg">Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-shape"></div>
          <div className="main__header-image">
            <img src={Image} alt='Main Header' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader;