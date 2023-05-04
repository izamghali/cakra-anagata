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
// navbar
let navbarHome = document.getElementById('navbarListHome');
let navbarAbout = document.getElementById('navbarListAbout');
let navbarProduct = document.getElementById('navbarDropdown');
let navbarTeam = document.getElementById('navbarListTeam');
let navbarPartner = document.getElementById('navbarListPartners');
let navbarLanguage = document.getElementById('languageDropdown');
let navbarContact = document.getElementById('navbarListContact');
let navbarAgriPro = document.getElementById('navbarAgriPro');
let navbarManuPro = document.getElementById('navbarManuPro');

// about
let ctaWhatsApp = document.getElementById('ctaWhatsApp');
let welcomingCompany = document.getElementById('welcomingCompany');
let aboutMain = document.getElementById('aboutMainLess');
let aboutVision = document.getElementById('aboutVision');
let aboutMission = document.getElementById('aboutMissionLess');
let aboutMissionHeading = document.getElementById('aboutMissionHeading');
let aboutVisionHeading = document.getElementById('aboutVisionHeading');

// company values
let valueHeading = document.getElementById('valueHeading');
let valueIntegrity = document.getElementById('valueIntegrity');
let valuePrecise = document.getElementById('valuePrecise');
let valueAffective = document.getElementById('valueAffective');
let valueIntegrityHeading = document.getElementById('valueIntegrityHeading');
let valuePreciseHeading = document.getElementById('valuePreciseHeading');
let valueAffectiveHeading = document.getElementById('valueAffectiveHeading');

// products
// product headings
let productHeading = document.getElementById('productHeading');
let productAgriHeading = document.getElementById('productAgriHeading');
let productManuHeading = document.getElementById('productManuHeading');

// product cards
// honey
let productHoneyHeading = document.getElementById('productHoneyHeading');
let productHoney = document.getElementById('productHoney');

// potato
let productPotatoHeading = document.getElementById('productPotatoHeading');
let productPotato = document.getElementById('productPotato');

// coffee
let productCoffeeHeading = document.getElementById('productCoffeeHeading');
let productCoffee = document.getElementById('productCoffee');

// corn
let productCornHeading = document.getElementById('productCornHeading');
let productCorn = document.getElementById('productCorn');
                        
// spices
let productSpicesHeading = document.getElementById('productSpicesHeading');
let productSpices = document.getElementById('productSpices');

// fertilizer
let productFertilizerHeading = document.getElementById('productFertilizerHeading');
let productFertilizer = document.getElementById('productFertilizer');

// pillows
let productPillowHeading = document.getElementById('productPillowHeading');
let productPillow = document.getElementById('productPillow');

// chicken
let productChickenHeading = document.getElementById('productChickenHeading');
let productChicken = document.getElementById('productChicken');

// candle
let productCandleHeading = document.getElementById('productCandleHeading');
let productCandle = document.getElementById('productCandle');

// sawdust
let productSawdustHeading = document.getElementById('productSawdustHeading');
let productSawdust = document.getElementById('productSawdust');

// cosmetic
let productCosmeticHeading = document.getElementById('ProductCosmeticHeading');
let productCosmetic = document.getElementById('productCosmetic');

// ceramics
let productCeramicHeading = document.getElementById('productCeramicHeading');
let productCeramic = document.getElementById('productCeramic');

// partner
let partnerHeading = document.getElementById('partnerHeading');

// why us
let whyHeading = document.getElementById('whyHeading');
let whyQualityHeading = document.getElementById('whyQualityHeading');
let whyPricingHeading1 = document.getElementById('whyPricingHeading1');
let whyPricingHeading2 = document.getElementById('whyPricingHeading2');
let whyCsHeading1 = document.getElementById('whyCsHeading1');
let whyCsHeading2 = document.getElementById('whyCsHeading2');
let whyGlobalHeading = document.getElementById('whyGlobalHeading');
let whyQuality = document.getElementById('whyQuality');
let whyPricing = document.getElementById('whyPricing');
let whyCs = document.getElementById('whyCs');
let whyGlobal = document.getElementById('whyGlobal');

// team
let teamHeading = document.getElementById('teamHeading');

// footer
let footerAboutHeading = document.getElementById('footerAboutHeading');
let footerAbout = document.getElementById('footerAbout');
let footerAddress = document.getElementById('footerAddress');


// english 
function defaultLanguage() {
  // navbar
  navbarHome.innerHTML = 'Home';
  navbarAbout.innerHTML = 'About';
  navbarProduct.innerHTML = 'Products';
  navbarTeam.innerHTML = 'Team';
  navbarPartner.innerHTML = 'Partners';
  navbarLanguage.innerHTML = 'Language';
  navbarContact.innerHTML = 'Contact Us';
  navbarAgriPro.innerHTML = 'Agricultural Products';
  navbarManuPro.innerHTML = 'Manufacture Products';
  
  // about
  ctaWhatsApp.innerHTML = 'Contact Us  <img src="./assets/logo/whatsapp-logo.png" alt="">';
  welcomingCompany.innerHTML = 'Welcome to';
  aboutMain.innerHTML = 'CV. Cakra Anagata Gemilang is a company engaged in Export-Import and General Trading, located in Majalengka, West Java with a huge network of any commodity suppliers in Indonesia and worldwide.<span style="display: none;" id="aboutMainMore"> Our company has complete license and legality as a Export-Import and General Trading company. Our company also fully supported and cooperates with other companies to help farmers, breeders, SMEs, to be able to market their products nationally and worldwide CV. Cakra Anagata Gemilang very selective when choosing our suppliers and dealers. We deeply hold on to our company core values, which are: Integrity, Quality, Commitment, and Trust.</span>';
  aboutVision.innerHTML = 'To become a leading global exporter and importer, recognized for our commitment to ethical business practices, exceptional customer service, and the delivery of high-quality products at competitive prices.';
  aboutMission.innerHTML = 'Our mission is to provide our customers with the best possible service and products, by leveraging our extensive network of suppliers and partners around the world.\
  <span style="display: none;" id="aboutMissionMore">\
  We strive to exceed our customers\' expectations by delivering superior quality products and services, on time and within budget. We are committed to conducting our business with integrity, transparency, and social responsibility, while continuously improving our operations to ensure sustainable growth for our stakeholders. We aim to be a trusted partner for our customers, suppliers, and employees, creating long-term relationships based on mutual trust and respect.\
  </span>';
  aboutVisionHeading.innerHTML = 'Vision';
  aboutMissionHeading.innerHTML = 'Mission';
  
  // company values
  valueHeading.innerHTML = 'Company Values';
  valueIntegrityHeading.innerHTML = 'Integrity';
  valuePreciseHeading.innerHTML = 'Precise';
  valueAffectiveHeading.innerHTML = 'Affective';
  valueIntegrity.innerHTML = 'Conducting business with honesty, transparency, and ethical practices.\
  <span style="display: none;">This includes being truthful about product specifications, pricing, and delivery timelines, as well as adhering to all legal and regulatory requirements. It also means treating all stakeholders, including customers, suppliers, employees, and the community, with respect and fairness. By upholding high standards of integrity, the company can build trust and establish a positive reputation in the marketplace, which is essential for long-term success.</span>'
  valuePrecise.innerHTML = 'Paying close attention to details and ensuring accuracy in all aspects of the business.\
  <span style="display: none;">This requires careful planning, effective communication, and the use of advanced technologies and systems to minimize errors and delays. By being precise, the company can improve efficiency, reduce costs, and enhance customer satisfaction, which can lead to repeat business and referrals.</span>'
  valueAffective.innerHTML = 'Being responsive and proactive in meeting customer needs and expectations.\
  <span style="display: none;">This requires understanding the unique requirements of each customer, including their cultural, linguistic, and logistical preferences. It also means being flexible and adaptable to changing market conditions and customer demands. By being affective, the company can build strong relationships with customers, differentiate itself from competitors, and increase customer loyalty and retention.</span>';
  
  // products
  // heading
  productHeading.innerHTML = 'What We Offer';
  productAgriHeading.innerHTML = 'Agricultural Products';
  productManuHeading.innerHTML = 'Manufacture Products'

  // product cards
  productHoneyHeading.innerHTML = 'Natural Wild Honey';
  productHoney.innerHTML = 'Indonesia is known for its diverse flora and fauna, which produces a wide range of natural wild honey.\
                          <span style="display: none;">It is harvested from forests and other natural habitats, and are known for their unique flavors and health benefits. Indonesian natural wild honeys include varieties such as honey from the Riau rainforest, Java jungle honey, and Tualang honey from North Sumatra.</span>'

  productPotatoHeading.innerHTML = 'Potato';
  productPotato.innerHTML = 'Indonesian potatoes are known for their high quality and are in high demand both domestically and internationally.\
                          <span style="display: none;">It has variety of potatoes, including large and small sized potatoes, which are used in a variety of dishes such as french fries, mashed potatoes, and potato chips.</span>';

  productCoffeeHeading.innerHTML = 'Robusta and Arabica (Temanggung Coffee)';
  productCoffee.innerHTML = 'Indonesia is one of the largest producers of coffee in the world, and is known for its high-quality Robusta and Arabica beans. \
                          <span style="display: none;">Temanggung, located in Central Java, is a region that produces some of the best coffee in Indonesia. Temanggung coffee has a unique taste and aroma, and is highly sought after by coffee connoisseurs.</span>';

  productCornHeading.innerHTML = 'Sweet Corn';
  productCorn.innerHTML = 'Indonesian sweet corn is a popular snack and cooking ingredient, known for its sweet and juicy taste.\
                          <span style="display: none;">It is grown in many regions of the country and is available both fresh and frozen. It is a versatile ingredient used in a variety of dishes such as soup, salad, and as a side dish.</span>';

  productSpicesHeading.innerHTML = 'Spices';
  productSpices.innerHTML = 'Indonesia is a land of spices, and produces a wide variety of high-quality spices, such as nutmeg, cinnamon, cloves, and turmeric.\
                          <span style="display: none;">They are known for their unique flavors and aroma, and are used in many international cuisines. These spices are also widely used in traditional Indonesian dishes, such as rendang, sate, and gulai.</span>'

  productFertilizerHeading = 'Fertilizer, Decomposer, & Pesticide';
  productFertilizer.innerHTML = 'Our fertilizers, pesticides, and decomposers that originally from Indonesia have been found to be effective in improving soil fertility, controlling pests, and enhancing crop yields.\
                        <span style="display: none;">However, their effectiveness depends on various factors, and farmers need to use them in conjunction with good farming practices to achieve the best results.</span>';

  productPillowHeading.innerHTML = 'Pillows, Bolsters, Towels, and other textile products';
  productPillow.innerHTML = 'Indonesia has a thriving textile industry that produces a wide range of products such as pillows, bolsters, towels, and other home textiles. \
                          <span style="display: none;">These products are known for their high quality and beautiful designs, and are made from natural fibers such as cotton, silk, and linen. Indonesian textiles are popular both domestically and internationally.';

  productChickenHeading.innerHTML = 'Halal Frozen Chicken';
  productChicken.innerHTML = 'Indonesia is one of the largest producers of halal chicken in the world, and exports to many countries around the globe.\
                          <span style="display: none;">Indonesian halal frozen chicken is known for its high quality and strict adherence to halal standards. The chickens are raised in a natural environment and are free from any artificial hormones or antibiotics.</span>';

  productCandleHeading.innerHTML = 'Homemade Scented Candles';
  productCandle.innerHTML = 'Indonesian scented candles are handcrafted and made from natural materials such as soy wax and essential oils.\
                          <span style="display: none;">These candles come in a wide range of scents such as vanilla, lavender, and citrus, and are known for their long-lasting fragrance and beautiful packaging. They make a perfect gift or decoration for any occasion.</span>';

  productSawdustHeading.innerHTML = 'Sawdust and Shisha Briquette';
  productSawdust.innerHTML = 'Indonesia produces high-quality sawdust and shisha briquettes made from natural materials such as coconut shell and wood chips.\
                          <span style="display: none;">These briquettes are used for grilling and smoking food, and are known for their high heat output and long burning time. They are a popular choice among barbeque enthusiasts and are exported to many countries around the world.</span>';

  productCosmeticHeading.innerHTML = 'Cosmetics & Body Care';
  productCosmetic.innerHTML = 'Indonesia has a rich tradition of using natural ingredients for cosmetic and body care products.\
                          <span style="display: none;">Many Indonesian cosmetic and body care products are made from natural materials such as coconut oil, honey, and rice flour. These products are known for their effectiveness and are often used in spas and salons around the world.</span>';

  productCeramicHeading.innerHTML = 'Ceramics';
  productCeramic.innerHTML = 'Indonesian ceramics are known for their unique designs and beautiful craftsmanship.\
  <span style="display: none;">They are made from natural materials such as clay and are available in a wide range of shapes and sizes. Indonesian ceramics are popular both domestically and internationally, and are often used as decorative items or for serving food and drinks.</span>';

  // partner
  partnerHeading.innerHTML = 'Our Partners';

  // why us
  whyHeading.innerHTML = 'Why Us';
  whyQualityHeading.innerHTML = 'Quality Products';
  whyPricingHeading1.innerHTML = 'Competitive';
  whyPricingHeading2.innerHTML = 'Pricing';
  whyCsHeading1.innerHTML = 'Exceptional';
  whyCsHeading2.innerHTML = 'Customer Service';
  whyGlobalHeading.innerHTML = 'Global Reach';
  whyQuality.innerHTML = 'We offer a wide range of high-quality products sourced from trusted suppliers around the world.\
                      <span style="display: none;">Our products undergo rigorous quality control measures to ensure that they meet the highest standards of excellence, giving our customers peace of mind and confidence in their purchases.</span>'
  whyPricing.innerHTML = 'We strive to offer our customers the most competitive pricing possible, without compromising on quality or service.\
                      <span style="display: none;">Our extensive network of suppliers and partners enables us to negotiate favorable terms, which we pass on to our customers, allowing them to achieve cost savings and maximize their profitability.</span>'
  whyCs.innerHTML = 'Our team of experienced professionals is dedicated to providing exceptional customer service and support at every stage of the transaction.\
                      <span style="display: none;">We work closely with our customers to understand their unique needs and requirements, and we tailor our services to meet their specific demands. Our goal is to exceed our customers\' expectations and ensure their complete satisfaction.</span>'                   
  whyGlobal.innerHTML = 'We have a global network of suppliers and partners, which enables us to offer our customers access to a wide range of products and markets.\
                      <span style="display: none;">Whether our customers are looking to source products from a specific region or expand their business to new markets, we have the expertise and resources to help them achieve their goals. Our global reach also means that we can provide our customers with the latest market trends and insights, giving them a competitive edge in the industry.</span>'

  // team
  teamHeading.innerHTML = 'Meet The Team';

  // footer
  footerAddress.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">\
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>\
  </svg>  address';
  footerAboutHeading.innerHTML = 'About Us';
  footerAbout.innerHTML = 'We are CV. Cakra Anagata Gemilang is a company that can provide for all your needs to help grow your company. We are sure of our people\'s quality and experiences that can make huge benefits for our business partners worldwide.\
  \
                As our motto to be a number one provider, we are highly determined to work with huge professionalism. Hence, we always try our best to satisfy our business partners.'
}

// bahasa
function translateBahasa() {
  
  // navbar
  navbarHome.innerHTML = 'Beranda';
  navbarAbout.innerHTML = 'Tentang';
  navbarProduct.innerHTML = 'Produk';
  navbarTeam.innerHTML = 'Tim';
  navbarPartner.innerHTML = 'Partner';
  navbarLanguage.innerHTML = 'Bahasa';
  navbarContact.innerHTML = 'Hubungi Kami';
  navbarAgriPro.innerHTML = 'Produk Agrikultur';
  navbarManuPro.innerHTML = 'Produk Manufaktur';
  
  // about
  ctaWhatsApp.innerHTML = 'Hubungi Kami  <img src="./assets/logo/whatsapp-logo.png" alt="">';
  welcomingCompany.innerHTML = 'Selamat Datang di';
  aboutMain.innerHTML = 'CV. Cakra Anagata Gemilang adalah perusahaan yang bergerak di bidang Ekspor-Impor dan Perdagangan Umum yang berlokasi di Majalengka, Jawa Barat dengan jaringan pemasok komoditas yang sangat luas di Indonesia dan di seluruh dunia.<span style="display: none;" id="aboutMainMore"> Perusahaan kami memiliki lisensi dan legalitas lengkap sebagai perusahaan Ekspor-Impor dan Perdagangan Umum. Perusahaan kami juga mendukung penuh dan bekerjasama dengan perusahaan lain untuk membantu petani, peternak, UKM, untuk dapat memasarkan produknya secara nasional dan dunia CV. Cakra Anagata Gemilang sangat selektif dalam memilih supplier dan dealer kami. Kami sangat berpegang pada nilai-nilai inti perusahaan kami, yaitu: Integritas, Kualitas, Komitmen, dan Kepercayaan.</span>';
  aboutVision.innerHTML = 'Untuk menjadi eksportir dan importir global terkemuka, diakui atas komitmen kami terhadap praktik bisnis yang etis, layanan pelanggan yang luar biasa, dan pengiriman produk berkualitas tinggi dengan harga bersaing.';
  aboutMission.innerHTML = 'Misi kami adalah menyediakan layanan dan produk terbaik bagi pelanggan kami, dengan memanfaatkan jaringan pemasok dan mitra kami yang luas di seluruh dunia.\
  <span style="display: none;" id="aboutMissionMore">\
  Kami berusaha untuk melampaui harapan pelanggan kami dengan memberikan produk dan layanan berkualitas unggul, tepat waktu dan sesuai anggaran. Kami berkomitmen untuk menjalankan bisnis kami dengan integritas, transparansi, dan tanggung jawab sosial, sambil terus meningkatkan operasi kami untuk memastikan pertumbuhan yang berkelanjutan bagi para pemangku kepentingan kami. Kami bertujuan untuk menjadi mitra tepercaya bagi pelanggan, pemasok, dan karyawan kami, menciptakan hubungan jangka panjang berdasarkan rasa saling percaya dan hormat.\
  </span>';
  aboutVisionHeading.innerHTML = 'Visi';
  aboutMissionHeading.innerHTML = 'Misi';
  
  // company values
  valueHeading.innerHTML = 'Nilai-nilai Perusahaan';
  valueIntegrityHeading.innerHTML = 'Integritas';
  valuePreciseHeading.innerHTML = 'Presisi';
  valueAffectiveHeading.innerHTML = 'Afektif';
  valueIntegrity.innerHTML = 'Menjalankan bisnis dengan kejujuran, transparansi, dan praktik yang etis.\
  <span style="display: none;">Ini termasuk jujur tentang spesifikasi produk, harga, dan jadwal pengiriman, serta mematuhi semua persyaratan hukum dan peraturan. Ini juga berarti memperlakukan semua pemangku kepentingan, termasuk pelanggan, pemasok, karyawan, dan masyarakat, dengan hormat dan adil. Dengan menjunjung tinggi standar integritas, perusahaan dapat membangun kepercayaan dan membangun reputasi positif di pasar, yang sangat penting untuk kesuksesan jangka panjang.</span>'
  valuePrecise.innerHTML = 'Memperhatikan detail dan memastikan keakuratan dalam semua aspek bisnis.\
  <span style="display: none;">Ini membutuhkan perencanaan yang cermat, komunikasi yang efektif, dan penggunaan teknologi dan sistem canggih untuk meminimalkan kesalahan dan penundaan. Dengan tepat, perusahaan dapat meningkatkan efisiensi, mengurangi biaya, dan meningkatkan kepuasan pelanggan, yang dapat menghasilkan bisnis berulang dan referensi.</span>'
  valueAffective.innerHTML = 'Bersikap tanggap dan proaktif dalam memenuhi kebutuhan dan harapan pelanggan.\
  <span style="display: none;">Hal ini membutuhkan pemahaman kebutuhan unik dari setiap pelanggan, termasuk preferensi budaya, bahasa, dan logistik mereka. Ini juga berarti fleksibel dan dapat beradaptasi dengan perubahan kondisi pasar dan permintaan pelanggan. Dengan menjadi afektif, perusahaan dapat membangun hubungan yang kuat dengan pelanggan, membedakan diri dari pesaing, dan meningkatkan loyalitas dan retensi pelanggan.</span>';
  
  // products
  // product headings
  productHeading.innerHTML = 'Apa Yang Kami Tawarkan';
  productAgriHeading.innerHTML = 'Produk Agrikultur';
  productManuHeading.innerHTML = 'Produk Manufaktur'

  // product cards
  productHoneyHeading.innerHTML = 'Madu Hutan Alami';
  productHoney.innerHTML = 'Indonesia dikenal dengan keanekaragaman flora dan faunanya penghasil madu hutan alam yang beraneka ragam.\
                          <span style="display: none;">Dipanen dari hutan dan habitat alami, dan dikenal karena rasa unik dan manfaat kesehatannya, madu hutan alami Indonesia mencakup madu dari hutan hujan Riau, madu hutan Jawa, dan madu Tualang dari Sumatera Utara.</span>'

  productPotatoHeading.innerHTML = 'Kentang';
  productPotato.innerHTML = 'Kentang Indonesia terkenal dengan kualitasnya yang tinggi dan banyak diminati baik di dalam negeri maupun internasional.\
                          <span style="display: none;">Ini memiliki variasi kentang, termasuk kentang berukuran besar dan kecil, yang digunakan dalam berbagai hidangan seperti kentang goreng, kentang tumbuk, dan keripik kentang.</span>';

  productCoffeeHeading.innerHTML = 'Robusta and Arabica (Kopi Temanggung)';
  productCoffee.innerHTML = 'Indonesia adalah salah satu penghasil kopi terbesar di dunia, dan dikenal dengan biji Robusta dan Arabica berkualitas tinggi.\
                          <span style="display: none;">Temanggung yang terletak di Jawa Tengah merupakan daerah penghasil beberapa kopi terbaik di Indonesia. Kopi temanggung memiliki rasa dan aroma yang khas, serta sangat diminati oleh para penikmat kopi.</span>';

  productCornHeading.innerHTML = 'Jagung Manis';
  productCorn.innerHTML = 'Jagung manis Indonesia adalah makanan ringan dan bahan memasak yang populer, dikenal dengan rasanya yang manis dan juicy.\
                          <span style="display: none;">Itu ditanam di banyak wilayah negara dan tersedia baik segar maupun beku. Ini adalah bahan serbaguna yang digunakan dalam berbagai hidangan seperti sup, salad, dan sebagai lauk.</span>';

  productSpicesHeading.innerHTML = 'Rempah-rempah';
  productSpices.innerHTML = 'Indonesia adalah tanah rempah-rempah yang menghasilkan beraneka rempah berkualitas tinggi, seperti pala, kayu manis, cengkeh, dan kunyit.\
                          <span style="display: none;">Dikenal karena rasa dan aromanya yang unik, dan digunakan di banyak masakan internasional, bumbunya digunakan dalam masakan tradisional Indonesia seperti rendang, sate, dan gulai.</span>'

  productFertilizerHeading = 'Pupuk, Dekomposer, & Pestisida';
  productFertilizer.innerHTML = 'Pupuk, pestisida, dan dekomposer Indonesia terbukti efektif dalam meningkatkan kesuburan tanah, mengendalikan hama, dan meningkatkan hasil panen.\
                        <span style="display: none;">Keefektifannya bergantung pada berbagai faktor, dan petani perlu menggunakannya dalam pertanian yang baik untuk mencapai hasil terbaik.</span>';

  productPillowHeading.innerHTML = 'Bantal, Guling, Handuk, dan produk tekstil lainnya';
  productPillow.innerHTML = 'Indonesia memiliki industri tekstil yang berkembang pesat yang menghasilkan berbagai macam produk seperti bantal, guling, handuk, dan tekstil rumah lainnya.\
                          <span style="display: none;">Produk-produk ini dikenal dengan kualitas tinggi dan desain yang indah, serta terbuat dari serat alami seperti katun, sutra, dan linen. Tekstil Indonesia populer baik di dalam negeri maupun internasional.';

  productChickenHeading.innerHTML = 'Ayam Beku Halal';
  productChicken.innerHTML = 'Indonesia adalah salah satu produsen ayam halal terbesar di dunia, dan mengekspor ke banyak negara di dunia.\
                          <span style="display: none;">Ayam beku halal Indonesia dikenal dengan kualitas tinggi dan kepatuhan yang ketat terhadap standar halal. Ayam dibesarkan di lingkungan alami dan bebas dari hormon buatan atau antibiotik.</span>';

  productCandleHeading.innerHTML = 'Lilin Aroma Buatan Rumahan';
  productCandle.innerHTML = 'Lilin beraroma Indonesia dibuat dengan tangan dan terbuat dari bahan alami seperti lilin kedelai dan minyak esensial.\
                          <span style="display: none;">Lilin ini hadir dalam berbagai macam aroma seperti vanila, lavender, dan jeruk, dan dikenal dengan aromanya yang tahan lama dan kemasannya yang cantik. Cocok untuk hadiah atau dekorasi di tiap kesempatan.</span>';

  productSawdustHeading.innerHTML = 'Serbuk Gergaji dan Arang Shisha';
  productSawdust.innerHTML = 'Indonesia menghasilkan serbuk gergaji dan arang shisha berkualitas. Terbuat dari bahan alami seperti tempurung kelapa & serpihan kayu.\
                          <span style="display: none;">Digunakan untuk memanggang dan mengasapi makanan. Populer di kalangan penggemar barbeque karena keluaran panasnya yang tinggi dan waktu pembakaran yang lama. Diekspor ke banyak negara.</span>';

  productCosmeticHeading.innerHTML = 'Kosmetik & Perawatan Tubuh';
  productCosmetic.innerHTML = 'Indonesia memiliki tradisi yang kaya akan bahan alami untuk produk kosmetik dan perawatan tubuh.\
                          <span style="display: none;">Banyak produk serupa terbuat dari bahan alami seperti minyak kelapa, madu, dan tepung beras. Produk-produk ini terkenal dengan keefektifannya dan sering digunakan di spa dan salon di seluruh dunia.</span>';

  productCeramicHeading.innerHTML = 'Keramik';
  productCeramic.innerHTML = 'Keramik Indonesia dikenal dengan desainnya yang unik dan pengerjaan yang indah.\
  <span style="display: none;">Terbuat dari bahan alami seperti tanah liat dan tersedia dalam berbagai bentuk dan ukuran, keramik Indonesia populer baik dalam negeri maupun internasional, dan sering digunakan sebagai dekorasi atau sajian makanan dan minuman.</span>';
  
  // partner
  partnerHeading.innerHTML = 'Partner Kami'

  // why us
  whyHeading.innerHTML = 'Mengapa Kami';
  whyQualityHeading.innerHTML = 'Produk Berkualitas';
  whyPricingHeading1.innerHTML = 'Harga';
  whyPricingHeading2.innerHTML = 'Kompetitif';
  whyCsHeading1.innerHTML = 'Layanan Pelanggan';
  whyCsHeading2.innerHTML = 'Yang Luar Biasa';
  whyGlobalHeading.innerHTML = 'Jangkauan Global';
  whyQuality.innerHTML = 'Kami menawarkan berbagai macam produk berkualitas tinggi yang bersumber dari pemasok tepercaya di seluruh dunia.\
                      <span style="display: none;">Produk kami menjalani langkah-langkah kontrol kualitas yang ketat untuk memastikan bahwa mereka memenuhi standar keunggulan tertinggi, memberi pelanggan kami ketenangan pikiran dan kepercayaan diri dalam pembelian mereka.</span>'
  whyPricing.innerHTML = 'Kami berusaha untuk menawarkan kepada pelanggan kami harga yang paling kompetitif, tanpa mengorbankan kualitas atau layanan.\
                      <span style="display: none;">Jaringan pemasok dan mitra kami yang luas memungkinkan kami untuk menegosiasikan persyaratan yang menguntungkan, yang kami berikan kepada pelanggan kami, memungkinkan mereka mencapai penghematan biaya dan memaksimalkan keuntungan mereka.</span>'
  whyCs.innerHTML = 'Tim profesional kami yang berpengalaman berdedikasi untuk menyediakan layanan dan dukungan pelanggan yang luar biasa di setiap tahap transaksi.\
                      <span style="display: none;">Kami bekerja sama dengan pelanggan kami untuk memahami kebutuhan dan persyaratan unik mereka, dan kami menyesuaikan layanan kami untuk memenuhi permintaan khusus mereka. Tujuan kami adalah untuk melampaui harapan pelanggan kami dan memastikan kepuasan lengkap mereka.</span>'                   
  whyGlobal.innerHTML = 'Kami memiliki jaringan pemasok dan mitra global, yang memungkinkan kami untuk menawarkan pelanggan kami akses ke berbagai produk dan pasar.\
                      <span style="display: none;">Apakah pelanggan kami mencari sumber produk dari wilayah tertentu atau memperluas bisnis mereka ke pasar baru, kami memiliki keahlian dan sumber daya untuk membantu mereka mencapai tujuan mereka. Jangkauan global kami juga berarti bahwa kami dapat memberi pelanggan kami tren dan wawasan pasar terbaru, memberi mereka keunggulan kompetitif dalam industri ini.</span>'

  // team
  teamHeading.innerHTML = 'Perkenalkan Tim Kami';

  // footer
  footerAddress.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">\
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>\
                  </svg>  alamat';
  footerAboutHeading.innerHTML = 'Tentang Kami';
  footerAbout.innerHTML = 'Kami CV. Cakra Anagata Gemilang adalah perusahaan yang dapat menyediakan segala kebutuhan Anda untuk membantu mengembangkan perusahaan Anda. Kami yakin dengan kualitas dan pengalaman karyawan kami yang dapat memberikan manfaat besar bagi mitra bisnis kami di seluruh dunia.\
  \
                Sesuai motto kami untuk menjadi penyedia nomor satu, kami sangat bertekad untuk bekerja dengan profesionalisme yang tinggi. Oleh karena itu, kami selalu berusaha sebaik mungkin untuk memuaskan mitra bisnis kami.'
}

// spanish
function translateSpanish() {
  // navbar
  navbarHome.innerHTML = 'La Casa';
  navbarAbout.innerHTML = 'Acerca De';
  navbarProduct.innerHTML = 'Productos';
  navbarTeam.innerHTML = 'Equipo';
  navbarPartner.innerHTML = 'Socios';
  navbarLanguage.innerHTML = 'Idioma';
  navbarContact.innerHTML = 'Contacta con nosotros';
  navbarAgriPro.innerHTML = 'Productos agrícolas';
  navbarManuPro.innerHTML = 'Fabricación de productos';
  
  // about
  ctaWhatsApp.innerHTML = 'Contacta con nosotros  <img src="./assets/logo/whatsapp-logo.png" alt="">';
  welcomingCompany.innerHTML = 'Bienvenido a';
  aboutMain.innerHTML = 'CV. Cakra Anagata Gemilang es una empresa dedicada a la exportación, importación y comercio general, ubicada en Majalengka, Java Occidental, con una enorme red de proveedores de productos básicos en Indonesia y en todo el mundo.<span style="display: none;" id="aboutMainMore"> Nuestra empresa tiene licencia completa y legalidad como empresa de Exportación-Importación y Comercio General. Nuestra empresa también apoya totalmente y coopera con otras empresas para ayudar a los agricultores, criadores, PYMES, a poder comercializar sus productos a nivel nacional y mundial CV. Cakra Anagata Gemilang muy selectivo a la hora de elegir a nuestros proveedores y distribuidores. Nos aferramos profundamente a los valores fundamentales de nuestra empresa, que son: Integridad, Calidad, Compromiso y Confianza.</span>';
  aboutVision.innerHTML = 'Convertirnos en un exportador e importador líder a nivel mundial, reconocido por nuestro compromiso con las prácticas comerciales éticas, un servicio al cliente excepcional y la entrega de productos de alta calidad a precios competitivos.';
  aboutMission.innerHTML = 'Nuestra misión es proporcionar a nuestros clientes el mejor servicio y productos posibles, aprovechando nuestra amplia red de proveedores y socios en todo el mundo.\
  <span style="display: none;" id="aboutMissionMore">\
  Nos esforzamos por superar las expectativas de nuestros clientes mediante la entrega de productos y servicios de calidad superior, a tiempo y dentro del presupuesto. Estamos comprometidos a realizar nuestro negocio con integridad, transparencia y responsabilidad social, mientras mejoramos continuamente nuestras operaciones para garantizar un crecimiento sostenible para nuestros grupos de interés. Nuestro objetivo es ser un socio de confianza para nuestros clientes, proveedores y empleados, creando relaciones a largo plazo basadas en la confianza y el respeto mutuos.\
  </span>';
  aboutVisionHeading.innerHTML = 'Visión';
  aboutMissionHeading.innerHTML = 'Misión';
  
  // company values
  valueHeading.innerHTML = 'Valores de la empresa';
  valueIntegrityHeading.innerHTML = 'Integridad';
  valuePreciseHeading.innerHTML = 'Preciso';
  valueAffectiveHeading.innerHTML = 'Afectivo';
  valueIntegrity.innerHTML = 'Realizar negocios con honestidad, transparencia y prácticas éticas.\
  <span style="display: none;">Esto incluye ser veraz sobre las especificaciones del producto, los precios y los plazos de entrega, así como cumplir con todos los requisitos legales y reglamentarios. También significa tratar a todas las partes interesadas, incluidos clientes, proveedores, empleados y la comunidad, con respeto y justicia. Al mantener altos estándares de integridad, la empresa puede generar confianza y establecer una reputación positiva en el mercado, lo cual es esencial para el éxito a largo plazo.</span>'
  valuePrecise.innerHTML = 'Prestar mucha atención a los detalles y garantizar la precisión en todos los aspectos del negocio.\
  <span style="display: none;">Esto requiere una planificación cuidadosa, una comunicación eficaz y el uso de tecnologías y sistemas avanzados para minimizar errores y retrasos. Al ser precisa, la empresa puede mejorar la eficiencia, reducir los costos y mejorar la satisfacción del cliente, lo que puede conducir a la repetición de negocios y referencias.</span>'
  valueAffective.innerHTML = 'Ser receptivo y proactivo para satisfacer las necesidades y expectativas de los clientes.\
  <span style="display: none;">Esto requiere comprender los requisitos únicos de cada cliente, incluidas sus preferencias culturales, lingüísticas y logísticas. También significa ser flexible y adaptable a las condiciones cambiantes del mercado y las demandas de los clientes. Al ser afectivo, la empresa puede construir relaciones sólidas con los clientes, diferenciarse de la competencia y aumentar la lealtad y retención de los clientes.</span>';
  
  // products
  // heading
  productHeading.innerHTML = 'Lo que ofrecemos';
  productAgriHeading.innerHTML = 'Productos agrícolas';
  productManuHeading.innerHTML = 'Fabricación de productos';

  // product cards
  productHoneyHeading.innerHTML = 'Miel Silvestre Natural';
  productHoney.innerHTML = 'Indonesia es conocida por su diversidad de flora y fauna, que produce una amplia gama de miel silvestre natural.\
                          <span style="display: none;"> Se cosecha de los bosques y otros hábitats naturales, y son conocidos por sus sabores únicos y beneficios para la salud. Las mieles silvestres naturales de Indonesia incluyen variedades como la miel de la selva tropical de Riau, la miel de la selva de Java y la miel de Tualang del norte de Sumatra.</span>'

  productPotatoHeading.innerHTML = 'Papa';
  productPotato.innerHTML = 'Las papas de Indonesia son conocidas por su alta calidad y tienen una gran demanda tanto a nivel nacional como internacional.\
                          <span style="display: none;"> Tiene variedad de papas, incluyendo papas grandes y pequeñas, que se utilizan en una variedad de platos como papas fritas, puré de papas y papas fritas.</span>';

  productCoffeeHeading.innerHTML = 'Robusta y Arábica (Café Temanggung)';
  productCoffee.innerHTML = 'Indonesia es uno de los mayores productores de café del mundo y es conocido por sus granos de Robusta y Arábica de alta calidad.\
                          <span style="display: none;"> Temanggung, located in Central Java, is a region that produces some of the best coffee in Indonesia. Temanggung coffee has a unique taste and aroma, and is highly sought after by coffee connoisseurs.</span>';

  productCornHeading.innerHTML = 'Maíz dulce';
  productCorn.innerHTML = 'El maíz dulce de Indonesia es un refrigerio popular y un ingrediente para cocinar, conocido por su sabor dulce y jugoso.\
                          <span style="display: none;"> Se cultiva en muchas regiones del país y está disponible tanto fresco como congelado. Es un ingrediente versátil que se utiliza en una variedad de platos, como sopas, ensaladas y como guarnición.</span>';

  productSpicesHeading.innerHTML = 'Especias';
  productSpices.innerHTML = 'Indonesia es una tierra de especias y produce una amplia variedad de especias de alta calidad, como la nuez moscada, la canela, el clavo y la cúrcuma.\
                          <span style="display: none;"> Son conocidos por sus sabores y aromas únicos, y se utilizan en muchas cocinas internacionales. Estas especias también se usan ampliamente en platos tradicionales de Indonesia, como rendang, sate y gulai.</span>'

  productFertilizerHeading = 'Fertilizante, descomponedor y pesticida';
  productFertilizer.innerHTML = 'Se ha descubierto que nuestros fertilizantes, pesticidas y descomponedores que se originaron en Indonesia son efectivos para mejorar la fertilidad del suelo, controlar plagas y mejorar el rendimiento de los cultivos.\
                        <span style="display: none;"> Sin embargo, su efectividad depende de varios factores, y los agricultores deben usarlos junto con buenas prácticas agrícolas para lograr los mejores resultados.</span>';

  productPillowHeading.innerHTML = 'Almohadas, Bolsters, Toallas y otros productos textiles';
  productPillow.innerHTML = 'Indonesia tiene una próspera industria textil que produce una amplia gama de productos como almohadas, almohadones, toallas y otros textiles para el hogar.\
                          <span style="display: none;"> Estos productos son conocidos por su alta calidad y hermosos diseños, y están hechos de fibras naturales como el algodón, la seda y el lino. Los textiles indonesios son populares tanto a nivel nacional como internacional.';

  productChickenHeading.innerHTML = 'Pollo Congelado Halal';
  productChicken.innerHTML = 'Indonesia es uno de los mayores productores de pollo halal del mundo y exporta a muchos países del mundo.\
                          <span style="display: none;"> El pollo congelado halal de Indonesia es conocido por su alta calidad y su estricto cumplimiento de los estándares halal. Los pollos se crían en un entorno natural y están libres de hormonas artificiales o antibióticos.</span>';

  productCandleHeading.innerHTML = 'Velas Aromáticas Caseras';
  productCandle.innerHTML = 'Las velas perfumadas de Indonesia están hechas a mano con materiales naturales como la cera de soja y los aceites esenciales.\
                          <span style="display: none;"> Estas velas vienen en una amplia gama de aromas, como vainilla, lavanda y cítricos, y son conocidas por su fragancia duradera y su hermoso empaque. Son un regalo perfecto o una decoración para cualquier ocasión.</span>';

  productSawdustHeading.innerHTML = 'Briquetas de aserrín y shisha';
  productSawdust.innerHTML = 'Indonesia produce aserrín de alta calidad y briquetas de shisha hechas de materiales naturales como cáscara de coco y astillas de madera.\
                          <span style="display: none;"> Estas briquetas se utilizan para asar y ahumar alimentos, y son conocidas por su alto rendimiento calorífico y su largo tiempo de combustión. Son una opción popular entre los entusiastas de la barbacoa y se exportan a muchos países del mundo.</span>';

  productCosmeticHeading.innerHTML = 'Cosméticos y Cuidado Corporal';
  productCosmetic.innerHTML = 'Indonesia tiene una rica tradición en el uso de ingredientes naturales para productos cosméticos y de cuidado corporal.\
                          <span style="display: none;"> Muchos productos cosméticos y para el cuidado del cuerpo de Indonesia están hechos de materiales naturales como el aceite de coco, la miel y la harina de arroz. Estos productos son conocidos por su eficacia y se utilizan a menudo en spas y salones de belleza de todo el mundo.</span>';

  productCeramicHeading.innerHTML = 'Cerámica';
  productCeramic.innerHTML = 'La cerámica de Indonesia es conocida por sus diseños únicos y su hermosa artesanía.\
  <span style="display: none;"> Están hechos de materiales naturales como la arcilla y están disponibles en una amplia gama de formas y tamaños. La cerámica indonesia es popular tanto a nivel nacional como internacional y, a menudo, se usa como elemento decorativo o para servir comidas y bebidas.</span>';

  // partner
  partnerHeading.innerHTML = 'Nuestros compañeros';

  // why us
  whyHeading.innerHTML = 'Por qué nosotros';
  whyQualityHeading.innerHTML = 'Productos de calidad';
  whyPricingHeading1.innerHTML = 'Precio ';
  whyPricingHeading2.innerHTML = 'Competitivo';
  whyCsHeading1.innerHTML = 'Servicio al ';
  whyCsHeading2.innerHTML = 'cliente excepcional';
  whyGlobalHeading.innerHTML = 'Alcance global';
  whyQuality.innerHTML = 'Ofrecemos una amplia gama de productos de alta calidad provenientes de proveedores confiables de todo el mundo.\
                      <span style="display: none;"> Nuestros productos se someten a rigurosos controles de calidad para garantizar que cumplan con los más altos estándares de excelencia, brindando a nuestros clientes tranquilidad y confianza en sus compras.</span>'
  whyPricing.innerHTML = 'Nos esforzamos por ofrecer a nuestros clientes los precios más competitivos posibles, sin comprometer la calidad o el servicio.\
                      <span style="display: none;"> Nuestra extensa red de proveedores y socios nos permite negociar términos favorables, que transmitimos a nuestros clientes, permitiéndoles lograr ahorros de costos y maximizar su rentabilidad.</span>'
  whyCs.innerHTML = 'Nuestro equipo de profesionales experimentados se dedica a brindar un servicio al cliente excepcional y soporte en cada etapa de la transacción.\
                      <span style="display: none;"> Trabajamos en estrecha colaboración con nuestros clientes para comprender sus necesidades y requisitos únicos, y adaptamos nuestros servicios para satisfacer sus demandas específicas. Nuestro objetivo es superar las expectativas de nuestros clientes y lograr su completa satisfacción.</span>'                   
  whyGlobal.innerHTML = 'Contamos con una red global de proveedores y socios, lo que nos permite ofrecer a nuestros clientes acceso a una amplia gama de productos y mercados.\
                      <span style="display: none;"> Ya sea que nuestros clientes busquen obtener productos de una región específica o expandir su negocio a nuevos mercados, contamos con la experiencia y los recursos para ayudarlos a lograr sus objetivos. Nuestro alcance global también significa que podemos brindarles a nuestros clientes las últimas tendencias y conocimientos del mercado, brindándoles una ventaja competitiva en la industria.</span>'

  // team
  teamHeading.innerHTML = 'Conocer al equipo';

  // footer
  footerAddress.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">\
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>\
  </svg>  DIRECCIÓN';
  footerAboutHeading.innerHTML = 'Sobre nosotros';
  footerAbout.innerHTML = 'Somos CV. Cakra Anagata Gemilang es una empresa que puede satisfacer todas sus necesidades para ayudar a hacer crecer su empresa. Estamos seguros de la calidad y las experiencias de nuestra gente que pueden generar grandes beneficios para nuestros socios comerciales en todo el mundo.\
  \
  Como nuestro lema para ser un proveedor número uno, estamos muy decididos a trabajar con gran profesionalismo. Por lo tanto, siempre hacemos todo lo posible para satisfacer a nuestros socios comerciales.'
}

// chinese
function translateChinese() {
  // navbar
  navbarHome.innerHTML = '家';
  navbarAbout.innerHTML = '关于';
  navbarProduct.innerHTML = '产品';
  navbarTeam.innerHTML = '团队';
  navbarPartner.innerHTML = '伙伴';
  navbarLanguage.innerHTML = '语言';
  navbarContact.innerHTML = '联系我们';
  navbarAgriPro.innerHTML = '农产品';
  navbarManuPro.innerHTML = '制造产品';
  
  // about
  ctaWhatsApp.innerHTML = '联系我们  <img src="./assets/logo/whatsapp-logo.png" alt="">';
  welcomingCompany.innerHTML = '欢迎来到';
  aboutMain.innerHTML = '简历。 Cakra Anagata Gemilang 是一家从事进出口和一般贸易的公司，位于西爪哇的 Majalengka, 在印度尼西亚和全球拥有庞大的商品供应商网络。<span style="display: none;" id="aboutMainMore"> 我公司作为进出口和一般贸易公司具有完整的许可证和合法性。 我们公司还全力支持并与其他公司合作，帮助农民、育种者、中小企业能够在全国和世界范围内销售他们的产品 CV。 在选择我们的供应商和经销商时，Cakra Anagata Gemilang 非常挑剔。 我们深深地坚持我们公司的核心价值观，即：诚信、质量、承诺和信任。</span>';
  aboutVision.innerHTML = '成为全球领先的出口商和进口商，以我们对道德商业实践、卓越的客户服务以及以具有竞争力的价格交付高质量产品的承诺而闻名。';
  aboutMission.innerHTML = '我们的使命是利用我们遍布全球的广泛供应商和合作伙伴网络，为我们的客户提供最好的服务和产品。\
  <span style="display: none;" id="aboutMissionMore">\
  我们努力通过按时并在预算范围内提供优质的产品和服务来超越客户的期望。 我们致力于以诚信、透明和社会责任的方式开展业务，同时不断改进我们的运营，以确保我们的利益相关者实现可持续增长。 我们的目标是成为客户、供应商和员工值得信赖的合作伙伴，在相互信任和尊重的基础上建立长期关系。\
  </span>';
  aboutVisionHeading.innerHTML = '想象';
  aboutMissionHeading.innerHTML = '使命';
  
  // company values
  valueHeading.innerHTML = '公司价值观';
  valueIntegrityHeading.innerHTML = '正直';
  valuePreciseHeading.innerHTML = '精确的';
  valueAffectiveHeading.innerHTML = '情感的';
  valueIntegrity.innerHTML = '以诚实、透明和符合道德规范的方式开展业务。\
  <span style="display: none;">这包括如实说明产品规格、定价和交付时间表，以及遵守所有法律和法规要求。 它还意味着尊重和公平对待所有利益相关者，包括客户、供应商、员工和社区。 通过坚持高标准的诚信，公司可以在市场上建立信任并树立良好的声誉，这对于长期成功至关重要。</span>'
  valuePrecise.innerHTML = '密切关注细节并确保业务各个方面的准确性。\
  <span style="display: none;">这需要仔细规划、有效沟通以及使用先进的技术和系统来最大程度地减少错误和延迟。 通过精确，公司可以提高效率、降低成本并提高客户满意度，从而带来重复业务和推荐。</span>'
  valueAffective.innerHTML = '积极主动地满足客户的需求和期望。这需要了解每个客户的独特需求，包括他们的文化、语言和物流偏好。 \
  <span style="display: none;">它还意味着要灵活适应不断变化的市场条件和客户需求。 通过情感，公司可以与客户建立牢固的关系，从竞争对手中脱颖而出，并提高客户忠诚度和保留率。</span>';
  
  // products
  // heading
  productHeading.innerHTML = '我们提供什么';
  productAgriHeading.innerHTML = '农产品';
  productManuHeading.innerHTML = '制造产品'

  // product cards
  productHoneyHeading.innerHTML = '天然野生蜂蜜';
  productHoney.innerHTML = '印度尼西亚以其多样化的动植物群而闻名，出产种类繁多的天然野生蜂蜜。\
                          <span style="display: none;">它采自森林和其他自然栖息地，以其独特的风味和健康益处而闻名。 印度尼西亚的天然野生蜂蜜包括来自廖内雨林的蜂蜜、爪哇丛林蜂蜜和来自北苏门答腊的图朗蜂蜜等品种。</span>'

  productPotatoHeading.innerHTML = '土豆';
  productPotato.innerHTML = '印度尼西亚马铃薯以其高品质而闻名，在国内外都有很高的需求。\
                          <span style="display: none;">它有各种土豆，包括大土豆和小土豆，用于各种菜肴，如炸薯条、土豆泥和薯片。</span>';

  productCoffeeHeading.innerHTML = '罗布斯塔和阿拉比卡咖啡（淡芒贡咖啡）';
  productCoffee.innerHTML = '印度尼西亚是世界上最大的咖啡生产国之一，以其优质的罗布斯塔咖啡豆和阿拉比卡咖啡豆而闻名。\
                          <span style="display: none;">位于爪哇中部的淡芒贡是出产印度尼西亚一些最好的咖啡的地区。 淡芒贡咖啡具有独特的口感和香气，深受咖啡鉴赏家的追捧。</span>';

  productCornHeading.innerHTML = '甜玉米';
  productCorn.innerHTML = '印尼甜玉米是一种受欢迎的小吃和烹饪原料，以其甜美多汁的味道而闻名。\
                          <span style="display: none;">它在该国许多地区种植，有新鲜和冷冻两种。 它是一种用途广泛的配料，可用于各种菜肴，如汤、沙拉和配菜。</span>';

  productSpicesHeading.innerHTML = '香料';
  productSpices.innerHTML = '印度尼西亚是香料之乡，盛产肉豆蔻、肉桂、丁香和姜黄等多种优质香料。\
                          <span style="display: none;">它们以其独特的风味和香气而闻名，被用于许多国际美食中。 这些香料也广泛用于印尼传统菜肴，如仁当、沙爹和古来。</span>'

  productFertilizerHeading = '肥料、分解剂和杀虫剂';
  productFertilizer.innerHTML = '我们的化肥、杀虫剂和分解剂原产于印度尼西亚，已被发现可有效改善土壤肥力、控制害虫和提高作物产量。\
                        <span style="display: none;">然而，它们的有效性取决于多种因素，农民需要将它们与良好的耕作方法结合使用才能取得最佳效果。</span>';

  productPillowHeading.innerHTML = '枕头、抱枕、毛巾和其他纺织品';
  productPillow.innerHTML = '印度尼西亚拥有蓬勃发展的纺织业，生产各种产品，如枕头、抱枕、毛巾和其他家用纺织品。\
                          <span style="display: none;">这些产品以其高品质和精美设计而闻名，由棉、丝和亚麻等天然纤维制成。 印尼纺织品在国内外都很受欢迎。';

  productChickenHeading.innerHTML = '清真冻鸡';
  productChicken.innerHTML = '印度尼西亚是世界上最大的清真鸡肉生产国之一，并出口到全球许多国家。\
                          <span style="display: none;">印尼清真冷冻鸡肉以其高品质和严格遵守清真标准而闻名。 这些鸡在自然环境中饲养，不含任何人工激素或抗生素。</span>';

  productCandleHeading.innerHTML = '自制香薰蜡烛';
  productCandle.innerHTML = '印度尼西亚香薰蜡烛采用大豆蜡和精油等天然材料手工制作而成。\
                          <span style="display: none;">这些蜡烛有多种香味，如香草、薰衣草和柑橘，并以其持久的香味和精美的包装而闻名。 它们是适合任何场合的完美礼物或装饰品。</span>';

  productSawdustHeading.innerHTML = '木屑和水烟煤球';
  productSawdust.innerHTML = '印度尼西亚生产由椰子壳和木屑等天然材料制成的优质锯末和水烟煤球。\
                          <span style="display: none;">这些煤球用于烧烤和烟熏食物，以其高热量输出和长燃烧时间而闻名。 它们是烧烤爱好者的热门选择，并出口到世界许多国家。</span>';

  productCosmeticHeading.innerHTML = '化妆品和身体护理';
  productCosmetic.innerHTML = '印度尼西亚有着在化妆品和身体护理产品中使用天然成分的丰富传统。\
                          <span style="display: none;">许多印尼化妆品和身体护理产品均采用天然材料制成，例如椰子油、蜂蜜和米粉。 这些产品以其有效性而闻名，经常用于世界各地的水疗中心和沙龙。</span>';

  productCeramicHeading.innerHTML = '陶瓷';
  productCeramic.innerHTML = '印度尼西亚陶瓷以其独特的设计和精美的工艺而闻名。\
  <span style="display: none;">它们由粘土等天然材料制成，有多种形状和尺寸可供选择。 印尼陶瓷在国内外都很受欢迎，经常被用作装饰品或盛装食物和饮料。</span>';

  // partner
  partnerHeading.innerHTML = '我们的伙伴';

  // why us
  whyHeading.innerHTML = '为什么是我们';
  whyQualityHeading.innerHTML = '优质产品';
  whyPricingHeading1.innerHTML = '有竞争力的价格';
  whyPricingHeading2.innerHTML = '';
  whyCsHeading1.innerHTML = '卓越的客户服务';
  whyCsHeading2.innerHTML = '';
  whyGlobalHeading.innerHTML = '全球范围';
  whyQuality.innerHTML = '我们提供来自世界各地值得信赖的供应商的各种优质产品。\
                      <span style="display: none;">我们的产品经过严格的质量控制措施，以确保它们符合最高的卓越标准，让我们的客户安心并放心购买。</span>'
  whyPricing.innerHTML = '我们努力为客户提供最具竞争力的价格，同时不影响质量或服务。\
                      <span style="display: none;">我们广泛的供应商和合作伙伴网络使我们能够谈判有利的条件，我们将这些条件传递给我们的客户，使他们能够节省成本并最大限度地提高盈利能力。</span>'
  whyCs.innerHTML = '我们经验丰富的专业团队致力于在交易的每个阶段提供卓越的客户服务和支持。\
                      <span style="display: none;">我们与客户密切合作，了解他们的独特需求和要求，并定制我们的服务以满足他们的特定需求。 我们的目标是超越客户的期望并确保他们完全满意。</span>'                   
  whyGlobal.innerHTML = '我们拥有全球供应商和合作伙伴网络，这使我们能够为客户提供进入广泛产品和市场的途径。\
                      <span style="display: none;">无论我们的客户是希望从特定地区采购产品还是将业务扩展到新市场，我们都有专业知识和资源来帮助他们实现目标。 我们的全球影响力还意味着我们可以为我们的客户提供最新的市场趋势和见解，使他们在行业中具有竞争优势。</span>'

  // team
  teamHeading.innerHTML = '认识团队';

  // footer
  footerAddress.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">\
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>\
  </svg>  地址';
  footerAboutHeading.innerHTML = '关于我们';
  footerAbout.innerHTML = '我们是简历。 Cakra Anagata Gemilang 是一家可以满足您所有需求以帮助您发展公司的公司。 我们确信我们员工的素质和经验可以为我们全球的业务合作伙伴带来巨大的利益。\
  \
  作为我们成为第一供应商的座右铭，我们下定决心要以高度的专业精神工作。 因此，我们总是尽力满足我们的业务合作伙伴。'
}

// french
function translateFrench() {
  // navbar
  navbarHome.innerHTML = 'Maison';
  navbarAbout.innerHTML = 'À propos';
  navbarProduct.innerHTML = 'Des produits';
  navbarTeam.innerHTML = 'Équipe';
  navbarPartner.innerHTML = 'Les partenaires';
  navbarLanguage.innerHTML = 'Langue';
  navbarContact.innerHTML = 'Contactez-nous';
  navbarAgriPro.innerHTML = 'Production agricole';
  navbarManuPro.innerHTML = 'Fabrication de produits';
  
  // about
  ctaWhatsApp.innerHTML = 'Contactez-nous  <img src="./assets/logo/whatsapp-logo.png" alt="">';
  welcomingCompany.innerHTML = 'Bienvenue à';
  aboutMain.innerHTML = 'CV. Cakra Anagata Gemilang est une société spécialisée dans l\'import-export et le commerce général, située à Majalengka, dans l\'ouest de Java, avec un vaste réseau de fournisseurs de produits de base en Indonésie et dans le monde.\
  <span style="display: none;" id="aboutMainMore"> Notre société a une licence et une légalité complètes en tant que société d\'exportation-importation et de commerce général. Notre entreprise soutient également pleinement et coopère avec d\'autres entreprises pour aider les agriculteurs, les éleveurs, les PME, à pouvoir commercialiser leurs produits au niveau national et mondial CV. Cakra Anagata Gemilang très sélectif lors du choix de nos fournisseurs et revendeurs. Nous sommes profondément attachés aux valeurs fondamentales de notre entreprise, qui sont : l\'intégrité, la qualité, l\'engagement et la confiance.</span>';
  aboutVision.innerHTML = 'Devenir un exportateur et importateur mondial de premier plan, reconnu pour notre engagement envers des pratiques commerciales éthiques, un service client exceptionnel et la livraison de produits de haute qualité à des prix compétitifs.';
  aboutMission.innerHTML = 'Notre mission est de fournir à nos clients le meilleur service et les meilleurs produits possibles, en tirant parti de notre vaste réseau de fournisseurs et de partenaires à travers le monde.\
  <span style="display: none;" id="aboutMissionMore">\
  Nous nous efforçons de dépasser les attentes de nos clients en fournissant des produits et services de qualité supérieure, dans les délais et dans les limites du budget. Nous nous engageons à mener nos activités avec intégrité, transparence et responsabilité sociale, tout en améliorant continuellement nos opérations pour assurer une croissance durable à nos parties prenantes. Nous visons à être un partenaire de confiance pour nos clients, fournisseurs et employés, en créant des relations à long terme basées sur la confiance et le respect mutuels.\
  </span>';
  aboutVisionHeading.innerHTML = 'Vision';
  aboutMissionHeading.innerHTML = 'Mission';
  
  // company values
  valueHeading.innerHTML = 'Valeurs de l\'entreprise';
  valueIntegrityHeading.innerHTML = 'Intégrité';
  valuePreciseHeading.innerHTML = 'Précise';
  valueAffectiveHeading.innerHTML = 'Affective';
  valueIntegrity.innerHTML = 'Faire des affaires avec honnêteté, transparence et pratiques éthiques.\
  <span style="display: none;">Cela implique d\'être honnête sur les spécifications des produits, les prix et les délais de livraison, ainsi que de respecter toutes les exigences légales et réglementaires. Cela signifie également traiter toutes les parties prenantes, y compris les clients, les fournisseurs, les employés et la communauté, avec respect et équité. En respectant des normes d\'intégrité élevées, l\'entreprise peut instaurer la confiance et établir une réputation positive sur le marché, ce qui est essentiel pour un succès à long terme.</span>'
  valuePrecise.innerHTML = 'Porter une attention particulière aux détails et assurer l\'exactitude dans tous les aspects de l\'entreprise.\
  <span style="display: none;">Cela nécessite une planification minutieuse, une communication efficace et l\'utilisation de technologies et de systèmes avancés pour minimiser les erreurs et les retards. En étant précise, l\'entreprise peut améliorer l\'efficacité, réduire les coûts et améliorer la satisfaction de la clientèle, ce qui peut entraîner des affaires répétées et des recommandations.</span>'
  valueAffective.innerHTML = 'Être réactif et proactif pour répondre aux besoins et aux attentes des clients.\
  <span style="display: none;">Cela nécessite de comprendre les exigences uniques de chaque client, y compris leurs préférences culturelles, linguistiques et logistiques. Cela signifie également être flexible et adaptable aux conditions changeantes du marché et aux demandes des clients. En étant affective, l\'entreprise peut établir des relations solides avec ses clients, se différencier de ses concurrents et accroître la fidélité et la rétention de ses clients.</span>';
  
  // products
  // heading
  productHeading.innerHTML = 'Ce que nous offrons';
  productAgriHeading.innerHTML = 'Production agricole';
  productManuHeading.innerHTML = 'Fabrication de produits';

  // product cards
  productHoneyHeading.innerHTML = 'Miel sauvage naturel';
  productHoney.innerHTML = 'L\'Indonésie est connue pour sa flore et sa faune diversifiées, qui produisent une large gamme de miel sauvage naturel.\
                          <span style="display: none;">Il est récolté dans les forêts et autres habitats naturels et est connu pour ses saveurs uniques et ses bienfaits pour la santé. Les miels sauvages naturels indonésiens comprennent des variétés telles que le miel de la forêt tropicale de Riau, le miel de la jungle de Java et le miel de Tualang du nord de Sumatra.</span>'

  productPotatoHeading.innerHTML = 'Pomme de terre';
  productPotato.innerHTML = 'Les pommes de terre indonésiennes sont connues pour leur haute qualité et sont très demandées tant au niveau national qu\'international.\
                          <span style="display: none;">Il propose une variété de pommes de terre, y compris des pommes de terre de grande et de petite taille, qui sont utilisées dans une variété de plats tels que les frites, la purée de pommes de terre et les croustilles.</span>';

  productCoffeeHeading.innerHTML = 'Robusta et Arabica (Café Temanggung)';
  productCoffee.innerHTML = 'L\'Indonésie est l\'un des plus grands producteurs de café au monde et est connue pour ses grains de Robusta et d\'Arabica de haute qualité.\
                          <span style="display: none;">Temanggung, située dans le centre de Java, est une région qui produit l\'un des meilleurs cafés d\'Indonésie. Le café Temanggung a un goût et un arôme uniques et est très recherché par les connaisseurs de café.</span>';

  productCornHeading.innerHTML = 'Le maïs sucré';
  productCorn.innerHTML = 'Le maïs sucré indonésien est une collation et un ingrédient de cuisine populaire, connu pour son goût sucré et juteux.\
                          <span style="display: none;">Il est cultivé dans de nombreuses régions du pays et est disponible à la fois frais et congelé. C\'est un ingrédient polyvalent utilisé dans une variété de plats tels que la soupe, la salade et comme plat d\'accompagnement.</span>';

  productSpicesHeading.innerHTML = 'Épices';
  productSpices.innerHTML = 'L\'Indonésie est une terre d\'épices et produit une grande variété d\'épices de haute qualité, telles que la muscade, la cannelle, les clous de girofle et le curcuma.\
                          <span style="display: none;">Ils sont connus pour leurs saveurs et leurs arômes uniques et sont utilisés dans de nombreuses cuisines internationales. Ces épices sont également largement utilisées dans les plats traditionnels indonésiens, tels que le rendang, le sate et le gulai.</span>'

  productFertilizerHeading = 'Engrais, décomposeur et pesticide';
  productFertilizer.innerHTML = 'Nos engrais, pesticides et décomposeurs originaires d\'Indonésie se sont avérés efficaces pour améliorer la fertilité des sols, lutter contre les ravageurs et améliorer les rendements des cultures.\
                        <span style="display: none;">Cependant, leur efficacité dépend de divers facteurs et les agriculteurs doivent les utiliser en conjonction avec de bonnes pratiques agricoles pour obtenir les meilleurs résultats.</span>';

  productPillowHeading.innerHTML = 'Oreillers, traversins, serviettes et autres produits textiles';
  productPillow.innerHTML = 'L\'Indonésie possède une industrie textile florissante qui produit une large gamme de produits tels que des oreillers, des traversins, des serviettes et d\'autres textiles de maison.\
                          <span style="display: none;">Ces produits sont connus pour leur haute qualité et leurs beaux designs, et sont fabriqués à partir de fibres naturelles telles que le coton, la soie et le lin. Les textiles indonésiens sont populaires tant au niveau national qu\'international.';

  productChickenHeading.innerHTML = 'Poulet congelé halal';
  productChicken.innerHTML = 'L\'Indonésie est l\'un des plus grands producteurs de poulet halal au monde et exporte vers de nombreux pays du monde.\
                          <span style="display: none;">Le poulet congelé halal indonésien est connu pour sa haute qualité et son strict respect des normes halal. Les poulets sont élevés dans un environnement naturel et sont exempts d\'hormones artificielles ou d\'antibiotiques.</span>';

  productCandleHeading.innerHTML = 'Bougies parfumées maison';
  productCandle.innerHTML = 'Les bougies parfumées indonésiennes sont fabriquées à la main et fabriquées à partir de matériaux naturels tels que la cire de soja et les huiles essentielles.\
                          <span style="display: none;">Ces bougies sont disponibles dans une large gamme de parfums tels que la vanille, la lavande et les agrumes, et sont connues pour leur parfum durable et leur bel emballage. Ils font un cadeau parfait ou une décoration pour toute occasion.</span>';

  productSawdustHeading.innerHTML = 'Sciure de bois et briquette de chicha';
  productSawdust.innerHTML = 'L\'Indonésie produit de la sciure de bois et des briquettes de chicha de haute qualité à base de matériaux naturels tels que la coque de noix de coco et les copeaux de bois.\
                          <span style="display: none;">Ces briquettes sont utilisées pour griller et fumer des aliments et sont connues pour leur puissance calorifique élevée et leur longue durée de combustion. Ils sont un choix populaire parmi les amateurs de barbecue et sont exportés dans de nombreux pays du monde.</span>';

  productCosmeticHeading.innerHTML = 'Cosmétiques & Soins du corps';
  productCosmetic.innerHTML = 'L\'Indonésie a une riche tradition d\'utilisation d\'ingrédients naturels pour les produits cosmétiques et de soins corporels.\
                          <span style="display: none;">De nombreux produits cosmétiques et de soins corporels indonésiens sont fabriqués à partir de matériaux naturels tels que l\'huile de noix de coco, le miel et la farine de riz. Ces produits sont connus pour leur efficacité et sont souvent utilisés dans les spas et les salons du monde entier.</span>';

  productCeramicHeading.innerHTML = 'Céramique';
  productCeramic.innerHTML = 'La céramique indonésienne est connue pour ses designs uniques et son magnifique savoir-faire.\
  <span style="display: none;">Ils sont fabriqués à partir de matériaux naturels tels que l\'argile et sont disponibles dans une large gamme de formes et de tailles. Les céramiques indonésiennes sont populaires à la fois au niveau national et international et sont souvent utilisées comme objets de décoration ou pour servir de la nourriture et des boissons.</span>';

  // partner
  partnerHeading.innerHTML = 'Nos partenaires';

  // why us
  whyHeading.innerHTML = 'Pourquoi nous';
  whyQualityHeading.innerHTML = 'Produits de qualité';
  whyPricingHeading1.innerHTML = 'Des prix ';
  whyPricingHeading2.innerHTML = 'compétitifs';
  whyCsHeading1.innerHTML = 'Service ';
  whyCsHeading2.innerHTML = 'client exceptionnel';
  whyGlobalHeading.innerHTML = 'Portée mondiale';
  whyQuality.innerHTML = 'Nous proposons une large gamme de produits de haute qualité provenant de fournisseurs de confiance du monde entier.\
                      <span style="display: none;">Nos produits sont soumis à des mesures de contrôle de qualité rigoureuses pour s\'assurer qu\'ils répondent aux normes d\'excellence les plus élevées, donnant à nos clients la tranquillité d\'esprit et la confiance dans leurs achats.</span>'
  whyPricing.innerHTML = 'Nous nous efforçons d\'offrir à nos clients les prix les plus compétitifs possibles, sans compromis sur la qualité ou le service.\
                      <span style="display: none;">Notre vaste réseau de fournisseurs et de partenaires nous permet de négocier des conditions avantageuses, que nous transmettons à nos clients, leur permettant de réaliser des économies et de maximiser leur rentabilité.</span>'
  whyCs.innerHTML = 'Notre équipe de professionnels expérimentés se consacre à fournir un service client et un soutien exceptionnels à chaque étape de la transaction.\
                      <span style="display: none;">Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et exigences uniques, et nous adaptons nos services pour répondre à leurs demandes spécifiques. Notre objectif est de dépasser les attentes de nos clients et d\'assurer leur entière satisfaction.</span>'                   
  whyGlobal.innerHTML = 'Nous disposons d\'un réseau mondial de fournisseurs et de partenaires, ce qui nous permet d\'offrir à nos clients l\'accès à une large gamme de produits et de marchés.\
                      <span style="display: none;">Que nos clients cherchent à s\'approvisionner en produits dans une région spécifique ou à étendre leurs activités à de nouveaux marchés, nous avons l\'expertise et les ressources pour les aider à atteindre leurs objectifs. Notre portée mondiale signifie également que nous pouvons fournir à nos clients les dernières tendances et perspectives du marché, leur donnant un avantage concurrentiel dans l\'industrie.</span>'

  // team
  teamHeading.innerHTML = 'Rencontrer l\'équipe';

  // footer
  footerAddress.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">\
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>\
  </svg>  adresse';
  footerAboutHeading.innerHTML = 'À propos de nous';
  footerAbout.innerHTML = 'Nous sommes CV. Cakra Anagata Gemilang est une entreprise qui peut répondre à tous vos besoins pour vous aider à développer votre entreprise. Nous sommes sûrs de la qualité et des expériences de nos employés qui peuvent apporter d\'énormes avantages à nos partenaires commerciaux dans le monde entier.\
  \
  Comme notre devise est d\'être un fournisseur numéro un, nous sommes très déterminés à travailler avec un grand professionnalisme. Par conséquent, nous essayons toujours de notre mieux pour satisfaire nos partenaires commerciaux.'
}

buttonEnglish.onclick = defaultLanguage;
buttonBahasa.onclick = translateBahasa;
buttonSpanish.onclick = translateSpanish;
buttonChinese.onclick = translateChinese;
buttonFrench.onclick = translateFrench;
