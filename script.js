function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('nav').style.borderBottom = 'solid #D9D9D9';
    document.getElementById('mainNavbar').style.height = '4em';
    document.getElementById('brandPic').style.width = '3em';
  } else {
    document.querySelector('nav').style.borderBottom = 'solid white';
    document.getElementById('mainNavbar').style.height = '5.5em';
    document.getElementById('brandPic').style.width = '4em';
  }
}

window.onscroll = function() {scrollFunction()};
