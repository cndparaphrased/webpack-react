import "../styles/index.scss";
import Header from "./Header";
import Footer from "./Footer";

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const App = () => {
  return (
    <>
      <Header />

      <Parallax pages={2} innerStyle={{ border: '45px solid white', backgroundColor: 'var(--ltgrey)' }}>
        <ParallaxLayer
          sticky={{ start: 0, end: 2 }}>
          <ul className="social">
            <li className="social__items">
              <a href="https://www.instagram.com/cndparaphrased" aria-label="Instagram for cndparaphrased" target="_blank">
                <i aria-hidden="true" className="fab fa-instagram social__icon"></i>
              </a>
            </li>
            <li className="social__items">
              <a href="https://www.linkedin.com/in/cindy-poon-yeung-572858169" aria-label="LinkedIn profile" target="_blank">
                <i aria-hidden="true" className="fab fa-linkedin-in social__icon"></i>
              </a>
            </li>
            <li className="social__items">
              <a href="https://github.com/cndparaphrased" aria-label="github repositories" target="_blank">
                <i aria-hidden="true" className="fab fa-github social__icon"></i>
              </a>
            </li>
          </ul>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
          <p>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <p>Scroll up</p>
        </ParallaxLayer>
      </Parallax>

      <Footer />
    </>
  );
};

export default App;