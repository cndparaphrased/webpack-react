import "../styles/index.scss";
import Recipes from "./Recipes";
import arrow from "../images/arrow.png";
import gif from "../images/giphy.gif";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh hey, React</h1>
        </section>
        <img src={arrow} alt="arrow" width="150" />
        <img src={gif} alt="gif" />
        <Recipes />
      </main>
    </>
  );
};

export default App;