function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('nav').style.borderBottom = 'solid #D9D9D9';
  } else {
    document.querySelector('nav').style.borderBottom = 'solid white';
  }
}

window.onscroll = function() {scrollFunction()};
