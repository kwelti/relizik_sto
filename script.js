let oladky = document.querySelector('.oladky')
let pyrih = document.querySelector('.tort')
let milkshake = document.querySelector('.milkshake')
let deruny = document.querySelector('.deruny')
let varenyky = document.querySelector('.varenyky')
let salat = document.querySelector('.salad')

let info = document.querySelector('.info')

oladky.addEventListener('click', function () {
    info.innerHTML = `
    <img class="close" src="img/close.png" alt="">
                <p class="recipe_name">Оладки</p>
                <ul class="recipe_list">
                    Інгредієнти
                    <li class="recipe_item">500 г кабачків (1 середній)</li>
                    <li class="recipe_item">7 ст.л. борошна</li>
                    <li class="recipe_item">2 ст.л. сметани</li>
                    <li class="recipe_item">2 яйця</li>
                    <li class="recipe_item">10 гілочок кропу</li>
                    <li class="recipe_item">7 ст.л. олії</li>
                    <li class="recipe_item">сіль і перець за смаком</li>
                </ul>
                <ul class="recipe_list">
                    Спосіб приготування
                    <li class="recipe_item">Середній кабачок помийте та обсушіть. Натріть у миску на крупній тертці та злегка відіжміть.</li>
                    <li class="recipe_item">Додайте за смаком сіль та перець, 2 яйця, 7 ст.л. борошна та 2 ст.л. сметани. Промийте і дрібно посічіть 10 гілочок кропу та додайте до кабачків. Гарно перемішайте.</li>
                    <li class="recipe_item">Розігрійте пару столових ложок олії на пательні. Викладайте оладки столовою ложкою, трошки приплюскуючи, та смажте з двох боків до золотавої скоринки.</li>
                    <li class="recipe_item">Обсмажуючи оладки, додавайте олію за необхідністю. Готові оладки викладайте на паперовий рушник, щоб він всотав зайвий жир.</li>
                </ul>`
    info.style.display = 'flex'
    let close_btn = document.querySelector('.close')
    close_btn.addEventListener('click', function () {
        info.style.display = 'none'
    })
})

pyrih.addEventListener('click', function () {
    info.innerHTML = `
    <img class="close" src="img/close.png" alt="">
                <p class="recipe_name">Полуничний пиріг</p>
                <ul class="recipe_list">
                    Інгредієнти
                    <li class="recipe_item">640 г пшеничного борошна</li>
                    <li class="recipe_item">100 г цукру</li>
                    <li class="recipe_item">30 г живих (пресованих) дріжджів</li>
                    <li class="recipe_item">2 яйця</li>
                    <li class="recipe_item">100 г молока</li>
                    <li class="recipe_item">150 г м’якого вершкового масла</li>
                    <li class="recipe_item">½ ч. л. солі</li>
                    <li class="recipe_item">2 ст. л. олії для змащування форми</li>
                </ul>
                <ul class="recipe_list">
                    Для начинки
                    <li class="recipe_item">200 г свіжої полуниці</li>
                    <li class="recipe_item">50 г цукру</li>
                </ul>
                <ul class="recipe_list">
                    Для змащування пирога
                    <li class="recipe_item">1 жовток</li>
                    <li class="recipe_item">20 мл молока</li>
					<li class="recipe_item">1 ст. л. цукру</li>
                </ul>
                <ul class="recipe_list">
                    Спосіб приготування
                    <li class="recipe_item">Підігрійте 100 г молока до температури 36-37 градусів. У велику миску додайте 100 г цукру, 30 г розкришених живих дріжджів, 100 г підігрітого молока та перемішайте вінчиком до однорідності. Залиште опару в теплому місці на 15 хв.</li>
                    <li class="recipe_item">В окремій мисці збийте вінчиком 2 яйця. Збивайте яйця приблизно 2 хв, просто до однорідності, потім додайте їх до опари. Додайте до опари також 150 г розм’якшеного масла, ½ ч. л. солі, та перемішайте. Порціями додайте 640 г просіяного борошна та перемішайте тісто до однорідності.</li>
                    <li class="recipe_item">Активними рухами, на чистій робочі поверхні, вимісіть тісто не менш як 5 хв. Поверніть його в миску, накрийте рушником та залиште підходити в теплому місці на 50 хв. Воно повинно помітно збільшитися в об’ємі.</li>
                    <li class="recipe_item">Для начинки: полуницю ретельно помийте, видаліть хвостики та обсушіть. Викладіть ягоди в чашу блендера та перебийте до однорідності. Викладіть полуничне пюре в сотейник, додайте 50 г цукру, перемішайте та проваріть 15 хв на вогні, трішки вищому за середній. Зніміть начинку з вогню та залиште охолоджуватися за кімнатної температури.</li>
                    <li class="recipe_item">Тісто що підійшло викладіть на робочу поверхню та розкачайте в довгий однорідний пласт, довжиною 90 см. За допомогою силіконової лопатки Змастіть тісто полуничним сиропом.</li>
                    <li class="recipe_item">Загорніть пиріг: спершу закрутіть пласт рулетом. Тепер отриману довгу “ковбаску” згорніть вдвоє та закрутіть кінчики “косичкою”.</li>
					<li class="recipe_item">Форму для випікання щедро змастіть олією, викладіть в неї сформований пиріг та залиште тісто підійти в теплі на 20 хв. Тим часом приготуйте суміш для змащування пирога: візьміть 1 яйце та відділіть білок від жовтка. Білок відкладіть, а жовток збийте вінчиком з 20 мл молока.</li>
                    <li class="recipe_item">За допомогою кулінарного пензлика змастіть пиріг молочно-яєчною сумішшю, присипте зверху 1 ст. л. цукру та випікайте у розігрітій до 180 градусів духовці 45 хв.</li>
                </ul>`
    info.style.display = 'flex'
    let close_btn = document.querySelector('.close')
    close_btn.addEventListener('click', function () {
        info.style.display = 'none'
    })
})

milkshake.addEventListener('click', function () {
    info.innerHTML = `
    <img class="close" src="img/close.png" alt="">
                <p class="recipe_name">Мілкшейк</p>
                <ul class="recipe_list">
                    Інгредієнти
                    <li class="recipe_item">400 мл молока</li>
                    <li class="recipe_item">200 г морозива</li>
                    <li class="recipe_item">Цукор шоколад чи кориця за смаком</li>
                    <li class="recipe_item">50 г збитих вершків</li>
                </ul>
                <ul class="recipe_list">
                    Спосіб приготування
                    <li class="recipe_item">Охолоджене молоко наливаємо в чашу блендера, додаємо звичайний та ванільний цукор і морозиво. Збиваємо інгредієнти до однорідності та утворення легкої пінки на поверхні напою.</li>
                    <li class="recipe_item">Розливаємо коктейль у склянки. Прикрашаємо збитими вершками та гілочкою м’яти. За бажанням посипаємо вершки дрібкою кориці чи натертим шоколадом.</li>
                </ul>`
    info.style.display = 'flex'
    let close_btn = document.querySelector('.close')
    close_btn.addEventListener('click', function () {
        info.style.display = 'none'
    })
})

deruny.addEventListener('click', function () {
    info.innerHTML = `
    <img class="close" src="img/close.png" alt="">
                <p class="recipe_name">Деруни</p>
                <ul class="recipe_list">
                    Інгредієнти
                    <li class="recipe_item">4 середніх картоплини</li>
                    <li class="recipe_item">1 ріпчаста цибуля</li>
                    <li class="recipe_item">200 г печериць</li>
                    <li class="recipe_item">1 зубчик часнику</li>
                    <li class="recipe_item">1 яйце</li>
                    <li class="recipe_item">3 ст. л. соняшникової олії (для смаження)</li>
                    <li class="recipe_item">5 ст. л. сметани для подачі</li>
                </ul>
                <ul class="recipe_list">
                    Спосіб приготування
                    <li class="recipe_item">Розігрійте духовку до температури 180 градусів. Очистьте ріпчасту цибулину, зубчик часнику та 4 середніх картоплини від шкірки.</li>
                    <li class="recipe_item">У велику миску спочатку натріть на тертці з великими отворами чверть цибулини, потім 2 картоплини, далі – ще чверть цибулини, останні 2 картоплини та решту цибулі. Часник натріть у миску на дрібній тертці або вичавіть через прес.</li>
                    <li class="recipe_item">Викладіть масу у сито та за допомогою ложки відцідіть зайву вологу. Додайте 1 яйце та посоліть і поперчіть до смаку. Розігрійте пательню з 3 ст. л. соняшникової олії.</li>
                    <li class="recipe_item">Викладайте картопляну масу ложкою на пательню та смажте на повільному вогні до золотавої скоринки.</li>
                    <li class="recipe_item">Викладіть деруни на деко, застелене пергаментом, та поставте у розігріту до 180 градусів духовку ще на 10 хвилин, аби деруни дійшли до готовності.</li>
                </ul>`

    info.style.display = 'flex'
    let close_btn = document.querySelector('.close')
    close_btn.addEventListener('click', function () {
        info.style.display = 'none'
    })
})

varenyky.addEventListener('click', function () {
    info.innerHTML = `
    <img class="close" src="img/close.png" alt="">
                <p class="recipe_name">Вареники з полуницею</p>
                <ul class="recipe_list">
                    Інгредієнти для тіста
                    <li class="recipe_item">400 г борошна</li>
                    <li class="recipe_item">200 мл окропу</li>
                    <li class="recipe_item">3 ст. л. олії</li>
                    <li class="recipe_item">1 дрібка солі</li>
                </ul>
				<ul class="recipe_list">
					Для начинки
                    <li class="recipe_item">400 г полуниці</li>
                    <li class="recipe_item">мед для подачі</li>
                </ul>
                <ul class="recipe_list">
                    Спосіб приготування
                    <li class="recipe_item">Ягоди ретельно помийте, очистіть від хвостиків. Розріжте ягоди навпіл. Якщо полуниця дуже велика, можна порізати на 4 частини.</li>
                    <li class="recipe_item">Для тіста висипте у миску 400 г борошна та залийте 200 мл окропу. Далі влийте 3 ст. л. олії та всипте 1 дрібку солі. Вимішуйте тісто спочатку ложкою, а потім руками. В результаті у вас має вийти еластичне тісто, яке не липне до рук.</li>
                    <li class="recipe_item">Розкачайте тісто у тонкий пласт товщиною приблизно 2 мм. Виріжте кружечки склянкою або будь-яким іншим посудом чи спеціальною формочкою.</li>
                    <li class="recipe_item">У кожен кружечок тіста викладайте часточку полуниці та заліплюйте краї. Робіть по краях вареничків візерунки, як вам більше до вподоби.</li>
                    <li class="recipe_item">Закип’ятіть воду у великій каструлі. Вкидайте вареники та варіть 5 хвилин після спливання. Діставайте шумівкою та подавайте із медом, цукром чи цукровою пудрою.</li>
                </ul>`
    info.style.display = 'flex'
    let close_btn = document.querySelector('.close')
    close_btn.addEventListener('click', function () {
        info.style.display = 'none'
    })
})

salat.addEventListener('click', function () {
    info.innerHTML = `
    <img class="close" src="img/close.png" alt="">
                <p class="recipe_name">Салат</p>
                <ul class="recipe_list">
                    Інгредієнти для салату
                    <li class="recipe_item">400 г молодої капусти</li>
                    <li class="recipe_item">50 г прошуто (тонкі слайси)</li>
                    <li class="recipe_item">2 ст. л. панірувальних сухарів (крупного помолу)</li>
                    <li class="recipe_item">сіль до смаку</li>
                </ul>
                <ul class="recipe_list">
                	Для запашної олії
                    <li class="recipe_item">40 мл оливкової олії</li>
                    <li class="recipe_item">1 зубчик часнику</li>
                    <li class="recipe_item">3 ст. л. панірувальних сухарів</li>
                </ul>
                <ul class="recipe_list">
                    Спосіб приготування
                    <li class="recipe_item">Приготуйте запашну олію. У сотейник чи маленьку каструлю вилийте 40 мл оливкової олії та додайте порізаний на великі шматочки зубчик часнику.</li>
                    <li class="recipe_item">Розігрійте олію з часником до температури не більше 50 градусів Цельсія. Відставте для охолодження та дайте рідині настоятися 5-10 хвилин, а потім приберіть часник з олії.</li>
                    <li class="recipe_item">Молоду капусту (400 г) крупно наріжте за допомогою гострого ножа. Викладіть листя в глибокий салатник і полийте готовою часниковою олією.</li>
                    <li class="recipe_item">Наріжте 50 г тонких слайсів прошуто та викладіть їх на капусту. Додайте панірувальні сухарі й сіль до смаку. Злегка перемішайте салат.</li>
                </ul>`
    info.style.display = 'flex'
    let close_btn = document.querySelector('.close')
    close_btn.addEventListener('click', function () {
        info.style.display = 'none'
    })
})

let reviewButton = document.querySelector('.review_btn')
let reviewInput = document.querySelector('.review_input')
let reviewCnt = document.querySelector('.comment_cnt')

function addComment(){
    let value = reviewInput.value
    reviewCnt.innerHTML +=`<div class="comment">
                                <img src="img/daria.png" alt="">
                                <div>
                                    <p class="nick">Анонімний користувач</p>
                                    <p>${value}</p>
                                </div>
                            </div>`
    reviewInput.value = ''
}

reviewButton.addEventListener('click', addComment)