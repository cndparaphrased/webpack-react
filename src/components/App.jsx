import "../styles/index.scss";
import Recipes from "./Recipes";
import logo from "../images/logo.png";

const App = () => {
  return (
    <>
    <div className="wrapper">
        <section>
          <h1>HELLO<span>.</span></h1>
        </section>
        <div className="paragraph">
          <p className="grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque malesuada nisl vel tempor. Integer commodo enim a quam mollis elementum. Curabitur a tellus a est consequat gravida. Nunc sed volutpat nunc. Ut massa neque, auctor at lorem vel, placerat pulvinar justo. Vestibulum elementum id ex quis placerat. Nunc tempor ac purus sit amet rhoncus. Vestibulum et congue lectus. Vestibulum ut ultrices libero. Phasellus lacinia elit augue, et fermentum mauris consectetur a. Pellentesque suscipit gravida est, vel convallis quam mattis quis. Vestibulum dolor tellus, bibendum sed elementum sit amet, interdum id lorem. Sed a nunc est. Maecenas quis felis a nisi auctor maximus a nec nisi. Suspendisse feugiat felis ligula, vitae placerat ipsum ultricies in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque malesuada nisl vel tempor. Integer commodo enim a quam mollis elementum. Curabitur a tellus a est consequat gravida. Nunc sed volutpat nunc. Ut massa neque, auctor at lorem vel, placerat pulvinar justo. Vestibulum elementum id ex quis placerat. Nunc tempor ac purus sit amet rhoncus. Vestibulum et congue lectus. Vestibulum ut ultrices libero. Phasellus lacinia elit augue, et fermentum mauris consectetur a. Pellentesque suscipit gravida est, vel convallis quam mattis quis. Vestibulum dolor tellus, bibendum sed elementum sit amet, interdum id lorem. Sed a nunc est. Maecenas quis felis a nisi auctor maximus a nec nisi. Suspendisse feugiat felis ligula, vitae placerat ipsum ultricies in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
        <img src={logo} alt="logo" />
        <p>One more</p>
    </div>
    </>
  );
};

export default App;