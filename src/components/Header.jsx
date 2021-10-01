import { useState } from "react";
import { useSpring, animated } from "react-spring";
import logo from "../images/logo.png";

const Header = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navAnim = useSpring({
    opacity: navVisible ? 1 : 0,
    transform: navVisible ? "translateX(0)" : "translateX(-200%)",
  });

  const highlight = useSpring({
    background: isHovered ? "linear-gradient(transparent 40%, rgba(19, 176, 212, 0.6) 40%, rgba(19, 176, 212, 0.6) 65%, transparent 65%)" : "transparent",
    transform: isHovered ? "translateX(0)" : "translateX(-200%)",
    
    // transform: isHovered
    //   ? 'translate3d(0, 15px, 0)'
    //   : 'translate3d(0, 15px, 0)',
    // fontSize: isHovered ? '2rem' : '3rem',
  });

  return (
    <header className="header">
      <div className="header__container">
        <a href="http://cpyeung.com" className="logo__link">
          <img src={logo} alt="C.P. Yeung logo" className="logo__img" />
        </a>
      </div>

      {/* MAIN NAVIGATION */}
      {/* <div className="nav__modal">
        <button className="nav__button" onClick={() => setNavVisible(!navVisible)}>
          <div aria-hidden="true" className="btn__X">
            <div className="btn__X--lines"></div>
            <div className="btn__X--lines"></div>
            <div className="btn__X--lines"></div>
          </div>
          <span className="nav__button--lbl">Close</span>
        </button>

        <animated.div className="nav" style={navAnim}>
          <nav>
            <ul>
              <animated.li className="nav__item" 
                onMouseEnter={() => setIsHovered(!isHovered)}
                onMouseLeave={() => setIsHovered}
                style={highlight}>
                <a href="" className="nav__link" >Home.</a>
              </animated.li>
              <li className="nav__item">
                <a href="" className="nav__link">About.</a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">Projects.</a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">Contact.</a>
              </li>
            </ul>
          </nav>

          <div className="nav__text">
            <p>Proudly based in Toronto, Canada</p>
            <a href="mailto:cndpoon@gmail.com">hello@cpyeung.com</a>
          </div>
        </animated.div>
      </div> */}
    </header>
  );
};

export default Header;