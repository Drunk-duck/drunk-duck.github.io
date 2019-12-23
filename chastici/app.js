particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 100
        }
      },
      "color": {
        "value": "#589983", //random // #FFFFFF
      },
      "shape": {
        "type": "star", // circle edge triangle polygon star 
        "stroke": {
          "width": 5,
          "color": "#ffffd9"
        },
        "polygon": {
          "nb_sides": 10
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
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance":3,
        "color": "#ffffff",
        "opacity": 45,
        "width": 1000
      },
      "move": {
        "enable": true,
        "speed": 150,
        "direction": "bottom-left", // none top top-right right bottom-right bottom bottom-left left top-left
        "random": true,
        "straight": true,
        "out_mode": "out", // out bounce
        "attract": {
          "enable": true,
          "rotateX": 1600,
          "rotateY": 1200
        }
      }
    },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble" //grab bubble repulse
      },
      "onclick": {
        "enable": true,
        "mode": "bubble" // push remove bubble repulse
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 100,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 10,
        "duration": 0.3,
        "opacity": 1,
        "speed": 2
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 7
      },
      "remove": {
        "particles_nb": 2
      }
    }
  }
  }

);