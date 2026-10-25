/* ====== البيانات ====== */
const ICONS = {
  sheep: '<svg viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="36" rx="18" ry="13" fill="#F2E9D5"/><circle cx="20" cy="30" r="4" fill="#F2E9D5"/><circle cx="26" cy="25" r="4.5" fill="#F2E9D5"/><circle cx="33" cy="23" r="4.5" fill="#F2E9D5"/><circle cx="40" cy="25" r="4.5" fill="#F2E9D5"/><circle cx="45" cy="30" r="4" fill="#F2E9D5"/><ellipse cx="48" cy="38" rx="6.5" ry="8" fill="#D9A441"/><circle cx="50" cy="36" r="1.4" fill="#17352A"/><path d="M44 33c-2-2-2-5 0-6" stroke="#9E2B25" stroke-width="2" stroke-linecap="round"/><rect x="22" y="47" width="3.5" height="8" rx="1.5" fill="#D9A441"/><rect x="36" y="47" width="3.5" height="8" rx="1.5" fill="#D9A441"/></svg>',
  goat: '<svg viewBox="0 0 64 64" fill="none"><ellipse cx="30" cy="38" rx="17" ry="12" fill="#D9A441"/><ellipse cx="46" cy="32" rx="6.5" ry="8.5" fill="#D9A441"/><path d="M44 25c-3-4-2-8 1-10M49 25c3-4 2-8-1-10" stroke="#F2E9D5" stroke-width="2.5" stroke-linecap="round"/><circle cx="48" cy="30" r="1.4" fill="#17352A"/><path d="M46 40c0 3 1 5 2 6" stroke="#F2E9D5" stroke-width="2" stroke-linecap="round"/><rect x="20" y="47" width="3.5" height="9" rx="1.5" fill="#F2E9D5"/><rect x="34" y="47" width="3.5" height="9" rx="1.5" fill="#F2E9D5"/></svg>',
  calf: '<svg viewBox="0 0 64 64" fill="none"><ellipse cx="30" cy="38" rx="19" ry="13" fill="#F2E9D5"/><ellipse cx="47" cy="30" rx="8" ry="9" fill="#F2E9D5"/><path d="M42 22c-3-2-3-5-1-7M52 22c3-2 3-5 1-7" stroke="#D9A441" stroke-width="3" stroke-linecap="round"/><ellipse cx="47" cy="35" rx="4.5" ry="3" fill="#D9A441"/><circle cx="49" cy="27" r="1.5" fill="#17352A"/><rect x="19" y="48" width="4" height="9" rx="1.5" fill="#D9A441"/><rect x="35" y="48" width="4" height="9" rx="1.5" fill="#D9A441"/></svg>',
  cuts: '<svg viewBox="0 0 64 64" fill="none"><path d="M14 40c0-12 9-22 21-22 8 0 15 5 15 13 0 9-8 12-14 12-4 0-6-2-6-5 0-2 2-4 4-4" stroke="#F2E9D5" stroke-width="4" stroke-linecap="round" fill="none"/><circle cx="34" cy="31" r="5" fill="#9E2B25"/><circle cx="34" cy="31" r="2" fill="#F2E9D5"/><path d="M12 50h40" stroke="#D9A441" stroke-width="3" stroke-linecap="round"/></svg>'
};

const CUTS = ['مفطح كامل','أرباع','مقطع وسط','مقطع صغير (مبشور)'];
const CUTS_MEAT = ['قطع كبيرة','قطع وسط','مكعبات','مفروم'];

const PRODUCTS = [
  {id:1, cat:'sheep', icon:'sheep', badge:'الأكثر طلبًا', name:'ذبيحة نعيمي بلدي', desc:'نعيمي مرعى، لحمه طري ودهنه أبيض. مثالي للمفطح والمندي.', weight:'16–18 كجم', price:1150, cuts:CUTS},
  {id:2, cat:'sheep', icon:'sheep', badge:'', name:'ذبيحة حري', desc:'الحري معروف بقلة دهنه ونكهته القوية، خيار أهل الذوق.', weight:'15–17 كجم', price:1350, cuts:CUTS},
  {id:3, cat:'sheep', icon:'sheep', badge:'اقتصادي', name:'نصف ذبيحة نعيمي', desc:'نصف ذبيحة مقسومة بالطول، تكفي عزيمة صغيرة.', weight:'8–9 كجم', price:600, cuts:['أرباع','مقطع وسط','مقطع صغير']},
  {id:4, cat:'goat', icon:'goat', badge:'', name:'تيس بلدي', desc:'تيس مرعى حجم وسط، الخيار الأول للمندي والحنيذ.', weight:'12–14 كجم', price:1050, cuts:CUTS},
  {id:5, cat:'goat', icon:'goat', badge:'', name:'جدي صغير', desc:'جدي رضيع لحمه ناعم جدًا، مناسب للشوي والمظبي.', weight:'7–9 كجم', price:850, cuts:CUTS},
  {id:6, cat:'calf', icon:'calf', badge:'للمناسبات', name:'عجل بلدي كامل', desc:'عجل مرعى للولائم الكبيرة، يُجهّز بموعد مسبق ٢٤ ساعة.', weight:'90–110 كجم', price:4900, cuts:['أرباع','مقطع وسط','حسب الاتفاق']},
  {id:7, cat:'calf', icon:'calf', badge:'', name:'ربع عجل', desc:'ربع عجل بلدي مقطع حسب طلبك، مناسب للتخزين الشهري.', weight:'22–27 كجم', price:1300, cuts:CUTS_MEAT},
  {id:8, cat:'cuts', icon:'cuts', badge:'طازج يوميًا', name:'لحم نعيمي مقطع — كيلو', desc:'من ذبائح اليوم، تغليف مفرّغ من الهواء.', weight:'1 كجم', price:75, cuts:CUTS_MEAT},
  {id:9, cat:'cuts', icon:'cuts', badge:'', name:'مفروم نعيمي ناعم — كيلو', desc:'مفروم طازج بدون إضافات، نسبة دهن معتدلة.', weight:'1 كجم', price:70, cuts:['فرم ناعم','فرم خشن']},
  {id:10, cat:'cuts', icon:'cuts', badge:'', name:'ريش غنم — كيلو', desc:'ريش مشذّبة جاهزة للشوي المباشر.', weight:'1 كجم', price:95, cuts:['كاملة','مفرودة (فرنساوي)']},
  {id:11, cat:'cuts', icon:'cuts', badge:'', name:'كبدة وملحقات طازجة', desc:'كبدة وقلب وكلاوي من ذبائح الصباح.', weight:'1 كجم', price:65, cuts:['كاملة','مقطعة شرائح']},
  {id:12, cat:'goat', icon:'goat', badge:'', name:'ذبيحة ماعز بلدي', desc:'ماعز مرعى، لحم خفيف قليل الدهن يناسب الكبسة اليومية.', weight:'10–12 كجم', price:900, cuts:CUTS},
];

/* ====== عرض المنتجات ====== */
const grid = document.getElementById('productGrid');
const fmt = n => n.toLocaleString('ar-SA');

function renderProducts(cat='all'){
  const list = cat==='all' ? PRODUCTS : PRODUCTS.filter(p=>p.cat===cat);
  grid.innerHTML = list.map(p=>`
    <article class="card" data-id="${p.id}">
      <div class="card-media">
        ${p.badge?`<span class="badge">${p.badge}</span>`:''}
        ${ICONS[p.icon]}
      </div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p class="desc">${p.desc}</p>
        <div class="meta"><span>⚖️ ${p.weight}</span><span class="price">${fmt(p.price)} <small>ر.س</small></span></div>
        <label style="font-size:.75rem;color:var(--ink-soft)">طريقة التقطيع
          <select class="cut-select">${p.cuts.map(c=>`<option>${c}</option>`).join('')}</select>
        </label>
        <button class="add-btn" data-add="${p.id}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
          أضِف إلى السلة
        </button>
      </div>
    </article>`).join('');
}
renderProducts();

/* تصفية التصنيفات */
document.getElementById('cats').addEventListener('click', e=>{
  const chip = e.target.closest('.cat-chip'); if(!chip) return;
  document.querySelectorAll('.cat-chip').forEach(c=>c.classList.remove('active'));
  chip.classList.add('active');
  renderProducts(chip.dataset.cat);
});

/* ====== السلة (بالذاكرة) ====== */
let cart = []; // {id, name, icon, price, cut, qty}

const drawer = document.getElementById('cartDrawer');
const overlay = document.getElementById('overlay');
const cartItemsEl = document.getElementById('cartItems');
const cartFoot = document.getElementById('cartFoot');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');

function openCart(){ drawer.classList.add('open'); overlay.classList.add('show'); }
function closeCart(){ drawer.classList.remove('open'); overlay.classList.remove('show'); }
document.getElementById('cartOpen').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeCart(); });

grid.addEventListener('click', e=>{
  const btn = e.target.closest('[data-add]'); if(!btn) return;
  const id = +btn.dataset.add;
  const p = PRODUCTS.find(x=>x.id===id);
  const cut = btn.closest('.card').querySelector('.cut-select').value;
  const existing = cart.find(i=>i.id===id && i.cut===cut);
  if(existing){ existing.qty++; } else { cart.push({id:p.id,name:p.name,icon:p.icon,price:p.price,cut,qty:1}); }
  updateCart();
  showToast(`أُضيف «${p.name}» إلى السلة`);
});

function updateCart(){
  const count = cart.reduce((s,i)=>s+i.qty,0);
  cartCount.textContent = count;
  if(cart.length===0){
    cartItemsEl.innerHTML = `
      <div class="cart-empty">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M2.5 3h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21.5 8H6.2"/></svg>
        سلتك فارغة.<br>تصفح المنتجات وأضف ما يناسبك.
      </div>`;
    cartFoot.hidden = true;
    return;
  }
  cartItemsEl.innerHTML = cart.map((i,idx)=>`
    <div class="c-item">
      <div class="c-thumb">${ICONS[i.icon]}</div>
      <div class="c-info">
        <h4>${i.name}</h4>
        <div class="cut">التقطيع: ${i.cut}</div>
        <div class="p">${fmt(i.price*i.qty)} ر.س</div>
      </div>
      <div class="c-actions">
        <div class="qty">
          <button data-qty="+1" data-i="${idx}" aria-label="زيادة الكمية">+</button>
          <span>${i.qty}</span>
          <button data-qty="-1" data-i="${idx}" aria-label="تقليل الكمية">−</button>
        </div>
        <button class="rm" data-rm="${idx}">إزالة</button>
      </div>
    </div>`).join('');
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  cartTotal.textContent = `${fmt(total)} ر.س`;
  cartFoot.hidden = false;
}
updateCart();

cartItemsEl.addEventListener('click', e=>{
  const q = e.target.closest('[data-qty]');
  if(q){
    const i = +q.dataset.i;
    cart[i].qty += (q.dataset.qty==='+1' ? 1 : -1);
    if(cart[i].qty<=0) cart.splice(i,1);
    updateCart(); return;
  }
  const r = e.target.closest('[data-rm]');
  if(r){ cart.splice(+r.dataset.rm,1); updateCart(); }
});

/* إتمام الطلب عبر واتساب */
document.getElementById('checkoutBtn').addEventListener('click', ()=>{
  if(cart.length===0) return;
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  let msg = 'السلام عليكم، أرغب بتأكيد الطلب التالي من مراعي تيماء:%0A%0A';
  cart.forEach((i,n)=>{
    msg += `${n+1}. ${i.name} — التقطيع: ${i.cut} — الكمية: ${i.qty} — ${fmt(i.price*i.qty)} ر.س%0A`;
  });
  msg += `%0Aالإجمالي: ${fmt(total)} ر.س%0A%0Aالاسم:%0Aالحي والعنوان:%0Aالوقت المفضل للاستلام:`;
  window.open(`https://wa.me/966550368909?text=${msg}`, '_blank');
});

/* إشعار */
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');
let toastTimer;
function showToast(text){
  toastMsg.textContent = text;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove('show'), 2200);
}

/* قائمة الجوال */
const nav = document.getElementById('mainNav');
const menuToggle = document.getElementById('menuToggle');
menuToggle.addEventListener('click', ()=>{
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
  menuToggle.textContent = open ? '×' : '☰';
});
nav.addEventListener('click', e=>{
  if(e.target.tagName==='A'){ nav.classList.remove('open'); menuToggle.textContent='☰'; menuToggle.setAttribute('aria-expanded','false'); }
});
