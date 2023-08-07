import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import TypeWriterEffect from 'react-typewriter-effect';
import MouseParticles from 'react-mouse-particles'
class Header extends Component {
  
  render() {
    
    if (!this.props.data) return null;

    
    const name = this.props.data.name;
    const description = this.props.data.description;

    const networks = this.props.data.social.map(function (network) {
      return (
        // <li key={network.name}>
        //   <a href={network.url}>
        //     <i className={network.className}></i>
        //   </a>
        // </li>
        <li key={network.name}>
          <a  href={network.url} target="_blank" className="button btn social-btn">
            <i className={network.className}></i>
          </a>
        </li>
        
      );
    });
    
    


    return (
      <header id="home">
        <ParticlesBg num={30} type="lines" bg={true} />
        <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">
              Hi, I'm  
              <TypeWriterEffect
                textStyle={{
                  textAlign: 'center',
                  fontSize: '1.25em',
                }}

                multiText={[
                  'Deependra',
                  'Developer',
                  'Deependra'
                  
                  
                ]}
                
                multiTextDelay={2000}
                
                startDelay={100}
                cursorColor="white"
                text={name}
                typeSpeed={200}
                
              />
              </h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                
                {/* <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a> */}
                {networks}
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
