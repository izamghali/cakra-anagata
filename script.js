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

// value read-more button
let valueLess = ['Conducting business with honesty, transparency, and ethical practices.' ,'Paying close attention to details and ensuring accuracy in all aspects of the business.', 'Being responsive and proactive in meeting customer needs and expectations.']
let valueMore = [
  'Conducting business with honesty, transparency, and ethical practices. This includes being truthful about product specifications, pricing, and delivery timelines, as well as adhering to all legal and regulatory requirements. It also means treating all stakeholders, including customers, suppliers, employees, and the community, with respect and fairness. By upholding high standards of integrity, the company can build trust and establish a positive reputation in the marketplace, which is essential for long-term success.',
  'Paying close attention to details and ensuring accuracy in all aspects of the business, including order processing, documentation, logistics, and quality control. This requires careful planning, effective communication, and the use of advanced technologies and systems to minimize errors and delays. By being precise, the company can improve efficiency, reduce costs, and enhance customer satisfaction, which can lead to repeat business and referrals.', 
  'Being responsive and proactive in meeting customer needs and expectations. This requires understanding the unique requirements of each customer, including their cultural, linguistic, and logistical preferences. It also means being flexible and adaptable to changing market conditions and customer demands. By being affective, the company can build strong relationships with customers, differentiate itself from competitors, and increase customer loyalty and retention.'
]

// value integrity
let readMore1 = document.getElementById('readMoreIntegrity');
let readLess1 = document.getElementById('readLessIntegrity');
let valueTextIntegrity = document.getElementById('valueTextIntegrity');

function showText1() {
  valueTextIntegrity.innerHTML = valueMore[0];
  readLess1.style.display = 'block';
  readMore1.style.display = 'none';
}

function hideText1() {
  valueTextIntegrity.innerHTML = valueLess[0]; 
  readMore1.style.display = 'block';
  readLess1.style.display = 'none';
}

readMore1.onclick = showText1;
readLess1.onclick = hideText1;

// value precise
let readMore2 = document.getElementById('readMorePrecise');
let readLess2 = document.getElementById('readLessPrecise');
let valueTextPrecise = document.getElementById('valueTextPrecise');

function showText2() {
  valueTextPrecise.innerHTML = valueMore[1];
  readLess2.style.display = 'block';
  readMore2.style.display = 'none';
}

function hideText2() {
  valueTextPrecise.innerHTML = valueLess[1]; 
  readMore2.style.display = 'block';
  readLess2.style.display = 'none';
}

readMore2.onclick = showText2;
readLess2.onclick = hideText2;

// value effective
let readMore3 = document.getElementById('readMoreEffective');
let readLess3 = document.getElementById('readLessEffective');
let valueTextEffective = document.getElementById('valueTextEffective');

function showText3() {
  valueTextEffective.innerHTML = valueMore[2];
  readLess3.style.display = 'block';
  readMore3.style.display = 'none';
}

function hideText3() {
  valueTextEffective.innerHTML = valueLess[2]; 
  readMore3.style.display = 'block';
  readLess3.style.display = 'none';
}

readMore3.onclick = showText3;
readLess3.onclick = hideText3;


