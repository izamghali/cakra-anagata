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


  // footer
  footerAddress.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">\
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>\
                  </svg>  alamat';
  footerAboutHeading.innerHTML = 'Tentang Kami';
  footerAbout.innerHTML = 'Kami CV. Cakra Anagata Gemilang adalah perusahaan yang dapat menyediakan segala kebutuhan Anda untuk membantu mengembangkan perusahaan Anda. Kami yakin dengan kualitas dan pengalaman karyawan kami yang dapat memberikan manfaat besar bagi mitra bisnis kami di seluruh dunia.\
  \
                Sesuai motto kami untuk menjadi penyedia nomor satu, kami sangat bertekad untuk bekerja dengan profesionalisme yang tinggi. Oleh karena itu, kami selalu berusaha sebaik mungkin untuk memuaskan mitra bisnis kami.'
}

buttonEnglish.onclick = defaultLanguage;
buttonBahasa.onclick = translateBahasa;
buttonSpanish.onclick = translateSpanish;
buttonChinese.onclick = translateChinese;
buttonFrench.onclick = translateFrench;
