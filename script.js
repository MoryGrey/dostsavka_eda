const searchSheet = document.getElementById('search-sheet');
const openSearchBtn = document.getElementById('open-search');
const categorySheet = document.getElementById('category-sheet');
const cartSheet = document.getElementById('cart-sheet');
const checkoutSheet = document.getElementById('checkout-sheet');
const navCart = document.getElementById('nav-cart');
const catTitle = document.getElementById('cat-title');
const promoBtn = document.getElementById('apply-promo');
const promoToast = document.getElementById('promo-toast');
const categoryList = document.getElementById('category-list');
const emptyState = document.getElementById('empty-state');
const banner = document.querySelector('.banner');
const sphere = document.getElementById('sphere');
const activatedText = document.getElementById('activatedText');

// Cart elements
const cartList = document.getElementById('cart-list');
const cartEmpty = document.getElementById('cart-empty');
const cartSummary = document.getElementById('cart-summary');
const sumItems = document.getElementById('sum-items');
const sumDelivery = document.getElementById('sum-delivery');
const sumPromoRow = document.getElementById('sum-promo-row');
const sumPromo = document.getElementById('sum-promo');
const sumTotal = document.getElementById('sum-total');
const checkoutBtn = document.getElementById('checkout-btn');

// Checkout elements
const coCity = document.getElementById('co-city');
const coPhone = document.getElementById('co-phone');
const coPromo = document.getElementById('co-promo');
const coApply = document.getElementById('co-apply');
const coItems = document.getElementById('co-items');
const coDelivery = document.getElementById('co-delivery');
const coPromoRow = document.getElementById('co-promo-row');
const coPromoVal = document.getElementById('co-promo-val');
const coTotal = document.getElementById('co-total');
const coSubmit = document.getElementById('co-submit');

// Каталог блюд
const catalog = {
  'Суши и Роллы': [
    {title:'ФИЛАДЕЛЬФИЯ', meta:'Рис, нори, крем-сыр, огурец, косарик', price:450},
    {title:'ФИЛАДЕЛЬФИЯ С УГРЕМ СО', meta:'Рис, нори, крем-сыр, угорь, огурец, кунжут, унаги соус', price:550},
    {title:'ФИЛАДЕЛЬФИЯ ИКРА', meta:'Рис, нори, крем-сыр, огурец, лосось, тобико', price:420},
    {title:'ФИЛАДЕЛЬФИЯ ЛАЙТ', meta:'Рис, нори, крем-сыр, лосось, икра', price:400},
    {title:'ФИЛАДЕЛЬФИЯ ДАБЛ', meta:'Рис, нори, крем-сыр, огурец, двойная порция лосося', price:450},
    {title:'КАЛИФОРНИЯ ЛОСОСЬ', meta:'Рис, нори, огурец, лосось, крем-сыр, тобико', price:420},
    {title:'КАЛИФОРНИЯ КРЕВЕТКА', meta:'Рис, нори, огурец, крем-сыр, креветка, тобико', price:450},
    {title:'ФИЛАДЕЛЬФИЯ ТУНЕЦ', meta:'Рис, нори, крем-сыр, тунец', price:420},
    {title:'ФИЛАДЕЛЬФИЯ КРЕВЕТКА ДВОЙНАЯ', meta:'Рис, нори, крем-сыр, креветка, огурец', price:450},
    {title:'ФИЛАДЕЛЬФИЯ НЕГА', meta:'Рис, нори, крем-сыр, креветка темпура, лосось, японский майонез, огурец', price:600},
    {title:'ФИЛАДЕЛЬФИЯ ТАР-ТАР', meta:'Рис, нори, огурец, крем-сыр, лайм, тартар из лосося, соус ними', price:550},
    {title:'ЗОЛОТОЙ УНАГИ ДРАКОН', meta:'Рис, нори, угорь, унаги соус, тобико, кунжут, огурец', price:550},
    {title:'ХИЯШИ УНАГИ', meta:'Рис, нори, крем-сыр, огурец, угорь, унаги, салат чука, кунжут, пряное масло', price:400},
    {title:'КРАСНЫЙ ДРАКОН', meta:'Рис, нори, лосось, угорь, майонез, тобико, кунжут', price:550},
    {title:'ПАНДА', meta:'Рис, нори, тунец, икра, огурец, двойная порция сыра', price:450},
    {title:'ЗЕЛЕНЫЙ ДРАКОН', meta:'Рис, нори, угорь, кунжут, унаги соус, тобико, огурец', price:550},
  ],
  'Запеченные и горячие роллы': [
    {title:'С УГРЕМ', meta:'Нори, рис, угорь, крем-сыр, огурец, спайси соус', price:350},
    {title:'ГОРЯЧИЙ С ЛОСОСЕМ', meta:'Рис, нори, лосось, крем-сыр, огурец, тобико', price:350},
    {title:'С ЛОСОСЕМ ТЕРИЯКИ', meta:'Рис, нори, лосось, крем-сыр, огурец, спайси соус, кунжут, тобико, лист салата', price:450},
    {title:'С КУРИЦЕЙ', meta:'Рис, нори, крем-сыр, огурец, курица', price:350},
    {title:'РОЗОВЫЙ ДРАКОН', meta:'Рис, нори, крем-сыр, огурец, тунец', price:550},
    {title:'БОНИТО С КРАБОВЫМ МЯСОМ', meta:'Рис, нори, крем-сыр, огурец, крабовое мясо, стружка тунца', price:380},
    {title:'С КРЕВЕТКОЙ', meta:'Рис, нори, крем-сыр, огурец, креветка', price:400},
  ],
  'Классические маки': [
    {title:'МАКИ ОГУРЕЦ (АВОКАДО)', meta:'Классический маки с огурцом или авокадо', price:120},
    {title:'МАКИ ЛОСОСЬ', meta:'Маки с лососем', price:200},
    {title:'МАКИ ТУНЕЦ', meta:'Маки с тунцом', price:200},
    {title:'МАКИ КРЕВЕТКА', meta:'Маки с креветкой', price:250},
  ],
  'Сеты': [
    {title:'СЕТ КАЛИФОРНИЯ', meta:'Калифорния краб, калифорния угорь, калифорния креветка', price:1000},
    {title:'СЕТ ГОРЯЧИЙ', meta:'Горячие роллы', price:1600},
    {title:'СЕТ ФЬЮЖН', meta:'Фьюжн сет', price:1100},
    {title:'СЕТ ЛЮКС', meta:'Люксовый сет', price:1200},
    {title:'СЕТ ВКУСНЫЙ БУМО', meta:'Вкусный бумо сет', price:1300},
    {title:'СЕТ ФИЕСТА', meta:'Фиеста сет', price:1500},
    {title:'КОРОЛЕВСКИЙ СЕТ', meta:'Королевский сет', price:4000},
  ],
  'Салаты': [
    {title:'Цезарь с курицей', meta:'Айсберг, жареная курица, соус, черри, перепелиное яйцо', price:380},
    {title:'Цезарь с сёмгой', meta:'Лист салата, слабосоленый лосось, соус, черри, перепелиное яйцо', price:450},
    {title:'Цезарь с креветками', meta:'Лист салата, жареные креветки, битый опус, черри, перепелиное яйцо', price:500},
    {title:'Тёплый с курицей', meta:'Филе курицы, болгарский перец, лист салата, грибы, сыр Филадельфия, унаги соус, кунжут', price:400},
    {title:'Тёплый с телятиной', meta:'Телятина, болгарский перец, лист салата, грибы, сыр Филадельфия, унаги соус, кунжут', price:450},
    {title:'Тёплый с кальмаром', meta:'Кальмар, помидор, лист салата, болгарский перец, морковь, оливковое масло, кисло-сладкий соус, кунжут', price:500},
    {title:'Из молодого цыпленка', meta:'Микс салата, филе цыплёнка, фета, помидор, свежие огурцы, оливковое масло, соус унаги', price:450},
    {title:'Театро', meta:'Театро', price:450},
    {title:'Палермо', meta:'Палермо', price:450},
    {title:'"Сытый кит" (с морепродуктами)', meta:'С морепродуктами', price:500},
    {title:'Хрустящий баклажан', meta:'Хрустящий баклажан', price:410},
  ],
  'Куриные крылья': [
    {title:'4 шт', meta:'Куриные крылья', price:350},
    {title:'6 шт', meta:'Куриные крылья', price:540},
    {title:'9 шт', meta:'Куриные крылья', price:750},
  ],
  'Гарниры': [
    {title:'Картофель по-деревенски', meta:'Картофель по-деревенски', price:220},
    {title:'Картофель фри', meta:'Картофель фри', price:200},
  ],
  'Блюда из мяса': [
    {title:'Свиной антрекот под соусом унаги и кунжутом', meta:'Свиной антрекот под соусом унаги и кунжутом', price:220},
    {title:'Парк-стейк с кисло-сладким соусом', meta:'Парк-стейк с кисло-сладким соусом', price:200},
    {title:'Обичная ребра', meta:'Обичная ребра', price:300},
    {title:'Куриный стейк под сливочно-грибным соусом', meta:'Куриный стейк под сливочно-грибным соусом', price:250},
  ],
  'Паста': [
    {title:'Греческий', meta:'Микс салата, помидоры, огурцы, маслины, лук, оливковое масло', price:400},
    {title:'Домашний с курицей и грибами', meta:'Микс салата, помидоры, огурцы, маслины, лук, оливковое масло', price:400},
    {title:'Болоньезе с фаршем', meta:'Болоньезе с фаршем', price:400},
  ],
  'Пицца': [
    {title:'МАРГАРИТА', meta:'Томатный соус, сыр моцарелла, базилик, зелень', price:400},
    {title:'МИДОР СВЕЖИЙ', meta:'Томатный соус, сыр моцарелла, свежие овощи, зелень', price:400},
    {title:'МАРГАРИТА С КУРИЦЕЙ И ГРИБАМИ', meta:'Сливочный соус, куриное филе, грибы, сыр моцарелла, зелень', price:500},
    {title:'САЛЯМИ', meta:'Томатный соус, сыр моцарелла, салями, базилик, зелень', price:500},
    {title:'ПЕППЕРОНИ', meta:'Томатный соус, сыр моцарелла, пепперони, зелень', price:499},
    {title:'ГАВАЙСКАЯ', meta:'Томатный соус, сыр моцарелла, куриное филе, ананас, зелень', price:550},
    {title:'УКРАИНСКАЯ', meta:'Куриное филе, бекон, маринованная зелень, сыр моцарелла', price:550},
    {title:'ЧЕТЫРЕ СЫРА', meta:'Моцарелла, фета, пармезан, дор-блю, зелень', price:600},
    {title:'БАВАРСКАЯ', meta:'Баварские колбаски, балык, томатный соус, сыр моцарелла, грибы, помидор, зелень', price:600},
    {title:'ЦЕЗАРЕ', meta:'Куриное филе, сыр, томатный соус, салатные листья', price:500},
    {title:'ФЕРМЕРСКАЯ', meta:'Томатный соус, сыр, маринованный лук, зелень', price:550},
    {title:'СЫРНЫЙ ЦЫПЛЕНОК', meta:'Нежнейшее мясо цыплёнка, сыр чеддер, два вида сыра', price:600},
    {title:'ПИЦЦА ТОМ ЯМ', meta:'Сливочный соус, томаты, креветки (10 шт.), маслины, лист салата', price:650},
    {title:'КАРБОНАРА', meta:'Копчёное куриное филе, сливочный соус, сыр моцарелла, яичный желток', price:480},
    {title:'МЯСНАЯ', meta:'Томатный соус, сыр моцарелла, мясо индейки, куриное филе, ветчина, баварские колбаски', price:600},
    {title:'ФИЛАДЕЛЬФИЯ', meta:'Соус тартар, филе лосося, сыр моцарелла, зелень', price:650},
    {title:'СЫТЫЙ КИТ', meta:'Сливочный соус, мидии, осьминог, креветка, помидор', price:580},
    {title:'ЦАРСКАЯ', meta:'Сливочный соус, кусочки морепродуктов, сыр моцарелла', price:600},
    {title:'ХАЧАПУРИ', meta:'Традиционный грузинский сырный пирог', price:400},
  ],
  'Бургеры': [
    {title:'Кин Сайз', meta:'Булочка, филе курицы в панировке, лист салата, помидор, сыр, соус Цезарь, томатный соус, картофель фри', price:450},
    {title:'Нью-Йорк', meta:'Булочка, котлета свино-говяжья, соус тартар, помидор, сыр, солёный огурец, красный лук, картофель фри', price:450},
    {title:'Техас', meta:'Булочка, мясо, лист салата, помидор, сыр, соус горчично-томатный, картофель фри', price:450},
  ],
  'Горячие закуски': [
    {title:'Сыр жареный в сухарях под ягодным соусом (6 шт)', meta:'Сыр жареный в сухарях под ягодным соусом', price:250},
    {title:'Сыр жареный в сухарях под ягодным соусом (9 шт)', meta:'Сыр жареный в сухарях под ягодным соусом', price:350},
    {title:'Сыр жареный в сухарях под ягодным соусом (12 шт)', meta:'Сыр жареный в сухарях под ягодным соусом', price:400},
    {title:'Лаваш запечённый с сыром и зеленью', meta:'Лаваш запечённый с сыром и зеленью', price:400},
    {title:'Жульен грибной в лаваше', meta:'Жульен грибной в лаваше', price:400},
    {title:'Креветки в кляре с кисло-сладким соусом (6 шт)', meta:'Креветки в кляре с кисло-сладким соусом', price:380},
    {title:'Креветки в кляре с кисло-сладким соусом (9 шт)', meta:'Креветки в кляре с кисло-сладким соусом', price:550},
    {title:'Креветки в кляре с кисло-сладким соусом (12 шт)', meta:'Креветки в кляре с кисло-сладким соусом', price:700},
    {title:'Кальмары в кляре с соусом тартар (6 шт)', meta:'Кальмары в кляре с соусом тартар', price:200},
    {title:'Кальмары в кляре с соусом тартар (9 шт)', meta:'Кальмары в кляре с соусом тартар', price:300},
    {title:'Кальмары в кляре с соусом тартар (12 шт)', meta:'Кальмары в кляре с соусом тартар', price:400},
    {title:'Луковые кольца в панировке со сливочным соусом (6 шт)', meta:'Луковые кольца в панировке со сливочным соусом', price:200},
    {title:'Луковые кольца в панировке со сливочным соусом (9 шт)', meta:'Луковые кольца в панировке со сливочным соусом', price:300},
    {title:'Луковые кольца в панировке со сливочным соусом (12 шт)', meta:'Луковые кольца в панировке со сливочным соусом', price:400},
    {title:'Карбонара с яйцом', meta:'Карбонара с яйцом', price:450},
    {title:'Тальятелле с морепродуктами', meta:'Тальятелле с морепродуктами', price:580},
  ],
  'Сковородки': [
    {title:'Сковородка с курицей', meta:'Курица, картофель по-деревенски, лук, болгарский перец, грибы, сливочный соус', price:420},
    {title:'Сковородка со свининой', meta:'Свинина, картофель по-деревенски, лук, болгарский перец, грибы, сливочный соус, зелень', price:620},
    {title:'Сковородка с телятиной', meta:'Телятина, картофель по-деревенски, лук, болгарский перец, грибы, сливочный соус, зелень', price:650},
    {title:'Сковородка с баварскими колбасками', meta:'Баварские колбаски, картофель по-деревенски, овощи', price:480},
    {title:'Сковородка "Сытый кит" с морепродуктами', meta:'Мидии, кальмары, картофель по-деревенски, лук, болгарский перец, кукуруза, сливочный соус', price:680},
    {title:'Сковородка с креветками', meta:'Лист салата, креветки в панировке, огурец, помидор, сливочный соус', price:380},
    {title:'Сковородка с сёмгой', meta:'Сёмга, картофель по-деревенски, сливочный соус, лук, сыр, зелень', price:700},
  ],
  'Шаурма': [
    {title:'Классическая', meta:'Жареное куриное филе, огурец, помидор, капуста, соус чесночный, томатный', price:250},
  ],
  'WOK & FUNCHOZA': [
    {title:'Свинина', meta:'350 г • Лапша, овощи, яйцо, соус устричный, терияки, унаги, кунжут, зелёный лук', price:400},
    {title:'Телятина', meta:'350 г • Лапша, овощи, яйцо, соус устричный, терияки, унаги, кунжут, зелёный лук', price:450},
    {title:'Курица', meta:'350 г • Лапша, овощи, яйцо, соус устричный, терияки, унаги, кунжут, зелёный лук', price:350},
    {title:'Морепродукты', meta:'350 г • Лапша, овощи, яйцо, соус устричный, терияки, унаги, кунжут, зелёный лук', price:480},
  ],
  'Супы': [
    {title:'Рамен со свининой', meta:'300 г • Рыбный бульон, лапша рамен, сыр тофу, яйцо, жареная свинина, лист нори', price:400},
    {title:'Рамен с телятиной', meta:'350 г • Лапша, овощи, яйцо, соус устричный, терияки, унаги, кунжут, зелёный лук', price:450},
    {title:'Мисо-суп с лососем', meta:'300 г • Рыбный бульон, вакаме, сыр тофу, стеклянная лапша, лосось', price:400},
    {title:'Том Ям с креветкой', meta:'300 г • Паста том-ям, кокосовое молоко, помидор, устричный соус, лук, грибы, креветка', price:550},
  ],
  'Суширитто': [
    {title:'С курицей', meta:'350 г • Лист нори, рис, пекинская капуста, огурец, помидор, болгарский перец, спайси соус, копченая курица', price:400},
    {title:'С креветкой', meta:'350 г • Лист нори, рис, огурец, спайси соус, креветка в кляре, икра тобико, болгарский перец, яйцо, тройной соус, кунжут, подается в хрустящей корочке', price:480},
    {title:'С лососем', meta:'350 г • Лист нори, крем-сыр, лосось, огурец, икра тобико, подается в хрустящей корочке', price:480},
    {title:'С морепродуктами', meta:'350 г • Лист нори, рис, креветка, кальмар, осьминог, спайси соус, огурец, яйцо, тройной соус, кунжут', price:480},
    {title:'Со свининой', meta:'350 г • Лист нори, рис, болгарский перец, яйцо, тройной соус, кунжут', price:400},
    {title:'С телятиной', meta:'350 г • Лист нори, рис, болгарский перец, яйцо, тройной соус, кунжут', price:450},
    {title:'С курицей (легкая версия)', meta:'350 г • Лист нори, рис, болгарский перец, яйцо, тройной соус, кунжут', price:350},
  ],
  'Ролл "Тортилья"': [
    {title:'С лососем', meta:'250 г • Лосось, лук, сырная лепешка, крем-сыр, икра тобико, унаги соус', price:350},
    {title:'С курицей', meta:'250 г • Помидор, сыр, копченая курица, зелень, сырная лепешка', price:300},
    {title:'С овощами', meta:'250 г • Крем-сыр, зелёный лук, огурец, такуан, болгарский перец', price:250},
  ],
  'Рис Тепаньяки': [
    {title:'Свинина', meta:'350 г • Пшеничная лапша, грибы, лук, морковь, болгарский перец, яйцо, тройной соус, кунжут', price:300},
    {title:'Курица', meta:'350 г • Пшеничная лапша, грибы, лук, морковь, болгарский перец, яйцо, тройной соус, кунжут', price:300},
    {title:'Телятина', meta:'350 г • Пшеничная лапша, грибы, лук, морковь, болгарский перец, яйцо, тройной соус, кунжут', price:350},
    {title:'С морепродуктами', meta:'350 г • Пшеничная лапша, грибы, лук, морковь, болгарский перец, яйцо, тройной соус, кунжут', price:480},
  ]
};

function renderCategory(name){
  const items = catalog[name] || [];
  categoryList.innerHTML = '';
  if(items.length === 0){
    emptyState.style.display = 'block';
    return;
  }
  emptyState.style.display = 'none';
  // Emoji mapping for categories (make it accessible in renderCart)
  if(!window.categoryEmojis){
    window.categoryEmojis = {
      'Суши и Роллы': '🍣', 'Запеченные и горячие роллы': '🔥',
      'Классические маки': '🥢', 'Сеты': '🍱', 'Салаты': '🥗',
      'Куриные крылья': '🍗', 'Гарниры': '🥔', 'Блюда из мяса': '🥩',
      'Паста': '🍝', 'Пицца': '🍕', 'Бургеры': '🍔', 'Горячие закуски': '🔥',
      'Сковородки': '🍳', 'Шаурма': '🌯', 'WOK & FUNCHOZA': '🍜',
      'Супы': '🍲', 'Суширитто': '🌯', 'Ролл "Тортилья"': '🌮',
      'Рис Тепаньяки': '🍚'
    };
  }
  const categoryEmojis = window.categoryEmojis;
  const emoji = categoryEmojis[name] || name[0];
  
  for(const item of items){
    const el = document.createElement('div');
    el.className = 'product';
    el.innerHTML = `
      <div class="product-thumb">${emoji}</div>
      <div class="product-info">
        <p class="product-title">${item.title}</p>
        <p class="product-meta">${item.meta}</p>
        <div class="product-footer">
      <div class="product-price">${item.price}₽</div>
      <button class="btn-add" type="button">В корзину</button>
        </div>
      </div>
    `;
    const addBtn = el.querySelector('.btn-add');
    addBtn.addEventListener('click', ()=>{
      // add to cart data
      const existing = cart.find(i=>i.title===item.title);
      if(existing){ existing.qty += 1; }
      else { cart.push({title:item.title, price:item.price, qty:1}); }
      cartCount += 1;
      badge.textContent = String(cartCount);
      // refresh cart summary if open
      if (!cartSheet.hidden) {
        renderCart();
      }
    });
    categoryList.appendChild(el);
  }
}

openSearchBtn.addEventListener('click', ()=>{
  searchSheet.hidden = false;
});

// Open/close cart and checkout sheets
if (navCart) {
  navCart.addEventListener('click', ()=>{
    renderCart();
    cartSheet.hidden = false;
  });
}

[cartSheet, checkoutSheet].forEach(sheet=>{
  if(!sheet) return;
  sheet.addEventListener('click', (e)=>{
    if (e.target.matches('[data-close]') || e.target === sheet) {
      sheet.hidden = true;
    }
  });
});

searchSheet.addEventListener('click', (e)=>{
  if (e.target.matches('[data-close]') || e.target === searchSheet) {
    searchSheet.hidden = true;
  }
});

// Demo: badge increments when кликаем на карточку
const badge = document.getElementById('cart-badge');
let cartCount = parseInt(badge.textContent, 10) || 0;
let cart = [];
let activePromoCode = ''; // Активный промокод

document.querySelectorAll('.card').forEach(card=>{
  card.addEventListener('click', (e)=>{
    e.preventDefault();
    // ripple coords
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--r-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--r-y', `${e.clientY - rect.top}px`);
    card.classList.remove('rippling');
    // restart animation
    void card.offsetWidth;
    card.classList.add('rippling');

    // открыть лист категории (пока пуст)
    const name = card.getAttribute('data-name') || 'Категория';
    catTitle.textContent = name;
    renderCategory(name);
    categorySheet.hidden = false;
  });
});

// Cart helpers
function computeTotals(promoCode){
  const itemsSum = cart.reduce((s,i)=>s+i.price*i.qty,0);
  // Используем переданный промокод или активный промокод
  const codeToUse = (promoCode || activePromoCode || '').toUpperCase();
  const hasPromo = codeToUse === 'BONUS100';
  // Доставка: 500₽ обычно, 400₽ с промокодом (скидка только на доставку)
  const baseDelivery = 500;
  const delivery = hasPromo ? 400 : baseDelivery;
  const promoVal = 0; // Промокод применяется только к доставке
  const total = itemsSum + delivery;
  return {itemsSum, delivery, promoVal, total, hasPromo};
}

function renderCart(){
  cartList.innerHTML = '';
  if(cart.length===0){
    cartEmpty.style.display = 'block';
    cartSummary.hidden = true;
    return;
  }
  cartEmpty.style.display = 'none';
  cartSummary.hidden = false;
  
  // Get emoji for cart items (find category)
  const categoryEmojis = window.categoryEmojis || {};
  const getItemEmoji = (title) => {
    for(const [catName, catItems] of Object.entries(catalog)){
      if(catItems.some(i => i.title === title)){
        return categoryEmojis[catName] || '🍽️';
      }
    }
    return '🍽️';
  };
  
  for(const it of cart){
    const row = document.createElement('div');
    row.className = 'cart-item';
    const itemEmoji = getItemEmoji(it.title);
    const unitPrice = it.price;
    const totalPrice = it.price * it.qty;
    
    row.innerHTML = `
      <div class="cart-item-thumb">${itemEmoji}</div>
      <div class="cart-item-content">
      <div class="cart-item-title">${it.title}</div>
        <div class="cart-item-meta">
          <span class="cart-item-price-unit">${unitPrice}₽ × ${it.qty}</span>
        </div>
        <div class="cart-item-footer">
      <div class="qty">
            <button class="qty-btn" data-dec type="button">−</button>
            <span class="qty-number">${it.qty}</span>
            <button class="qty-btn" data-inc type="button">+</button>
          </div>
          <div class="cart-item-total">${totalPrice}₽</div>
        </div>
      </div>
    `;
    
    row.querySelector('[data-inc]').addEventListener('click', ()=>{ 
      it.qty+=1; 
      cartCount+=1; 
      badge.textContent=String(cartCount); 
      renderCart(); 
    });
    
    row.querySelector('[data-dec]').addEventListener('click', ()=>{ 
      if(it.qty>1){ 
        it.qty-=1; 
        cartCount-=1; 
      } else { 
        cartCount-=it.qty; 
        cart.splice(cart.indexOf(it),1);
      } 
      badge.textContent=String(cartCount); 
      renderCart(); 
    });
    
    cartList.appendChild(row);
  }
  
  const totals = computeTotals();
  sumItems.textContent = totals.itemsSum + '₽';
  sumDelivery.textContent = totals.delivery + '₽';
  // Промокод применяется только к доставке, поэтому не показываем отдельной строкой
  sumPromoRow.hidden = true;
  sumTotal.textContent = totals.total + '₽';
}

if (checkoutBtn){
  checkoutBtn.addEventListener('click', ()=>{
    if(cart.length===0){ alert('Корзина пуста'); return; }
    const t = computeTotals();
    coItems.textContent = t.itemsSum + '₽';
    coDelivery.textContent = t.delivery + '₽';
    // Промокод применяется только к доставке
    coPromoRow.hidden = true;
    coTotal.textContent = t.total + '₽';
    checkoutSheet.hidden = false;
  });
}

if (coApply){
  coApply.addEventListener('click', ()=>{
    const code = (coPromo.value||'').trim();
    const t = computeTotals(code);
    coItems.textContent = t.itemsSum + '₽';
    coDelivery.textContent = t.delivery + '₽';
    // Промокод применяется только к доставке, поэтому не показываем отдельной строкой
    coPromoRow.hidden = true;
    coTotal.textContent = t.total + '₽';
  });
}

if (coSubmit){
  coSubmit.addEventListener('click', ()=>{
    if(cart.length===0){ alert('Корзина пуста'); return; }
    const city = (coCity.value||'').trim();
    const phone = (coPhone.value||'').trim();
    if(!city){ alert('Введите город/село'); return; }
    if(!phone){ alert('Введите телефон'); return; }
    const t = computeTotals(coPromo.value.trim());
    const order = {
      city,
      phone,
      promoCode: (coPromo.value||'').trim(),
      delivery: t.delivery,
      discount: t.promoVal,
      itemsSum: t.itemsSum,
      total: t.total,
      items: cart.map(i=>({title:i.title, price:i.price, qty:i.qty}))
    };

    // Send to Telegram bot if inside WebApp
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      try {
        tg.sendData(JSON.stringify(order));
        tg.showAlert('Заказ отправлен. Ожидайте, курьер свяжется с вами.');
        tg.close();
      } catch(e) {
        console.error('sendData failed', e);
      }
    } else {
      alert(`Заказ оформлен\nАдрес: ${city}\nТелефон: ${phone}\nСумма: ${t.total}₽`);
    }

    // reset cart
    cart = [];
    cartCount = 0;
    badge.textContent = '0';
    renderCart();
    checkoutSheet.hidden = true;
    cartSheet.hidden = true;
  });
}

// Intersection Observer for reveal animation
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.2});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Закрытие category-sheet
categorySheet.addEventListener('click', (e)=>{
  if (e.target.matches('[data-close]') || e.target === categorySheet) {
    categorySheet.hidden = true;
  }
});

// Promo toast
if (promoBtn) {
  promoBtn.addEventListener('click', ()=>{
    // Активируем промокод
    activePromoCode = 'BONUS100';
    localStorage.setItem('activePromoCode', activePromoCode);
    
    promoToast.classList.remove('show');
    void promoToast.offsetWidth;
    promoToast.classList.add('show');
    setTimeout(()=>promoToast.classList.remove('show'), 1800);

    // Обновляем корзину, если она открыта
    if (!cartSheet.hidden) {
      renderCart();
    }

    // fancy banner animation
    if (banner) {
      banner.classList.add('active');
      // spawn stars
      const rect = banner.getBoundingClientRect();
      const centerX = rect.width/2;
      const centerY = rect.height/2;
      for(let i=0;i<18;i++){
        const star = document.createElement('div');
        star.className = 'star';
        star.style.position = 'absolute';
        star.style.width = '8px';
        star.style.height = '8px';
        star.style.background = 'var(--accent)';
        star.style.borderRadius = '50%';
        star.style.left = centerX + 'px';
        star.style.top = centerY + 'px';
        star.style.opacity = '0';
        banner.appendChild(star);
        const angle = Math.random() * Math.PI * 2;
        const dist = 100 + Math.random()*120;
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist;
        star.animate([
          {transform:`translate(0,0) scale(1)`,opacity:1},
          {transform:`translate(${tx}px,${ty}px) scale(.3)`,opacity:0}
        ],{duration:1200,easing:'ease-out'});
        setTimeout(()=>star.remove(),1200);
      }
      setTimeout(()=>banner.classList.remove('active'), 1800);
    }
  });
}

// Load profile data
function loadProfile() {
  let profile = {};

  // Try Telegram WebApp
  if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe?.user) {
    const u = window.Telegram.WebApp.initDataUnsafe.user;
    profile.name = [u.first_name, u.last_name].filter(Boolean).join(' ');
  }

  // Try query params
  const params = new URLSearchParams(location.search);
  if (params.get('name')) profile.name = params.get('name');
  if (params.get('phone')) profile.phone = params.get('phone');
  if (params.get('is18')) profile.is18 = params.get('is18') === 'true';

  // Fallback to localStorage
  const stored = JSON.parse(localStorage.getItem('profile') || '{}');
  profile = { ...stored, ...profile };

  // Defaults
  if (!profile.name) profile.name = 'Гость';
  if (typeof profile.is18 !== 'boolean') profile.is18 = true;

  // Render
  // profile UI removed

  // Save
  localStorage.setItem('profile', JSON.stringify(profile));
}

// Save phone on blur
// no profile inputs now

// Init
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Telegram WebApp environment if present
  if (window.Telegram && window.Telegram.WebApp) {
    try { window.Telegram.WebApp.ready(); window.Telegram.WebApp.expand(); } catch(_) {}
  }
  loadProfile();
  
  // Загружаем активный промокод из localStorage
  const savedPromo = localStorage.getItem('activePromoCode');
  if (savedPromo) {
    activePromoCode = savedPromo;
  }
});

