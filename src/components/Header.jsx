
const Header = ({title, image, children}) => {


  return (
    <header className="header">
        <div className="header__container">
            <img src={image} alt="Header Background Image" />
        </div>
        <div className="header__content">
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    </header>
    )
}

export default Header