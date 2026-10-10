const CONFIG = { storeName: "Mega Virtual", whatsapp: "+593987624912" };
const products = [
  {
    id: 1,
    name: "Memorias USB Kingston",
    category: "Cargadores y adaptadores",
    image: "assets/images/productos/cargadoresyadaptadores/8gb.jfif",
    description:
      "Memorias USB Kingston disponibles en diferentes capacidades para almacenar y transportar tus archivos. Selecciona la capacidad que necesitas para consultar su precio y disponibilidad.",
    price: "6",
    stock: "1 unidad",
    colors: ["Gris"],
    variants: [
      {
        id: "usb-8gb",
        name: "8 GB",
        image: "assets/images/productos/cargadoresyadaptadores/8gb.jfif",
        price: "6,50",
        stock: "1 unidad",
      },
      {
        id: "usb-16gb",
        name: "16 GB",
        image: "assets/images/productos/cargadoresyadaptadores/16gb.jfif",
        price: "8,50",
        stock: "2 unidades",
      },
      {
        id: "usb-32gb",
        name: "32 GB",
        image: "assets/images/productos/cargadoresyadaptadores/32gb.jfif",
        price: "9,50",
        stock: "2 unidades",
      },
      {
        id: "usb-64gb",
        name: "64 GB",
        image: "assets/images/productos/cargadoresyadaptadores/64gb.jfif",
        price: "12,50",
        stock: "2 unidades",
      },
      {
        id: "usb-128gb",
        name: "128 GB",
        image: "assets/images/productos/cargadoresyadaptadores/128gb.jfif",
        price: "16,50",
        stock: "3 unidades",
      },
    ],
  },

  {
    id: 2,
    name: "Cable HDMI",
    category: "Cargadores y adaptadores",
    image: "assets/images/productos/cargadoresyadaptadores/cable5.jpg",
    description:
      "Cable HDMI de alta velocidad, ideal para conectar tus dispositivos y disfrutar de una calidad de imagen y sonido superior.",
    price: "3,50",
    stock: "29 unidades",
    colors: ["Negro", "Rojo"],
    variants: [
      {
        id: "cable-3m-plastico",
        name: "Cable 3m Plástico",
        image: "assets/images/productos/cargadoresyadaptadores/cable3mp.jpg",
        price: "3,50",
        stock: "5 unidades",
      },
      {
        id: "cable-3m-malla",
        name: "Cable 3m Malla reforzada",
        image: "assets/images/productos/cargadoresyadaptadores/cable3m.webp",
        price: "4",
        stock: "11 unidades",
      },
      {
        id: "cable-5m-malla",
        name: "Cable 5m Malla reforzada",
        image: "assets/images/productos/cargadoresyadaptadores/cable5.jpg",
        price: "5",
        stock: "14 unidades",
      },
    ],
  },
  {
    id: 3,
    name: "Audifonos AKG Tipo C",
    category: "Audio",
    image: "assets/images/productos/audio/AUDIFONOSTIPOC.png",
    description:
      "Audífonos AKG Tipo C, diseñados para ofrecer una experiencia de sonido envolvente y de alta calidad.",
    price: "3",
    stock: "15 unidades",
    colors: ["Negro"],
  },
  {
    id: 4,
    name: "Audifonos AKG Jack 3.5mm",
    category: "Audio",
    image: "assets/images/productos/audio/AKGJACK.webp",
    description:
      "Cable de audio jack 3.5mm para audífonos AKG, ideal para conexión con dispositivos compatibles.",
    price: "2,50",
    stock: "7 unidades",
    colors: ["Negro"],
  },
  {
    id: 5,
    name: "Cable 3 en 1",
    category: "Cargadores y adaptadores",
    image: "assets/images/productos/cargadoresyadaptadores/CABLE3EN1.webp",
    description:
      "Este práctico cable 3 en 1 cuenta con diferentes conectores para que puedas cargar distintos dispositivos de forma cómoda y sencilla.",
    price: "3",
    stock: "16 unidades",
    colors: ["Negro"],
  },
  {
    id: 6,
    name: "Cable de carga rapida Tipo c a c 8A",
    category: "Cargadores y adaptadores",
    image: "assets/images/productos/cargadoresyadaptadores/cablfast2.webp",
    description:
      "Cable de carga rápida 8A, ideal para cargar dispositivos compatible con tecnología de carga super rápida.",
    price: "2",
    stock: "11 unidades",
    colors: ["Negro"],
  },
  {
    id: 7,
    name: "Cable Tipo c a c",
    category: "Cargadores y adaptadores",
    image: "assets/images/productos/cargadoresyadaptadores/cablec.avif",
    description:
      "Cable Tipo C a C, ideal para cargar y transferir datos entre dispositivos compatibles con conectores USB Tipo C.",
    price: "2",
    stock: "12 unidades",
    colors: ["Azul", "Amarillo", "Verde", "Rosado", "Blanco"],
    variants: [
      {
        id: "cable-c-a-c-azul",
        name: "Azul",
        image: "assets/images/productos/cargadoresyadaptadores/cabletipocCeleste.avif",
      },
      {
        id: "cable-c-a-c-amarillo",
        name: "Amarillo",
        image: "assets/images/productos/cargadoresyadaptadores/cabletipocAmarillo.jfif",
      },
      {
        id: "cable-c-a-c-verde",
        name: "Verde",
        image: "assets/images/productos/cargadoresyadaptadores/cabletipocVerde.avif",
      },
      {
        id: "cable-c-a-c-rosado",
        name: "Rosado",
        image: "assets/images/productos/cargadoresyadaptadores/cabletipocRosado.avif",
      },
      {
        id: "cable-c-a-c-blanco",
        name: "Blanco",
        image: "assets/images/productos/cargadoresyadaptadores/cabletipocBlanco.webp",
      }
    ]
  },
  {
    id: 8,
    name: "Cable 4 en 1",
    category: "Cargadores y adaptadores",
    image: "assets/images/productos/cargadoresyadaptadores/cable4en1.jpg",
    description:
      "Cable 4 en 1, ideal para cargar múltiples dispositivos al mismo tiempo con diferentes tipos de conectores.",
    price: "3",
    stock: "9 unidades",
    colors: ["Morado", "Gris", "Negro", "Verde"],
    variants: [
      {
        id: "cable-4en1-morado",
        name: "Morado",
        image: "assets/images/productos/cargadoresyadaptadores/cable4en1morado.jfif",
      },
      {
        id: "cable-4en1-gris",
        name: "Gris",
        image: "assets/images/productos/cargadoresyadaptadores/cable4en1gris.jfif",
      },
      {
        id: "cable-4en1-negro",
        name: "Negro",
        image: "assets/images/productos/cargadoresyadaptadores/cable4en1negro.jfif",
      },
      {
        id: "cable-4en1-verde",
        name: "Verde",
        image: "assets/images/productos/cargadoresyadaptadores/cable4en1verde.jfif",
      }
    ]
  },
  {
    id: 9,
    name: "Adaptador dos en uno Tipo C - modelo 1",
    category: "Cargadores y adaptadores",
    image: "assets/images/productos/cargadoresyadaptadores/adaptadoruno.webp",
    description:
      "Adaptador dos en uno Tipo C, ideal para conectar dispositivos con diferentes tipos de puertos y disfrutar de una mayor versatilidad.",
    price: "4",
    stock: "9 unidades",
    colors: ["Negro", "Gris", "Rosa", "Rojo", "Dorado"],
    variants: [
      {
        id: "adaptador-2en1-c-modelo1-negro",
        name: "Negro",
        image: "assets/images/productos/cargadoresyadaptadores/adaptadorUnoNegro.jfif",
      },
      {
        id: "adaptador-2en1-c-modelo1-gris",
        name: "Gris",
        image: "assets/images/productos/cargadoresyadaptadores/adaptadorUnoGris.jfif",
      },
      {
        id: "adaptador-2en1-c-modelo1-rosa",
        name: "Rosa",
        image: "assets/images/productos/cargadoresyadaptadores/adaptadorUnoRosado.jfif",
      },
      {
        id: "adaptador-2en1-c-modelo1-rojo",
        name: "Rojo",
        image: "assets/images/productos/cargadoresyadaptadores/adaptadorUnoRojo.jfif",
      },
      {
        id: "adaptador-2en1-c-modelo1-dorado",
        name: "Dorado",
        image: "assets/images/productos/cargadoresyadaptadores/adaptadorUnoDorado.jfif",
      }
    ]
  },
  {
    id: 10,
    name: "Adaptador dos en uno Tipo C - modelo 2",
    category: "Cargadores y adaptadores",
    image: "assets/images/productos/cargadoresyadaptadores/adaptadorDos.jfif",
    description:
      "Adaptador dos en uno Tipo C, ideal para conectar dispositivos con diferentes tipos de puertos y disfrutar de una mayor versatilidad.",
    price: "4",
    stock: "7 unidades",
    colors: ["Negro", "Gris", "Rosa", "Rojo", "Dorado"],
    variants: [
      {
        id: "adaptador-2en1-c-modelo2-negro",
        name: "Negro",
        image: "assets/images/productos/cargadoresyadaptadores/adaptadorDosNegro.jfif",
      },
      {
        id: "adaptador-2en1-c-modelo2-gris",
        name: "Gris",
        image: "assets/images/productos/cargadoresyadaptadores/adaptadorDosGris.jfif",
      },
      {
        id: "adaptador-2en1-c-modelo2-rosa",
        name: "Rosa",
        image: "assets/images/productos/cargadoresyadaptadores/adaptadorDosRosado.jfif",
      },
      {
        id: "adaptador-2en1-c-modelo2-dorado",
        name: "Dorado",
        image: "assets/images/productos/cargadoresyadaptadores/adaptadorDosDorado.jfif",
      }
    ]
  },
  {
    id: 11,
    name: "Combo Teclado y Mouse AOAS A-1019 | Set Completo USB",
    category: "Accesorios",
    image: "assets/images/productos/accesorios/teclado5.webp",
    description:
      "Combo de teclado y mouse AOAS A-1019, ideal para mejorar tu experiencia de trabajo o juego con un set completo y funcional.",
    price: "15",
    stock: "1 unidad",
    colors: ["Gris"],
  },
  {
    id: 12,
    name: "Soportes para laptop P1",
    category: "Accesorios",
    image: "assets/images/productos/accesorios/Base-Plastico-Laptop-Portada.jpg",
    description:
      "Soportes para laptop, ideal para mantener tu dispositivo en posición cómoda mientras trabajas.",
    price: "4",
    stock: "51 unidades",
    colors: ["Negro", "Blanco", "Rosa"],
    variants: [
      {
        id: "soporte-p1-negro",
        name: "Negro",
        image: "assets/images/productos/accesorios/soporteNegroP1.jfif",
        price: "4",
        stock: "17 unidades",
      },
      {
        id: "soporte-p1-blanco",
        name: "Blanco",
        image: "assets/images/productos/accesorios/soporteBlancoP1.jfif",
        price: "4",
        stock: "17 unidades",
      },
      {
        id: "soporte-p1-rosa",
        name: "Rosado",
        image: "assets/images/productos/accesorios/soporteRosadoP1.jfif",
        price: "4",
        stock: "17 unidades",
      }
    ]
  },
  {
    id: 13,
    name: "Soportes para laptop Three Color",
    category: "Accesorios",
    image: "assets/images/productos/accesorios/Soporte-Laptop-Portada.jfif",
    description:
      "Soportes para laptop, ideal para mantener tu dispositivo en posición cómoda mientras trabajas.",
    price: "3",
    stock: "57 unidades",
    colors: ["Negro"],
    variants: [
      {
        id: "soporte-three-color-negro",
        name: "Negro",
        image: "assets/images/productos/accesorios/soporteNegroTc.jfif",
        price: "3",
        stock: "19 unidades",
      },
      {
        id: "soporte-three-color-blanco",
        name: "Blanco",
        image: "assets/images/productos/accesorios/soporteBlancoTc.jfif",
        price: "3",
        stock: "19 unidades",
      },
      {
        id: "soporte-three-color-rosa",
        name: "Rosado",
        image: "assets/images/productos/accesorios/soporteRosadoTc.jfif",
        price: "3",
        stock: "19 unidades",
      }
    ]
  },
  {
    id: 14,
    name: "Retrovisor Dash Cam Full HD",
    category: "Accesorios",
    image: "assets/images/productos/accesorios/retrovisor2.jpg",
    description:
      "Retrovisor Dash Cam Full HD, ideal para tener una visión completa de tu entorno mientras conduces.",
    price: "15",
    stock: "1 unidad",
    colors: ["Negro"],
  },
  {
    id: 15,
    name: "Combo Gamer 4 en 1",
    category: "Accesorios",
    image: "assets/images/productos/accesorios/combo1.png",
    description:
      "Combo de accesorios para gamers, ideal para mejorar tu experiencia de juego.",
    price: "25",
    stock: "1 unidad",
    colors: ["Negro"],
  },
  {
    id: 16,
    name: "Fundas Doypacks para coctel",
    category: "Hogar y Belleza",
    image: "assets/images/productos/hogarybelleza/doypack.jpg",
    description:
      "Fundas para coctel, ideal para proteger tu bebida mientras disfrutas de tu evento.",
    price: "20",
    stock: "100 unidades",
    colors: ["Blanco"],
    variants: [
      {
        id: "fundas-doypacks-coctel-blanco-500ml",
        name: "Blanco",
        image: "assets/images/productos/hogarybelleza/doypackUno.jfif",
        price: "21",
        stock: "100 unidades",
      },
      {
        id: "fundas-doypacks-coctel-blanco-300ml",
        name: "Blanco",
        image: "assets/images/productos/hogarybelleza/doypackDos.jfif",
        price: "20",
        stock: "100 unidades",
      }
    ]
  },
  {
    id: 17,
    name: "Olla Automática de presión",
    category: "Hogar y Belleza",
    image: "assets/images/productos/hogarybelleza/olla2.png",
    description:
      "Olla automática de presión, ideal para cocinar de manera eficiente y rápida.",
    price: "70",
    stock: "1 unidad",
    colors: ["Negro"],
  },
  {
    id: 18,
    name: "Secadora Profesional de cabello SN-1267",
    category: "Hogar y Belleza",
    image: "assets/images/productos/hogarybelleza/secadora.jpeg",
    description:
      "Secadora profesional de cabello SN-1267, ideal para secar tu cabello de manera rápida y eficiente.",
    price: "12",
    stock: "1 unidad",
    colors: ["Negro"],
  },
  {
    id: 19,
    name: "Rizador de pelo profesional SN-8558",
    category: "Hogar y Belleza",
    image: "assets/images/productos/hogarybelleza/ruilero2.jpeg",
    description:
      "Rizador de pelo profesional SN-8558, ideal para crear ondas y rizos en tu cabello.",
    price: "7",
    stock: "2 unidades",
    colors: ["Rosa"],
  },
  {
    id: 20,
    name: "Plancha de cabello SN-868",
    category: "Hogar y Belleza",
    image: "assets/images/productos/hogarybelleza/planchados.jpeg",
    description:
      "Plancha de cabello, ideal para alisar y dar forma a tu cabello.",
    price: "10",
    stock: "1 unidad",
    colors: ["Negro"],
  },
  {
    id: 21,
    name: "Plancha de cabello SN-728",
    category: "Hogar y Belleza",
    image: "assets/images/productos/hogarybelleza/plancha2.jpeg",
    description:
      "Plancha de cabello, ideal para alisar y dar forma a tu cabello.",
    price: "12",
    stock: "3 unidades",
    colors: ["Rojo"],
  },
  {
    id: 22,
    name: "Planchilla para el pelo SN-5246",
    category: "Hogar y Belleza",
    image: "assets/images/productos/hogarybelleza/rulero.jpeg",
    description:
      "Rulero de cabello, ideal para crear ondas y rizos en tu cabello.",
    price: "12",
    stock: "1 unidad",
    colors: ["Rosa"],
  },
  {
    id: 23,
    name: "Rizador de pelo de tres barriles F-12",
    category: "Hogar y Belleza",
    image: "assets/images/productos/hogarybelleza/ruleroi3.jpeg",
    description:
      "Rizador de pelo de tres barriles F-12, ideal para crear ondas y rizos en tu cabello.",
    price: "12",
    stock: "3 unidades",
    colors: ["Rosa"],
  },
  {
    id: 24,
    name: "Mini ventilador de mano",
    category: "Hogar y Belleza",
    image: "assets/images/productos/hogarybelleza/VENTILADORTRES.jpg",
    description:
      "Mini ventilador de mano, ideal para mantenerse fresco en días calurosos.",
    price: "4",
    stock: "1 unidad",
    colors: ["Rosa", "Verde", "Naranja", "Amarillo"],
  },
  {
    id: 25,
    name: "Splash Air Body Mist",
    category: "Hogar y Belleza",
    image: "assets/images/productos/hogarybelleza/flyer principal.jpg",
    description:
      "Splash Air Body Mist, ideal para mantener tu cuerpo fresco y cómodo.",
    price: "5",
    stock: "23 unidades",
    colors: ["Negro", "Rosa", "Azul", "Verde", "Amarillo"],
    variants: [
      {
        id: "splash-air-body-megavoltdorado",
        name: "megavoltdorado",
        image: "assets/images/productos/hogarybelleza/megavoltdorado.png",
        price: "5",
        stock: "5 unidades",
      },
      {
        id: "splash-air-body-xcodesilver",
        name: "xcodesilver",
        image: "assets/images/productos/hogarybelleza/xcodesilver.png",
        price: "5",
        stock: "5 unidades",
      },
      {
        id: "splash-air-body-championplomo",
        name: "championplomo",
        image: "assets/images/productos/hogarybelleza/championplomo.png",
        price: "5",
        stock: "5 unidades",
      },
      {
        id: "splash-air-body-vacationplan",
        name: "vacationplan",
        image: "assets/images/productos/hogarybelleza/vacationplan.png",
        price: "5",
        stock: "5 unidades",
      },
      {
        id: "splash-air-body-mist-championsazul",
        name: "championsazul",
        image: "assets/images/productos/hogarybelleza/championsazul.png",
        price: "5",
        stock: "5 unidades",
      },
      {
        id: "splash-air-body-mist-steeltroop",
        name: "steeltroop",
        image: "assets/images/productos/hogarybelleza/steeltroop.png",
        price: "5",
        stock: "5 unidades",
      },
      {
        id: "splash-air-body-mist-megavolt",
        name: "megavolt",
        image: "assets/images/productos/hogarybelleza/megavolt.png",
        price: "5",
        stock: "5 unidades",
      },
      {
        id: "splash-air-body-mist-manproud",
        name: "manproud",
        image: "assets/images/productos/hogarybelleza/manproud.png",
        price: "5",
        stock: "5 unidades",
      }
    ]
  },
  {
    id: 26,
    name: "Rimel para pestañas Sensational Lash",
    category: "Hogar y Belleza",
    image: "assets/images/productos/hogarybelleza/rimelUno.jpg",
    description:
      "Rimel para pestañas Sensational Lash, ideal para dar volumen y longitud a tus pestañas.",
    price: "5",
    stock: "1 unidad",
    colors: ["Cafe"],
  },
  {
    id: 27,
    name: "Rimel para pestañas Go Volume Lash",
    category: "Hogar y Belleza",
    image: "assets/images/productos/hogarybelleza/rimelDos.jpg",
    description:
      "Rimel para pestañas Go Volume Lash, ideal para dar volumen y longitud a tus pestañas.",
    price: "4",
    stock: "1 unidad",
    colors: ["Amarillo"],
  },
  {
    id: 28,
    name: "Pijama Satine 3 piezas",
    category: "Hogar y Belleza",
    image: "assets/images/productos/hogarybelleza/pijamaSatin.jpg",
    description:
      "Pijama Satine para mujer, ideal para un sueño cómodo y relajante.",
    price: "20",
    stock: "10 unidades",
    colors: ["Rosa", "Celeste", "Blanco"],
  },
  {
    id: 29,
    name: "Pijama Camiseta 3 piezas",
    category: "Hogar y Belleza",
    image: "assets/images/productos/hogarybelleza/pijamaCamiseta.jpg",
    description:
      "Pijama Camiseta 3 piezas, ideal para un sueño cómodo y relajante.",
    price: "12",
    stock: "11 unidades",
    colors: ["Rosa", "Blanco", "Verde"],
  },
  {
    id: 30,
    name: "Pijama Cereza 3 piezas",
    category: "Hogar y Belleza",
    image: "assets/images/productos/hogarybelleza/pijamaCereza.jpg",
    description:
      "Pijama Cereza 3 piezas, ideal para un sueño cómodo y relajante.",
    price: "12",
    stock: "7 unidades",
    colors: ["Rosa", "Blanco", "Verde"],
  },
  {
    id: 31,
    name: "Pijama Ligera 2 piezas",
    category: "Hogar y Belleza",
    image: "assets/images/productos/hogarybelleza/pijamaCinco.jpg",
    description:
      "Pijama Ligera 2 piezas, ideal para un sueño cómodo y relajante.",
    price: "5",
    stock: "9 unidades",
    colors: ["Rosa", "Blanco", "Verde"],
  },
  {
    id: 32,
    name: "Adaptador Antena Para Red Wfi Wireless 1200mbps 802.IIN",
    category: "Accesorios",
    image: "assets/images/productos/accesorios/antenawifi.webp",
    description:
      "Esta Antena Adaptador WiFi USB es la solución ideal para darle Wi-Fi a tu computadora de escritorio (PC) o mejorar la recepción de tu laptop.",
    price: "6",
    stock: "11 unidades",
    colors: ["Negro"],
  },
  {
    id: 33,
    name: "Perfumes Airbody: Tu Aroma Ideal 100 ml",
    category: "Hogar y Belleza",
    image: "assets/images/productos/hogarybelleza/perfume4.jpeg",
    description:
      "Colección Fragancias Airbody: Tu Aroma Ideal 100 ml (Varios Modelos)",
    price: "5",
    stock: "5 unidades",
    colors: ["Negro", "Rosa", "Morado"],
  },
];
