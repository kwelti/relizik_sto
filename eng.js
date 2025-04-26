
let body = document.querySelector('body')
let body_ukr = body.innerHTML
let button = document.getElementById('translate')
let lang = 'ua'
function tr(){
    
}

button.addEventListener('click', function(){
    // let button = document.getElementById('translate')
    if (lang == 'ua'){
        body.innerHTML = `
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
          <span class="fs-4">KUCHOVAR</span>
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item"><a href="#" class="nav-link" id="nav_btn">Search</a>
            <svg id="search" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg></li>
          <li class="nav-item"><a href="#" class="nav-link" id="nav_btn">Фільтр</a></li>
          <li class="nav-item"><a href="#" class="nav-link" id="translate">UA/ENG</a></li>
        </ul>
    </header>
    <div class="sidebar">
        <a href="#pronas">about us</a>
        <a href="#season">seasonal</a>
        <a href="#buy" style="width: 60px;">buy now</a>
        <a href="#last">comments</a>
        <a href="#footer" style="width: 100px;">extra info</a>
    </div>
    <nav>
        <a href="#" class="nav-link" id="nav-main">ALL DISHES</a>
        <a href="#" class="nav-link" id="nav-main">NEWS</a>
        <a href="#" class="nav-link" id="nav-main">SHOP</a>
    </nav>
    <main>
		<div id="pronas" class="pronas">
			<h4>ABOUT US</h4>
            <p>Hello everyone! On this site, we talk about interesting dishes and current novelties from the world of cooking. Here they can help you choose dishes for an event or just for gatherings with loved ones. The menu has many different items that might interest you.</p>
		</div>
		<div id="season" class="season">
  		<h3>SEASONAL DISHES</h3>
        <div class="dish_cnt">
  		<button class="dishes tort">
			<div class="name">
				<img src="img/tort.png"/>
				<p>Strawberry pie</p>
            </div>
            <div class="etc">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="46" height="46" viewBox="0 0 50 50">
                        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"></path>
                    </svg>
                    <p>30 min</p>
                </div>
                <div>
                    <img src="img/icon-meal.png" alt="">
                    <p>5</p>
                </div>
            </div>
		</button>

        <button class="dishes milkshake">
			<div class="name">
				<img src="img/milkshake.png"/>
				<p>Milkshake</p>
            </div>
            <div class="etc">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="46" height="46" viewBox="0 0 50 50">
                        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"></path>
                    </svg>
                    <p>15 min</p>
                </div>
                <div>
                    <img src="img/icon-meal.png" alt="">
                    <p>3</p>
                </div>
            </div>
		</button>

        <button class="dishes deruny">
			<div class="name">
				<img src="img/deruny.png"/>
				<p>Deruny</p>
            </div>
            <div class="etc">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="46" height="46" viewBox="0 0 50 50">
                        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"></path>
                    </svg>
                    <p>15 min</p>
                </div>
                <div>
                    <img src="img/icon-meal.png" alt="">
                    <p>4</p>
                </div>
            </div>
		</button>

        <button class="dishes varenyky">
			<div class="name">
				<img src="img/varenyky.png"/>
				<p>Varenyky</p>
            </div>
            <div class="etc">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="46" height="46" viewBox="0 0 50 50">
                        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"></path>
                    </svg>
                    <p>60 min</p>
                </div>
                <div>
                    <img src="img/icon-meal.png" alt="">
                    <p>6</p>
                </div>
            </div>
		</button>

  		<button class="dishes salad">
			<div class="name">
				<img src="img/salad.png"/>
				<p>Salad</p>
            </div>
            <div class="etc">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="46" height="46" viewBox="0 0 50 50">
                        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"></path>
                    </svg>
                    <p>20 min</p>
                </div>
                <div>
                    <img src="img/icon-meal.png" alt="">
                    <p>4</p>
                </div>
            </div>
		</button>

        <button class="dishes oladky">
			<div class="name">
				<img src="img/oladky.png"/>
				<p>Оladky</p>
            </div>
            <div class="etc">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="46" height="46" viewBox="0 0 50 50">
                        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"></path>
                    </svg>
                    <p>30 min</p>
                </div>
                <div>
                    <img src="img/icon-meal.png" alt="">
                    <p>4</p>
                </div>
            </div>
		</button>
        </div>
        <div class="info">
            <img class="close" src="img/close.png" alt="">
        </div>
        </div>
  		</div>

		<div id="buy" class="buy">
  		    <h3>BUY NOW</h3>
            <div class="buy_cnt">
            <div class="products">
                <div class="pr_name">
                    <img src="img/knyha.png"/>
                    <p>The book “Ukrainian cuisine in 70 dishes” with autograph</p>
                </div>
                <div class="pr_price">
                    <p>650  ₴</p>
                    <button class="pr_btn">BUY</button>
                </div>
            </div>

            <div class="products">
                <div class="pr_name">
                    <img src="img/sousy.png"/>
                    <p>Set of sauces "All inclusive"</p>
                </div>
                <div class="pr_price">
                    <p>650  ₴</p>
                    <button  class="pr_btn">BUY</button>
                </div>
            </div>

            <div class="products">
                <div class="pr_name">
                    <img src="img/tshirt.png"/>
                    <p>Oversized T-shirt “божеВІЛЬНІ”</p>
                </div>
                <div class="pr_price">
                    <p>795  ₴</p>
                    <button  class="pr_btn">BUY</button>
                </div>
            </div>
            </div>
        </div>


        <div id="last" class="last">
            <h3>ВІДГУКИ</h3>
            <div class="comment_cnt">
                <div class="comment">
                    <img src="img/serhii.png" alt="">
                    <div>
                        <p class="nick">Сергій</p>
                        <p>Зайшов на сайт та здивувався як тут усе легко! Рецепти супер та актуальні рекомендації!</p>
                    </div>
                </div>
                <div class="comment">
                    <img src="img/daria.png" alt="">
                    <div>
                        <p class="nick">Дарія</p>
                        <p>Асортимент товарів просто супер! Ціни лояльні та швидка реакція на якісь запитання!</p>
                    </div>
                </div>
            </div>
        <div class="review">
                <input class="review_input" type="text" placeholder="Write your comment" size="40">
                <button class="review_btn">Send!</button>
            </div>
        </div>

    </main>
    <footer id="footer" class="py-3 my-4">
        <span class="fs-4" id="kuchovar">KUCHOVAR</span>
        <div class="media">
            <svg id="instagram" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
            </svg>

            <svg id="youtube" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z"></path>
            </svg>
            
            <svg id="facebook" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"></path>
            </svg>
        </div>
        <ul class="nav justify-content-center ">
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About us</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Privacy Policy</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
        </ul>
        <p class="text-center text-body-secondary">All rights to the materials posted on the kuchovar.com website are protected in accordance with the legislation of Ukraine. Full or partial use of the kuchovar.com site materials without the written permission of the Site Administration is prohibited.</p>
        <p class="text-center text-body-secondary">© 2024</p>
    </footer>
    <script src="script.js"></script>
    <script src="eng.js"></script>
        `
        lang = 'eng'
    } else{
        body.innerHTML = body_ukr
        lang = 'ua'
    }
    console.log(body_ukr)

})