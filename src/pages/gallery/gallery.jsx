import Header from '../../components/Header'
import HeaderImage from '../../images/avatar5.jpg'

import './gallery.css'

const gallery = () => {
  const galleryLength = 9;
  const images = []

  for(let i = 1; i < galleryLength; i++) {
    images.push(require(`../../images/avatar${i}.jpg`))
  }

  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ad doloribus officia 
      corrupti cum at beatae. Animi odit vero placeat?
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((image, index) => {
            return (
            <article key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </article>
            )
          })
        }
      </div>
    </section>
    </>
    )
}

export default gallery