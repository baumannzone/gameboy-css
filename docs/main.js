const App = {
  init: function () {
    App.animate();
  },

  animate: function () {

    // From Modernizr
    function whichTransitionEvent () {
      let t;
      const el = document.createElement( 'fake' );
      const transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
      };

      for ( t in transitions ) {
        if ( el.style[ t ] !== undefined ) {
          return transitions[ t ];
        }
      }
    }

    // Play Sound
    function playSound () {
      console.log( 'Play sound!' );
      audio.currentTime = 0;
      audio.play();
    }

    const audio = document.querySelector( `audio` );
    const btnON = document.querySelector( `.btn-on` );
    const btnOFF = document.querySelector( `.btn-off` );
    const power = document.querySelector( `.power` );
    const text = document.querySelector( `.animated-text` );

    // Turn ON
    btnON.onclick = function () {

      // Button
      btnON.classList.add( 'btn-hide' );
      btnOFF.classList.remove( 'btn-hide' );

      // Power Led
      power.classList.add( 'power-on' );

      // Animate text & play sound
      const transitionEvent = whichTransitionEvent();
      text.classList.add( 'end' );
      text.addEventListener( transitionEvent, playSound );
    };


    btnOFF.onclick = function () {

      // Button
      btnON.classList.remove( 'btn-hide' );
      btnOFF.classList.add( 'btn-hide' );

      // Power Led
      power.classList.remove( 'power-on' );

      // Text
      text.classList.remove( 'end' );
    };

  }
};

App.init();