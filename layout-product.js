let agriCol = document.getElementById('agriCol');
let manuCol = document.getElementById('manuCol');

function adjustScreen(screen) {
    if (screen.matches) {
        
        agriCol.innerHTML = `
             
        <!-- honey -->
        <div class="col d-flex justify-content-around flex-sm-nowrap">

            <div class="card product-card mt-3" style="width: 40.5; height: 25rem">
                <div class="zoom-wrapper">
                    <img src="./assets/products/agricultural/honey.jpg" loading="lazy" class="card-img-top" alt="Honey in a bottle">
                </div>
                <div class="card-body">
                    <h5 id="productHoneyHeading">Natural Wild Honey</h5>
                    <p class="card-text" id="productHoney">Indonesia is known for its diverse flora and fauna, which produces a wide range of natural wild honey.
                    <span style="display: none;">It is harvested from forests and other natural habitats, and are known for their unique flavors and health benefits. Indonesian natural wild honeys include varieties such as honey from the Riau rainforest, Java jungle honey, and Tualang honey from North Sumatra.</span>
                    </p>
                    <a class="accent-pointer read-more-button">Read More</a>
                    <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
                </div>
            </div>

        </div>
             
        <!-- potato -->
        <div class="col d-flex justify-content-around flex-sm-nowrap">

            <div class="card product-card mt-3" style="width: 40.5rem; height: 25rem;">
                <div class="zoom-wrapper">
                    <img src="./assets/products/agricultural/potato.jpg" loading="lazy" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 id="productPotatoHeading">Potato</h5>
                    <p class="card-text" id="productPotato">Indonesian potatoes are known for their high quality and are in high demand both domestically and internationally.
                    <span style="display: none;">It has variety of potatoes, including large and small sized potatoes, which are used in a variety of dishes such as french fries, mashed potatoes, and potato chips.</span>
                    </p>
                    <a class="accent-pointer read-more-button">Read More</a>
                    <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
                </div>
            </div>

        </div>
             
        <!-- coffee beans -->
        <div class="col d-flex justify-content-around flex-sm-nowrap">

            <div class="card product-card mt-3" style="width: 40.5rem; height: 25rem;">
                <div class="zoom-wrapper">
                      <img src="./assets/products/agricultural/robusta.jpg" loading="lazy" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                      <h5 id="productCoffeeHeading">Robusta and Arabica (Temanggung Coffee)</h5>
                      <p class="card-text" id="productCoffee">Indonesia is one of the largest producers of coffee in the world, and is known for its high-quality Robusta and Arabica beans. 
                        <span style="display: none;">Temanggung, located in Central Java, is a region that produces some of the best coffee in Indonesia. Temanggung coffee has a unique taste and aroma, and is highly sought after by coffee connoisseurs.</span>
                      </p>
                      <a class="accent-pointer read-more-button">Read More</a>
                      <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
                </div>
            </div>

        </div>
             
        <!-- sweet corn -->
        <div class="col d-flex justify-content-around flex-sm-nowrap">

            <div class="card product-card mt-3" style="width: 40.5rem; height: 25rem;">
                <div class="zoom-wrapper">
                      <img src="./assets/products/agricultural/sweet-corn.jpg" loading="lazy" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                      <h5 id="productCornHeading">Sweet Corn</h5>
                      <p class="card-text" id="productCorn">Indonesian sweet corn is a popular snack and cooking ingredient, known for its sweet and juicy taste. 
                        <span style="display: none;">It is grown in many regions of the country and is available both fresh and frozen. It is a versatile ingredient used in a variety of dishes such as soup, salad, and as a side dish.</span>
                      </p>
                      <a class="accent-pointer read-more-button">Read More</a>
                      <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
                </div>
            </div>

        </div>

        <!-- spices -->
        <div class="col d-flex justify-content-around flex-sm-nowrap">

            <div class="card product-card mt-3" style="width: 40.5rem; height: 25rem;">
                <div class="zoom-wrapper">
                      <img src="./assets/products/agricultural/spices.jpg" loading="lazy" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                      <h5 id="productSpicesHeading">Spices</h5>
                      <p class="card-text" id="productSpices">Indonesia is a land of spices, and produces a wide variety of high-quality spices, such as nutmeg, cinnamon, cloves, and turmeric. 
                        <span style="display: none;">They are known for their unique flavors and aroma, and are used in many international cuisines. These spices are also widely used in traditional Indonesian dishes, such as rendang, sate, and gulai.</span>
                      </p>
                      <a class="accent-pointer read-more-button">Read More</a>
                      <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
                </div>
            </div>

        </div>


        `

        manuCol.innerHTML = `
        <!-- pillows, bolsters, etc -->
        <div class="col d-flex justify-content-around">

                  <div class="card product-card mt-3" style="width: 40.5rem; height: 26rem">
                    <div class="zoom-wrapper">
                      <img src="./assets/products/manufacture/pillow.jpg" loading="lazy" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                      <h5 id="productPillowHeading">Pillows, Bolsters, Towels, and other textile products</h5>
                      <p class="card-text" id="productPillow">Indonesia has a thriving textile industry that produces a wide range of products such as pillows, bolsters, towels, and other home textiles. 
                        <span style="display: none;">These products are known for their high quality and beautiful designs, and are made from natural fibers such as cotton, silk, and linen. Indonesian textiles are popular both domestically and internationally.</span>
                      </p>
                      <a class="accent-pointer read-more-button">Read More</a>
                      <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
                    </div>
                  </div>
    
        </div>

        <!-- halal frozen chicken -->
        <div class="col d-flex justify-content-around">

                  <div class="card product-card mt-3" style="width: 40.5rem;">
                    <div class="zoom-wrapper">
                      <img src="./assets/products/manufacture/frozen-chicken.jpg" loading="lazy" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                      <h5 id="productChickenHeading">Halal Frozen Chicken</h5>
                      <p class="card-text" id="productChicken">Indonesia is one of the largest producers of halal chicken in the world, and exports to many countries around the globe. 
                        <span style="display: none;">Indonesian halal frozen chicken is known for its high quality and strict adherence to halal standards. The chickens are raised in a natural environment and are free from any artificial hormones or antibiotics.</span>
                      </p>
                      <a class="accent-pointer read-more-button">Read More</a>
                      <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
                    </div>
                  </div>
    
        </div>

        <!-- scented candles -->
        <div class="col d-flex justify-content-around">

                  <div class="card product-card mt-3" style="width: 40.5rem; height: 25rem">
                    <div class="zoom-wrapper">
                      <img src="./assets/products/manufacture/scented-candle.jpg" loading="lazy" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                      <h5 id="productCandleHeading">Homemade Scented Candles</h5>
                      <p class="card-text" id="productCandle">Indonesian scented candles are handcrafted and made from natural materials such as soy wax and essential oils. 
                        <span style="display: none;">These candles come in a wide range of scents such as vanilla, lavender, and citrus, and are known for their long-lasting fragrance and beautiful packaging. They make a perfect gift or decoration for any occasion.</span>
                      </p>
                      <a class="accent-pointer read-more-button">Read More</a>
                      <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
                    </div>
                  </div>
    
        </div>

        <!-- sawdust & shisha briquette -->
        <div class="col d-flex justify-content-around">

                  <div class="card product-card mt-3" style="width: 40.5rem; min-height: 25rem;">
                    <div class="zoom-wrapper">
                      <img src="./assets/products/manufacture/briquette.jpeg" loading="lazy" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                      <h5 id="productSawdustHeading">Sawdust and Shisha Briquette</h5>
                      <p class="card-text" id="productSawdust">Indonesia produces high-quality sawdust and shisha briquettes made from natural materials such as coconut shell and wood chips.  
                        <span style="display: none;">These briquettes are used for grilling and smoking food, and are known for their high heat output and long burning time. They are a popular choice among barbeque enthusiasts and are exported to many countries around the world.</span>
                      </p>
                      <a class="accent-pointer read-more-button">Read More</a>
                      <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
                    </div>
                  </div>
    
        </div>
        
        <!-- skincare -->
        <div class="col d-flex justify-content-around">

                  <div class="card product-card mt-3" style="width: 40.5rem; min-height: 25rem;">
                    <div class="zoom-wrapper">
                      <img src="./assets/products/manufacture/bodycare.jpg" loading="lazy" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                      <h5 id="ProductCosmeticHeading">Cosmetics & Body Care</h5>
                      <p class="card-text" id="productCosmetic">Indonesia has a rich tradition of using natural ingredients for cosmetic and body care products. 
                        <span style="display: none;">Many Indonesian cosmetic and body care products are made from natural materials such as coconut oil, honey, and rice flour. These products are known for their effectiveness and are often used in spas and salons around the world.</span>
                      </p>
                      <a class="accent-pointer read-more-button">Read More</a>
                      <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
                    </div>
                  </div>
    
        </div>
        
        <!-- ceramics -->
        <div class="col d-flex justify-content-around">

                  <div class="card product-card mt-3" style="width: 40.5rem; min-height: 25rem;">
                    <div class="zoom-wrapper">
                      <img src="./assets/products/manufacture/ceramics.jpg" loading="lazy" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                      <h5 id="productCeramicHeading">Ceramics</h5>
                      <p class="card-text" id="productCeramic">Indonesian ceramics are known for their unique designs and beautiful craftsmanship. 
                        <span style="display: none;">They are made from natural materials such as clay and are available in a wide range of shapes and sizes. Indonesian ceramics are popular both domestically and internationally, and are often used as decorative items or for serving food and drinks.</span>
                      </p>
                      <a class="accent-pointer read-more-button">Read More</a>
                      <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
                    </div>
                  </div>
                  </div>
    
        </div>
        
        <!-- wooden product -->
        <div class="col d-flex justify-content-around">

            <div class="card product-card mt-3" style="width: 40.5rem; min-height: 25rem;">
                <div class="zoom-wrapper">
                    <img src="./assets/products/manufacture/wooden-furniture.jpg" loading="lazy" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 id="productWoodenHeading">Wooden Product</h5>
                    <p class="card-text" id="productWooden">Indonesia is renowned for its production of high-quality wooden products, ranging from parquet flooring and wooden doors to ceilings, tables, and various other types of furniture. 
                    <span style="display: none;">These products are crafted using locally sourced wood, such as teak, mahogany, and rosewood, known for their durability and aesthetic appeal. Indonesian artisans and craftsmen employ traditional techniques alongside modern technology to create exquisite wooden pieces that cater to diverse design preferences. Overall, Indonesian wooden products, such as parquet, wooden doors, wooden ceilings, tables, and furniture, embody a harmonious blend of craftsmanship, natural materials, and design, contributing to the country's reputation as a hub for exquisite wooden creations.</span>
                    </p>
                    <a class="accent-pointer read-more-button">Read More</a>
                    <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
                </div>
            </div>
    
        </div>
        
        <!-- fertilizer -->
        <div class="col d-flex justify-content-around">

            <div class="card product-card mt-3" style="width: 40.5rem; min-height: 25rem;">
                <div class="zoom-wrapper">
                    <img src="./assets/products/manufacture/fertilizer.jpg" loading="lazy" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 id="productFertilizerHeading">Fertilizer, Decomposer, & Pesticide</h5>
                    <p class="card-text" id="productFertilizer">Our fertilizers, pesticides, and decomposers that originally from Indonesia have been found to be effective in improving soil fertility, controlling pests, and enhancing crop yields. 
                    <span style="display: none;">However, their effectiveness depends on various factors, and farmers need to use them in conjunction with good farming practices to achieve the best results.</span>
                    </p>
                    <a class="accent-pointer read-more-button">Read More</a>
                    <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
                </div>
            </div>
    
        </div>


        `

        document.body.style.backgroundColor = "#fff";
      
    } else {
        
        agriCol.innerHTML = `
          
        <div class="col d-flex justify-content-around flex-sm-nowrap">

            <!-- honey -->
            <div class="card product-card" style="width: 18rem; height: 25rem">
                <div class="zoom-wrapper">
                    <img src="./assets/products/agricultural/honey.jpg" loading="lazy" class="card-img-top" alt="Honey in a bottle">
                </div>
                <div class="card-body">
                    <h5 id="productHoneyHeading">Natural Wild Honey</h5>
                    <p class="card-text" id="productHoney">Indonesia is known for its diverse flora and fauna, which produces a wide range of natural wild honey.
                    <span style="display: none;">It is harvested from forests and other natural habitats, and are known for their unique flavors and health benefits. Indonesian natural wild honeys include varieties such as honey from the Riau rainforest, Java jungle honey, and Tualang honey from North Sumatra.</span>
                    </p>
                    <a class="accent-pointer read-more-button">Read More</a>
                    <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
                </div>
            </div>

            <!-- potato -->
            
            <div class="card product-card" style="width: 18rem; height: 25rem;">
                <div class="zoom-wrapper">
                    <img src="./assets/products/agricultural/potato.jpg" loading="lazy" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 id="productPotatoHeading">Potato</h5>
                    <p class="card-text" id="productPotato">Indonesian potatoes are known for their high quality and are in high demand both domestically and internationally.
                    <span style="display: none;">It has variety of potatoes, including large and small sized potatoes, which are used in a variety of dishes such as french fries, mashed potatoes, and potato chips.</span>
                    </p>
                    <a class="accent-pointer read-more-button">Read More</a>
                    <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
                </div>
            </div>

        </div>

        <div class="col d-flex justify-content-around mt-4 flex-sm-nowrap">
                
                <!-- coffee beans -->
                <div class="card product-card" style="width: 18rem; height: 25rem">
                <div class="zoom-wrapper">
                    <img src="./assets/products/agricultural/robusta.jpg" loading="lazy" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 id="productCoffeeHeading">Robusta and Arabica (Temanggung Coffee)</h5>
                    <p class="card-text" id="productCoffee">Indonesia is one of the largest producers of coffee in the world, and is known for its high-quality Robusta and Arabica beans. 
                    <span style="display: none;">Temanggung, located in Central Java, is a region that produces some of the best coffee in Indonesia. Temanggung coffee has a unique taste and aroma, and is highly sought after by coffee connoisseurs.</span>
                    </p>
                    <a class="accent-pointer read-more-button">Read More</a>
                    <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
                </div>
                </div>

                <!-- sweet corn -->
                <div class="card product-card" style="width: 18rem; height: 25rem">
                <div class="zoom-wrapper">
                    <img src="./assets/products/agricultural/sweet-corn.jpg" loading="lazy" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 id="productCornHeading">Sweet Corn</h5>
                    <p class="card-text" id="productCorn">Indonesian sweet corn is a popular snack and cooking ingredient, known for its sweet and juicy taste. 
                    <span style="display: none;">It is grown in many regions of the country and is available both fresh and frozen. It is a versatile ingredient used in a variety of dishes such as soup, salad, and as a side dish.</span>
                    </p>
                    <a class="accent-pointer read-more-button">Read More</a>
                    <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
                </div>
            </div>
        </div>

        <div class="col d-flex justify-content-around mt-4 flex-sm-nowrap">

                <!-- spices -->
                <div class="card product-card" style="width: 40.5rem;">
                <div class="zoom-wrapper">
                    <img src="./assets/products/agricultural/spices.jpg" loading="lazy" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 id="productSpicesHeading">Spices</h5>
                    <p class="card-text" id="productSpices">Indonesia is a land of spices, and produces a wide variety of high-quality spices, such as nutmeg, cinnamon, cloves, and turmeric. 
                    <span style="display: none;">They are known for their unique flavors and aroma, and are used in many international cuisines. These spices are also widely used in traditional Indonesian dishes, such as rendang, sate, and gulai.</span>
                    </p>
                    <a class="accent-pointer read-more-button">Read More</a>
                    <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
                </div>
                </div>

        </div>

        <div class="col d-flex justify-content-around mt-4 flex-sm-nowrap">

                <!-- fertilizer (manufacture) -->
                <div class="card product-card" style="width: 40.5rem;">
                <div class="zoom-wrapper">
                    <img src="./assets/products/manufacture/fertilizer.jpg" loading="lazy" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 id="productFertilizerHeading">Fertilizer, Decomposer, & Pesticide</h5>
                    <p class="card-text" id="productFertilizer">Our fertilizers, pesticides, and decomposers that originally from Indonesia have been found to be effective in improving soil fertility, controlling pests, and enhancing crop yields. 
                    <span style="display: none;">However, their effectiveness depends on various factors, and farmers need to use them in conjunction with good farming practices to achieve the best results.</span>
                    </p>
                    <a class="accent-pointer read-more-button">Read More</a>
                    <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
                </div>
                </div>

        </div>
        `

        manuCol.innerHTML = `
        <!-- manufacture card row 1 -->
        <div class="col d-flex justify-content-around">

          <!-- pillows, bolsters, etc -->
          <div class="card product-card" style="width: 18rem; height: 26rem">
            <div class="zoom-wrapper">
              <img src="./assets/products/manufacture/pillow.jpg" loading="lazy" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
              <h5 id="productPillowHeading">Pillows, Bolsters, Towels, and other textile products</h5>
              <p class="card-text" id="productPillow">Indonesia has a thriving textile industry that produces a wide range of products such as pillows, bolsters, towels, and other home textiles. 
                <span style="display: none;">These products are known for their high quality and beautiful designs, and are made from natural fibers such as cotton, silk, and linen. Indonesian textiles are popular both domestically and internationally.</span>
              </p>
              <a class="accent-pointer read-more-button">Read More</a>
              <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
            </div>
          </div>

          <!-- halal frozen chicken -->
          <div class="card product-card" style="width: 18rem;">
            <div class="zoom-wrapper">
              <img src="./assets/products/manufacture/frozen-chicken.jpg" loading="lazy" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
              <h5 id="productChickenHeading">Halal Frozen Chicken</h5>
              <p class="card-text" id="productChicken">Indonesia is one of the largest producers of halal chicken in the world, and exports to many countries around the globe. 
                <span style="display: none;">Indonesian halal frozen chicken is known for its high quality and strict adherence to halal standards. The chickens are raised in a natural environment and are free from any artificial hormones or antibiotics.</span>
              </p>
              <a class="accent-pointer read-more-button">Read More</a>
              <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
            </div>
          </div>
        </div>

        <!-- manufacture card row 2 -->
        <div class="col d-flex justify-content-around mt-4">

          <!-- scented candles -->
          <div class="card product-card" style="width: 18rem; height: 25rem">
            <div class="zoom-wrapper">
              <img src="./assets/products/manufacture/scented-candle.jpg" loading="lazy" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
              <h5 id="productCandleHeading">Homemade Scented Candles</h5>
              <p class="card-text" id="productCandle">Indonesian scented candles are handcrafted and made from natural materials such as soy wax and essential oils. 
                <span style="display: none;">These candles come in a wide range of scents such as vanilla, lavender, and citrus, and are known for their long-lasting fragrance and beautiful packaging. They make a perfect gift or decoration for any occasion.</span>
              </p>
              <a class="accent-pointer read-more-button">Read More</a>
              <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
            </div>
          </div>

          <!-- sawdust & shisha briquette -->
          <div class="card product-card" style="width: 18rem; min-height: 25rem;">
            <div class="zoom-wrapper">
              <img src="./assets/products/manufacture/briquette.jpeg" loading="lazy" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
              <h5 id="productSawdustHeading">Sawdust and Shisha Briquette</h5>
              <p class="card-text" id="productSawdust">Indonesia produces high-quality sawdust and shisha briquettes made from natural materials such as coconut shell and wood chips.  
                <span style="display: none;">These briquettes are used for grilling and smoking food, and are known for their high heat output and long burning time. They are a popular choice among barbeque enthusiasts and are exported to many countries around the world.</span>
              </p>
              <a class="accent-pointer read-more-button">Read More</a>
              <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
            </div>
          </div>
        </div>
        
        <!-- manufacture card row 3 -->
        <div class="col d-flex justify-content-around mt-4">

          <!-- skincare -->
          <div class="card product-card" style="width: 18rem;">
            <div class="zoom-wrapper">
              <img src="./assets/products/manufacture/bodycare.jpg" loading="lazy" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
              <h5 id="ProductCosmeticHeading">Cosmetics & Body Care</h5>
              <p class="card-text" id="productCosmetic">Indonesia has a rich tradition of using natural ingredients for cosmetic and body care products. 
                <span style="display: none;">Many Indonesian cosmetic and body care products are made from natural materials such as coconut oil, honey, and rice flour. These products are known for their effectiveness and are often used in spas and salons around the world.</span>
              </p>
              <a class="accent-pointer read-more-button">Read More</a>
              <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
            </div>
          </div>

          <!-- ceramics -->
          <div class="card product-card" style="width: 18rem;">
            <div class="zoom-wrapper">
              <img src="./assets/products/manufacture/ceramics.jpg" loading="lazy" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
              <h5 id="productCeramicHeading">Ceramics</h5>
              <p class="card-text" id="productCeramic">Indonesian ceramics are known for their unique designs and beautiful craftsmanship. 
                <span style="display: none;">They are made from natural materials such as clay and are available in a wide range of shapes and sizes. Indonesian ceramics are popular both domestically and internationally, and are often used as decorative items or for serving food and drinks.</span>
              </p>
              <a class="accent-pointer read-more-button">Read More</a>
              <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
            </div>
          </div>

        </div>
        
        <!-- manufacture card row 3 -->
        <div class="col d-flex justify-content-around mt-4">

          <!-- wooden product -->
          <div class="card product-card" style="width: 40.5rem;">
            <div class="zoom-wrapper">
              <img src="./assets/products/manufacture/wooden-furniture.jpg" loading="lazy" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
              <h5 id="productWoodenHeading">Wooden Product</h5>
              <p class="card-text" id="productWooden">Indonesia is renowned for its production of high-quality wooden products, ranging from parquet flooring and wooden doors to ceilings, tables, and various other types of furniture. 
                <span style="display: none;">These products are crafted using locally sourced wood, such as teak, mahogany, and rosewood, known for their durability and aesthetic appeal. Indonesian artisans and craftsmen employ traditional techniques alongside modern technology to create exquisite wooden pieces that cater to diverse design preferences. Overall, Indonesian wooden products, such as parquet, wooden doors, wooden ceilings, tables, and furniture, embody a harmonious blend of craftsmanship, natural materials, and design, contributing to the country's reputation as a hub for exquisite wooden creations.</span>
              </p>
              <a class="accent-pointer read-more-button">Read More</a>
              <a class="accent-pointer read-less-button"style="display: none;">Read Less</a>
            </div>
          </div>

        </div>
        `

        document.body.style.backgroundColor = "#fff";
    }
  }
  
let mobileScreen = window.matchMedia("(max-width: 425px)")
adjustScreen(mobileScreen) // Call listener function at run time
mobileScreen.addListener(adjustScreen) // Attach listener function on state changes