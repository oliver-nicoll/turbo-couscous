import Header from '../../components/Header'
import HeaderImage from '../../images/avatar1.jpg'
import StoryImage from '../../images/3.png'
import VisionImage from '../../images/groupgirls2.jpg'
import MissionImage from '../../images/groupgirls3.jpg'
import './about.css'

const about = () => {
  return (
    <>
    <Header title='About Us' image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing 
      elit. Voluptatibus alias error a, suscipit 
      exercitationem magni doloribus porro atque magnam 
      quaerat?
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Voluptatem in quis est, 
            quas pariatur dignissimos obcaecati inventore 
            earum. Sequi voluptatum et eveniet corporis 
            fugit quod atque! Illum culpa odio laudantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Laborum ratione voluptatum obcaecati? 
            Accusantium ducimus, 
            unde magnam ipsam dicta perspiciatis. Id!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo, saepe.
            Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Illo in eos, quia dolores 
            quo assumenda maiores ab doloremque quod porro, 
            totam quasi magni! Eligendi quos aliquam 
            inventore adipisci necessitatibus temporibus.
          </p>
        </div>
      </div>
    </section>

    <section className="about__vison">
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Voluptatem in quis est, 
            quas pariatur dignissimos obcaecati inventore 
            earum. Sequi voluptatum et eveniet corporis 
            fugit quod atque! Illum culpa odio laudantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo, saepe.
            Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Illo in eos, quia dolores 
            quo assumenda maiores ab doloremque quod porro, 
            totam quasi magni! Eligendi quos aliquam 
            inventore adipisci necessitatibus temporibus.
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision" />
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Voluptatem in quis est, 
            quas pariatur dignissimos obcaecati inventore 
            earum. Sequi voluptatum et eveniet corporis 
            fugit quod atque! Illum culpa odio laudantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Laborum ratione voluptatum obcaecati? 
            Accusantium ducimus, 
            unde magnam ipsam dicta perspiciatis. Id!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo, saepe.
            Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Illo in eos, quia dolores 
            quo assumenda maiores ab doloremque quod porro, 
            totam quasi magni! Eligendi quos aliquam 
            inventore adipisci necessitatibus temporibus.
          </p>
        </div>
      </div>
    </section>
    </>
    )
}

export default about