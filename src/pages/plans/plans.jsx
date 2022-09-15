import Header from '../../components/Header'
import HeaderImage from '../../images/avatar8.jpg'
import Card from '../../UI/Card'
import {plans} from '../../data'
import './plans.css'

const Plans = () => {
  
  return (
      <>
        <Header title="Membership Plans" image={HeaderImage}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, animi exercitationem? Fugit porro dolor earum eveniet sit, hic dolorum cumque, sed suscipit optio consequatur placeat consequuntur tempore perspiciatis quia aperiam?
        </Header>
        <section className='plans'>
          <div className="container plans__container">
            {
              plans.map(({id, name, desc, price, features}) => {
                return <Card key={id} className='plan'>
                  <h3>{name}</h3>
                  <small>{desc}</small>
                  <h1>{`$${price}`}</h1>
                  <h4>Features</h4>
                  {features.map(({feature, available}, index) => {
                    return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                  })}
                  <button className='btn lg'>Choose Plan</button>
                </Card>
              })
            }
          </div>
        </section>
      </>
    )
}

export default Plans