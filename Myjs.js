// anime({
//     targets: 'body',
//     translateX: 250,
//     rotate: '1turn',
//     backgroundColor: '#FFF',
//     duration: 3000
//   });


anime({
  targets: '.loop',
  translateX: 270,
  loop: 3,
  easing: 'easeInOutSine'
});

anime({
  targets: '.loop-infinity',
  translateX: 270,
  loop: true,
  easing: 'easeInOutSine'
});

anime({
  targets: '.loop-reverse',
  translateX: 270,
  loop: 3,
  direction: 'reverse',
  easing: 'easeInOutSine'
});

anime({
  targets: '.loop-reverse-infinity',
  translateX: 270,
  direction: 'reverse',
  loop: true,
  easing: 'easeInOutSine'
});

anime({
  targets: '.loop-alternate',
  translateX: 270,
  loop: 3,
  direction: 'alternate',
  easing: 'easeInOutSine'
});

anime({
  targets: '.loop-alternate-infinity',
  translateX: 270,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});


var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
  targets: '.ml1 .letter',
  scale: [0.3,1],
  opacity: [0,1],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 600,
  delay: (el, i) => 70 * (i+1)
}).add({
  targets: '.ml1 .line',
  scaleX: [0,1],
  opacity: [0.5,1],
  easing: "easeOutExpo",
  duration: 700,
  offset: '-=875',
  delay: (el, i, l) => 80 * (l - i)
}).add({
  targets: '.ml1',
  opacity: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1000
});