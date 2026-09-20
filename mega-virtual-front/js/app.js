const grid = document.querySelector("#grid"),
  filters = document.querySelector("#filters"),
  search = document.querySelector("#search"),
  modal = document.querySelector("#modal");
const cats = ["Todos", ...new Set(products.map((p) => p.category))];
let active = "Todos";
const dotMap = {
  negro: "#111",
  blanco: "#fff",
  rosado: "#f49ab6",
  rosa: "#f49ab6",
  rojo: "#e53935",
  azul: "#2586d8",
  verde: "#43a86b",
  amarillo: "#f1c40f",
  gris: "#8a9199",
  plomo: "#7d858d",
  morado: "#800080",
  dorado: "#d7a94b",
  naranja: "#f39c12",
  cafe: "#6f4e37",
};
function dots(a) {
  return a
    .map((c) => {
      let x = dotMap[c.toLowerCase()] || "#c8d0d8";
      return `<i class="dot" style="background:${x}"></i>`;
    })
    .join("");
}
function renderFilters() {
  filters.innerHTML = cats
    .map(
      (c) =>
        `<button class="filter ${c == active ? "active" : ""}" data-c="${c}">${c}</button>`,
    )
    .join("");
  document.querySelectorAll(".filter").forEach(
    (b) =>
      (b.onclick = () => {
        active = b.dataset.c;
        renderFilters();
        render();
      }),
  );
}
function normalizeText(text) {
  return String(text ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function render() {
  const q = normalizeText(search.value.trim());

  const list = products.filter((p) => {
    const matchesCategory = active === "Todos" || p.category === active;

    const searchableText = normalizeText(
      `${p.name} ${p.category} ${p.description}`,
    );

    const matchesSearch = searchableText.includes(q);

    return matchesCategory && matchesSearch;
  });
  if (list.length === 0) {
    grid.innerHTML = `
    <div class="empty-state">
      <div class="empty-icon">🔎</div>
      <h3>No encontramos productos</h3>
      <p>Intenta con otro nombre o selecciona una categoría diferente.</p>
      <button id="clearSearch" class="detail">
        Ver todos los productos
      </button>
    </div>
  `;

    document.querySelector("#clearSearch").onclick = () => {
      search.value = "";
      active = "Todos";
      renderFilters();
      render();
    };

    return;
  }
  grid.innerHTML = list
    .map(
      (p) => `
        <article class="card">
          <div class="pic">
            ${
              p.image
                ? `<img src="${p.image}" alt="${p.name}">`
                : "AQUÍ VA LA IMAGEN<br>DEL PRODUCTO"
            }
          </div>

          <div class="body">
            <div class="cat">${p.category}</div>
            <h3>${p.name}</h3>
            <div class="desc">${p.description}</div>
            <div class="price">$${p.price}</div>
            <div class="stock">● En stock: ${p.stock}</div>
            <div class="colors">
              <b>Colores:</b>${dots(p.colors)}
            </div>
            <button class="detail" data-id="${p.id}">
              Ver detalle
            </button>
          </div>
        </article>
      `,
    )
    .join("");

  document.querySelectorAll(".detail").forEach((b) => {
    b.onclick = () => open(+b.dataset.id);
  });
}
function open(id) {
  let p = products.find((x) => x.id == id);
  document.querySelector("#mCat").textContent = p.category;
  document.querySelector("#mName").textContent = p.name;
  document.querySelector("#mDesc").textContent = p.description;
  document.querySelector("#mPrice").textContent = "$" + p.price;
  document.querySelector("#mStock").textContent = "Stock: " + p.stock;
  document.querySelector("#mColors").innerHTML =
    "<b>Colores:</b> " + dots(p.colors);
  let box = document.querySelector("#modalImg");
  box.innerHTML = p.image
    ? `<img src="${p.image}" alt="${p.name}">`
    : "AQUÍ VA LA IMAGEN DEL PRODUCTO";
  document.querySelector("#mWa").href =
    `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("Hola, quiero consultar por: " + p.name)}`;
  modal.classList.add("open");
  document.querySelector("#footerWhatsApp").href =
    `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("Hola, quisiera información sobre sus productos.")}`;
}
document.querySelector("#close").onclick = () => modal.classList.remove("open");
modal.onclick = (e) => {
  if (e.target == modal) modal.classList.remove("open");
};
search.oninput = render;
// Configurar WhatsApp del footer desde que carga la página
const footerWhatsApp = document.querySelector("#footerWhatsApp");

footerWhatsApp.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
    "Hola, quisiera información sobre sus productos."
)}`;

footerWhatsApp.target = "_blank";
footerWhatsApp.rel = "noopener noreferrer";
renderFilters();
render();
