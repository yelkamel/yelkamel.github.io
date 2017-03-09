import React, { Component } from 'react';
import { prefixLink } from 'gatsby-helpers';

import Fullscreen from 'components/fullscreen';
import Meta from 'components/meta';
import Wrapper from 'components/wrapper';
import { Link } from 'react-router';
import Typist from 'react-typist';

import styles from './styles.module.css';
import TweenMax from 'gsap'
import Particles from 'react-particles-js';

const PARTICLES = {
  "particles": {
    "number": {
      "value": 5,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 300,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "top",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 800,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 800,
        "size": 80,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 300,
        "duration": 0.6
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

export default class Index extends Component {

  componentWillUpdate (nextProps, nextState){

  }


  componentDidMount() {
    /*
    var mySplitText = new SplitText(this.textAnimation, {type:"words,chars"})
    var chars = mySplitText.chars;
    var tl = new TimelineLite (mySplitText, chars)

    TweenLite.set(this.textAnimation, {perspective:400});
    tl.to(chars, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");
    */
  }

  componentWillReceiveProps (nextProps) {

  }

  render() {
    const CURSOR = {
  show: false,
  blink: true,
  element: '|',
  hideWhenDone: false,
  hideWhenDoneDelay: 1000,
  }
  return (
    <div>
      <Meta />
        <Fullscreen className={styles.intro} firstItem>
          <div className={styles.particlesStyle}>
            <Particles params={PARTICLES}/>
          </div>

          <Wrapper className={styles.inTheParticles}>
          <Typist
            avgTypingDelay= {40}
            cursor={CURSOR}>
          <h1>
            Salut, moi c'est Youcef.
            <br />
            <br />
            Je vous présente mes <Link className={styles.link} to={prefixLink('/work/')}>applications</Link>
            <br />
            <br />
            avec un petit <Link className={styles.link} to={prefixLink('/about/')}>résumé</Link>
            <br />
            <br />
            Et un moyen de me <Link className={styles.link} to={prefixLink('/contact/')}>contacter</Link>.
          </h1>
          </Typist>
          </Wrapper>

      </Fullscreen>
    </div>
  );
  }
}
