function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('nav').style.borderBottom = 'solid #D9D9D9';
    // document.getElementsByClassName('main-navbar').style.height = '4em';
    document.getElementById('brandPic').style.width = '3em';
  } else {
    document.querySelector('nav').style.borderBottom = 'solid white';
    // document.getElementsByClassName('main-navbar').style.height = '5.5em';
    document.getElementById('brandPic').style.width = '4em';
  }
}

function showMenu() {
  // document.getElementsByClassName('navbar-collapse');
}

window.onscroll = function() {scrollFunction()};


