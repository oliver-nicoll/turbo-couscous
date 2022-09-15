import Header from '../../components/Header'
import HeaderImage from '../../images/avatar9.jpg'
import {trainers} from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import Trainer from '../../components/Trainer'
import './trainers.css'

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Repellat nihil temporibus maxime asperiores ipsam vel placeat ducimus ad sit nam ab illum impedit minima, eius praesentium consequatur hic perferendis veritatis?
      </Header>
      <section className='trainers'>
        <div className="container trainers__container">
          {
            trainers.map(({id, image, name, job, socials}) => {
              return <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  {icon: <BsInstagram />, link: socials[0]},
                  {icon: <AiOutlineTwitter />, link: socials[1]},
                  {icon: <FaFacebook />, link: socials[2]},
                  {icon: <FaLinkedinIn />, link: socials[3]},
                ]
                } />
            })
          }
        </div>
      </section>
    </>
    )
}

export default Trainers