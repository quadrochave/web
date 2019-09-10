/*!
 * animejs-transitions.js -https://github.com/quadrochave/web/
 * Version - 0.1
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2019 Henrique Lopes Barone
 */


function bounceInDown(element) {

  anime({
    targets: element,
    keyframes: [
      {opacity: 0, translateY: -3000, duration: 0},
      {opacity: 1, translateY: 25,  duration: 600},
      {translateY: -10, duration: 150},
      {translateY: 5, duration: 150},
      {translateY: 0, duration: 100}
    ],
    duration: 1,
    easing: 'easeOutCubic',
  });

}

function bounceInUp(element) {

  anime({
    targets: element,
    keyframes: [
      {opacity: 0, translateY: 3000, duration: 0},
      {opacity: 1, translateY: -25,  duration: 600},
      {translateY: 10, duration: 150},
      {translateY: -5, duration: 150},
      {translateY: 0, duration: 100}
    ],
    duration: 1,
    easing: 'easeOutCubic',
  });

}

function bounceInRight(element) {

  anime({
    targets: element,
    keyframes: [
      {opacity: 0, translateX: 3000, duration: 0},
      {opacity: 1, translateX: -25,  duration: 600},
      {translateX: 10, duration: 150},
      {translateX: -5, duration: 150},
      {translateX: 0, duration: 100}
    ],
    duration: 1,
    easing: 'easeOutCubic',
  });

}

function bounceInLeft(element) {

  anime({
    targets: element,
    keyframes: [
      {opacity: 0, translateX: -3000, duration: 0},
      {opacity: 1, translateX: 25,  duration: 600},
      {translateX: -10, duration: 150},
      {translateX: 5, duration: 150},
      {translateX: 0, duration: 100}
    ],
    duration: 1,
    easing: 'easeOutCubic',
  });

}
