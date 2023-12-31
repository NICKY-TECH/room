import "../styles/destination.css";
import arrow from "../images/icon-arrow.svg";
import right from "../images/icon-angle-right.svg";
import left from "../images/icon-angle-left.svg";
import about from "../images/image-about-dark.jpg";
import light from "../images/image-about-light.jpg";
import mobile from "../images/desktop-image-hero-3.jpg";
import mobileHero from "../images/mobile-image-hero-1.jpg"
import hero from "../images/desktop-image-hero-1.jpg";
import slides from "../data/Images.jsx";
import logo from "../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function Main() {
    const imageUrl = window.innerWidth > 639 ? hero : mobileHero;
    {console.log(imageUrl)}
  const [slide, setSlide] = useState(0);
  const [menu, setMenu] = useState("false");
  function prev() {
    if (slide === 0) {
      setSlide(0);
    } else if (slide > 0) {
      setSlide((e) => {
        return e - 1;
      });
    }
  }

  function next() {
    if (slide === slides.length - 1) {
      setSlide(0);
    } else if (slide < slides.length - 1) {
      setSlide((e) => {
        return e + 1;
      });
    }
  }

  function open() {
    // if (menu === "false") {
    //   setMenu("true");
    //  let overLay=document.getElementsByClassName("over-lay");
    //  overLay[0].style.display="block";
    // }
    // else if(menu==="true"){
    //   setMenu("false");
    //   let overLay=document.getElementsByClassName("over-lay");
    //   overLay[0].style.display="none";
    // }
    setMenu(!menu);
  }

  return (
    <main>
      <article className="section-one">
        <div className="content-one">
          <nav className="nav">
            <GiHamburgerMenu
              className="ham"
              style={{ width: "20%", height: "35px", color: "white" }}
              onClick={open}
            />
            <img
              src={logo}
              style={{ width: "15%", height: "35px", marginRight: "50px" }}
            />
            <ul>
              <li>home</li>
              <li>shop</li>
              <li>about</li>
              <li>contact</li>
            </ul>
          </nav>
          <img src={`${imageUrl}`} />

          {/* <img src={hero} /> */}
        </div>
        <div className="content-two">
          <div className="slider2">
            <div className="slider-inner">
              <div className="slider-left" onClick={prev}>
                <img src={left} style={{ width: "80%" }} />
              </div>
              <div className="slider-right" onClick={next}>
                <img src={right} style={{ width: "80%" }} />
              </div>
            </div>
          </div>
          {slides[slide].type === "text" ? (
            <div className="content-two-inner">
              <p role="title" className="Discover">
                Discover innovative ways to decorate
              </p>

              <p className="main-content-two">
                We provide unmatched quality, comfort, and style for property
                owners across the country. Our experts combine form and function
                in bringing your vision to life. Create a room in your own style
                with our collection and make your property a reflection of you
                and what you love.
              </p>

              <div className="shop-now">
                <span> Shop now</span>
                <div className="arrow">
                  <img src={arrow} />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {slides[slide].type === "image" ? (
            <div className="content-two-inner">
              <img src={slides[slide].url} />
              {console.log(slides[slide].url)}

              <div className="shop-now">
                <span> Shop now</span>
                <div className="arrow">
                  <img src={arrow} />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="slider">
            <div className="slider-inner">
              <div className="slider-left" onClick={prev}>
                <img src={left} style={{ width: "80%" }} />
              </div>
              <div className="slider-right" onClick={next}>
                <img src={right} style={{ width: "80%" }} />
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="section-two">
        <div className="one">
          <img src={about} />
        </div>
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
        <div className="three">
          <img src={light} />
        </div>
      </article>
      <section className={menu ? "over-lay-hidden" : "over-lay"}>
        <nav className="over-lay-nav">
          <AiOutlineClose
            className="close"
            style={{ height: "15%" }}
            onClick={open}
          />
          <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">shop</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
          </ul>
        </nav>
      </section>
    </main>
  );
}

export default Main;
