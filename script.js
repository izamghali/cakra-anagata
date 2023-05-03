// border bottm & nav size change after scroll
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('nav').style.borderBottom = 'solid #D9D9D9';
    document.getElementById('brandPic').style.width = '3em';
  } else {
    document.querySelector('nav').style.borderBottom = 'solid white';
    document.getElementById('brandPic').style.width = '4em';
  }
}

// const displayWhatsApp = document.getElementById('')

// const timeOut = setTimeout()

window.onscroll = function() {scrollFunction()};

// jQuery
$(document).ready(() => {
  
  // read more & read less button
  const $readMoreButtonProduct = $('.read-more-button');

  $readMoreButtonProduct.on("click", (event) => {
    $(event.currentTarget).prev().find("span").slideDown(250, "linear");
    $(event.currentTarget).hide();
    $(event.currentTarget).next().show();
  })
  
  $readMoreButtonProduct.next().on("click", (event) => {
    $(event.currentTarget).prev().prev().find("span").slideUp(250, "linear")
    $(event.currentTarget).hide();
    $(event.currentTarget).prev().show();
  })

});

// languages

// language options
let buttonBahasa = document.getElementById('optionBahasa');
let buttonEnglish = document.getElementById('optionEnglish');
let buttonSpanish = document.getElementById('optionSpanish');
let buttonChinese = document.getElementById('optionChinese');
let buttonFrench = document.getElementById('optionFrench');

// elements to translate
let navbarHome = document.getElementById('navbarListHome');
let navbarAbout = document.getElementById('navbarListAbout');
let navbarProduct = document.getElementById('navbarDropdown');
let navbarTeam = document.getElementById('navbarListTeam');
let navbarPartner = document.getElementById('navbarListPartners');
let navbarLanguage = document.getElementById('languageDropdown');
let navbarContact = document.getElementById('navbarListContact');

// english 
function defaultLanguage() {
  navbarHome.innerHTML = 'Home';
  navbarAbout.innerHTML = 'About';
  navbarProduct.innerHTML = 'Products';
  navbarTeam.innerHTML = 'Team';
  navbarPartner.innerHTML = 'Partner';
  navbarLanguage.innerHTML = 'Language';
  navbarContact.innerHTML = 'Contact Us';
}

// bahasa
function translateBahasa() {
  navbarHome.innerHTML = 'Beranda';
  navbarAbout.innerHTML = 'Tentang';
  navbarProduct.innerHTML = 'Produk';
  navbarTeam.innerHTML = 'Tim';
  navbarPartner.innerHTML = 'Partner';
  navbarLanguage.innerHTML = 'Bahasa';
  navbarContact.innerHTML = 'Kontak Kami';
  
}

buttonEnglish.onclick = defaultLanguage;
buttonBahasa.onclick = translateBahasa;
buttonSpanish.onclick = translateSpanish;
buttonChinese.onclick = translateChinese;
buttonFrench.onclick = translateFrench;

// product read more button
let agricultureDescriptionsMore = ['Indonesia is known for its diverse flora and fauna, which produces a wide range of natural wild honey. It is harvested from forests and other natural habitats, and are known for their unique flavors and health benefits. Indonesian natural wild honeys include varieties such as honey from the Riau rainforest, Java jungle honey, and Tualang honey from North Sumatra.'];
let agricultureDescriptionsLess = ['Indonesia is known for its diverse flora and fauna, which produces a wide range of natural wild honey.'];

let honeyDescField = document.getElementById('honeyDescField');

let readMoreHoney = document.getElementById('readMoreHoney');
let readLessHoney = document.getElementById('readLessHoney');

function showMore(event) {
  honeyDescField.innerHTML = agricultureDescriptionsMore[0];
}

readMoreHoney.onclick = showMore;
