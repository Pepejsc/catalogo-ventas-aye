const grid = document.querySelector("#grid");
const filters = document.querySelector("#filters");
const search = document.querySelector("#search");
const modal = document.querySelector("#modal");

const cats = ["Todos", ...new Set(products.map((p) => p.category))];
let active = "Todos";
let currentProduct = null;
let currentVariant = null;

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

function dots(colors = []) {
  return colors
    .map((color) => {
      const background = dotMap[color.toLowerCase()] || "#c8d0d8";
      return `<i class="dot" style="background:${background}"></i>`;
    })
    .join("");
}

function normalizeText(text) {
  return String(text ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function renderFilters() {
  filters.innerHTML = cats
    .map(
      (category) => `
        <button class="filter ${
          category === active ? "active" : ""
        }" data-c="${category}">
          ${category}
        </button>
      `,
    )
    .join("");

  document.querySelectorAll(".filter").forEach((button) => {
    button.onclick = () => {
      active = button.dataset.c;
      renderFilters();
      render();
    };
  });
}

function render() {
  const query = normalizeText(search.value.trim());

  const list = products.filter((product) => {
    const matchesCategory = active === "Todos" || product.category === active;

    const variantsText = (product.variants || [])
      .map((variant) => variant.name)
      .join(" ");

    const searchableText = normalizeText(
      `${product.name} ${product.category} ${
        product.description
      } ${variantsText}`,
    );

    return matchesCategory && searchableText.includes(query);
  });

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔎</div>
        <h3>No encontramos productos</h3>
        <p>Intenta con otro nombre o selecciona otra categoría.</p>
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
      (product) => `
        <article class="card">
          <div class="pic">
            ${
              product.image
                ? `<img src="${product.image}" alt="${product.name}">`
                : "AQUÍ VA LA IMAGEN DEL PRODUCTO"
            }
          </div>

          <div class="body">
            <div class="cat">${product.category}</div>
            <h3>${product.name}</h3>
            <div class="desc">${product.description}</div>
            <div class="price">$${product.price || "Consultar precio"}</div>
            <div class="stock">● En stock: ${
              product.stock || "Consultar disponibilidad"
            }</div>
            <div class="colors">
              <b>Colores:</b>${dots(product.colors || [])}
            </div>
            ${
              product.variants?.length
                ? `<div class="variant-summary">
                    ${product.variants.length} variantes disponibles
                  </div>`
                : ""
            }
            <button class="detail" data-id="${product.id}">
              Ver detalle
            </button>
          </div>
        </article>
      `,
    )
    .join("");

  document.querySelectorAll(".detail[data-id]").forEach((button) => {
    button.onclick = () => open(Number(button.dataset.id));
  });
}

function open(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;

  currentProduct = product;
  currentVariant = product.variants?.[0] || null;

  document.querySelector("#mCat").textContent = product.category;
  document.querySelector("#mName").textContent = product.name;
  document.querySelector("#mDesc").textContent = product.description;

  document.querySelector("#mColors").innerHTML =
    "<b>Colores:</b> " + dots(product.colors || []);

  renderProductDetail();

  document.querySelector("#footerWhatsApp").href =
    `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
      "Hola, quisiera información sobre sus productos.",
    )}`;

  modal.classList.add("open");
}

function renderProductDetail() {
  const product = currentProduct;
  if (!product) return;

  const variant = currentVariant;
  const image = variant?.image || product.image;
  const price = variant ? variant.price : product.price;
  const stock = variant ? variant.stock : product.stock;

  const imageBox = document.querySelector("#modalImg");

  imageBox.innerHTML = image
    ? `<img src="${image}" alt="${product.name}${
        variant ? " " + variant.name : ""
      }">`
    : "Imagen no disponible";

  document.querySelector("#mPrice").textContent = price
    ? `$${price}`
    : "Consultar precio";

  document.querySelector("#mStock").textContent = stock
    ? `Stock: ${stock}`
    : "Consultar disponibilidad";

  renderVariants();
  updateWhatsApp();
}

function renderVariants() {
  const container = document.querySelector("#mVariants");

  if (!currentProduct.variants?.length) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = `
    <p><b>Selecciona la capacidad:</b></p>
    <div class="variant-options">
      ${currentProduct.variants
        .map(
          (variant) => `
            <button
              type="button"
              class="variant-option ${
                currentVariant?.id === variant.id ? "selected" : ""
              }"
              data-variant-id="${variant.id}"
              aria-pressed="${currentVariant?.id === variant.id}"
            >
              ${variant.name}
            </button>
          `,
        )
        .join("")}
    </div>
  `;

  container.querySelectorAll("[data-variant-id]").forEach((button) => {
    button.onclick = () => {
      currentVariant = currentProduct.variants.find(
        (variant) => variant.id === button.dataset.variantId,
      );

      renderProductDetail();
    };
  });
}

function updateWhatsApp() {
  const product = currentProduct;
  const variant = currentVariant;

  const selection = variant ? ` - ${variant.name}` : "";
  const message = `Hola, quiero consultar por: ${product.name}${selection}. ¿Me pueden confirmar el precio y la disponibilidad?`;

  const whatsapp = document.querySelector("#mWa");
  whatsapp.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
    message,
  )}`;
  whatsapp.target = "_blank";
  whatsapp.rel = "noopener noreferrer";
}

document.querySelector("#close").onclick = () => modal.classList.remove("open");

modal.onclick = (event) => {
  if (event.target === modal) {
    modal.classList.remove("open");
  }
};

search.oninput = render;

const footerWhatsApp = document.querySelector("#footerWhatsApp");

footerWhatsApp.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
  "Hola, quisiera información sobre sus productos.",
)}`;
footerWhatsApp.target = "_blank";
footerWhatsApp.rel = "noopener noreferrer";

renderFilters();
render();
