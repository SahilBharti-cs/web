// Basic client-side interactions and a product demo list.
// Replace product images and details with your real content.

const products = [
  { id:1, title:"The Archer Shirt", price:"₹2,399", img:"images/p1.jpg", desc:"Clean cut shirt in breathable cotton." },
  { id:2, title:"The Meridian Trench", price:"₹7,999", img:"images/p2.jpg", desc:"Lightweight trench with tailored silhouette." },
  { id:3, title:"Offset Trousers", price:"₹3,199", img:"images/p3.jpg", desc:"Versatile trousers with refined fit." },
  { id:4, title:"Everyday Tee", price:"₹999", img:"images/p4.jpg", desc:"Minimal tee in premium jersey." },
  { id:5, title:"Utility Jacket", price:"₹4,299", img:"images/p5.jpg", desc:"Durable jacket with functional pockets." },
  { id:6, title:"Boxy Knit", price:"₹2,799", img:"images/p6.jpg", desc:"Soft knit for layered styling." }
];

function renderProducts(){
  const grid = document.getElementById('products');
  grid.innerHTML = '';
  products.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}" loading="lazy" />
      <div class="p-title">${p.title}</div>
      <div class="p-price">${p.price}</div>
      <div class="p-desc">${p.desc}</div>
      <div style="margin-top:10px;display:flex;gap:10px;width:100%">
        <a class="btn primary" href="mailto:hello@shoracious.com?subject=Order%20:${encodeURIComponent(p.title)}">Buy / Enquire</a>
        <button class="btn ghost" onclick="quickView(${p.id})">Quick view</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function quickView(id){
  const p = products.find(x=>x.id===id);
  if(!p) return;
  alert(`${p.title}\n\n${p.desc}\n\nPrice: ${p.price}`);
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderProducts();
  document.getElementById('year').textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const fm = document.getElementById('formMessage');
    fm.textContent = 'Thanks — your message looks good. We will respond soon.';
    form.reset();
  });

  // mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  menuToggle && menuToggle.addEventListener('click', ()=>{
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.alignItems = 'flex-start';
    nav.style.gap = '8px';
    nav.style.padding = '12px';
    nav.style.background = 'rgba(255,255,255,0.98)';
    nav.style.position = 'absolute';
    nav.style.right = '20px';
    nav.style.top = '64px';
    nav.style.borderRadius = '10px';
    nav.style.boxShadow = '0 8px 30px rgba(10,10,10,0.06)';
  });
});

