import Header from '../../components/Header'
import HeaderImage from '../../images/avatar7.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'

const contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
     
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nesciunt veritatis iusto, illum nobis tenetur.
      
    </Header>
    <section className='contact'>
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:support@olivercrossfit.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="http://m.me/oliver_crossfit" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+12225555555" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default contact