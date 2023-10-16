import "../styles/destination.css";
import arrow from "../images/icon-arrow.svg";
import right from "../images/icon-angle-right.svg";
import left from "../images/icon-angle-left.svg";
import hero from "../images/desktop-image-hero-1.jpg";
import logo from "../images/logo.svg";

function Main() {
  return (
    <main>
      <article className="section-one">
        <div className="content-one">
          <nav>
            <img src={logo} style={{ width: '30%' ,height:'30px', marginRight:'50px'}} />
            <ul>
              <li>home</li>
              <li>shop</li>
              <li>about</li>
              <li>contact</li>
            </ul>
          </nav>
          <img src={hero} />
        </div>
        <div className="content-two">
          <div className="content-two-inner">
            <p role="title" className="Discover">
              Discover innovative ways to decorate
            </p>

            <p className="main-content-two">
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>

            <div className="shop-now">
              <span> Shop now</span>
              <div className="arrow">
                <img src={arrow} />
              </div>
            </div>
          </div>
          <div className="slider">
            <div className="slider-inner">
              <div className="slider-left">
                <img src={left} />
              </div>
              <div className="slider-right">
                <img src={right} />
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="section-two">
        <div className="one"></div>
        <div className="two">
          <div className="two-content">
            <p className="section-two-content-two"> About our furniture</p>
            <p className="inner-section-two">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
        </div>
        <div className="three"></div>
      </article>
    </main>
  );
}

export default Main;
