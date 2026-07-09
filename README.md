# Tasas VE — BCV & Binance

App web para consultar en tiempo real las tasas de cambio de Venezuela: dólar y euro oficiales del BCV, y una referencia del mercado paralelo/USDT (Binance P2P). Incluye calculadora de conversión, equivalencia simultánea entre monedas, cálculo de brecha cambiaria e historial de consultas.

## ✨ Funcionalidades

- **Tasas en vivo**: BCV USD, BCV EUR y referencia Binance/paralelo, consultadas directamente desde el navegador (sin backend ni API key).
- **Brecha cambiaria**: diferencia porcentual entre BCV y Binance.
- **Conversión simple**: convierte entre Bs., USD BCV, EUR BCV y USDT (con botón de invertir).
- **Equivalencia total**: escribe un monto en una moneda y ve al instante su equivalente en las otras tres.
- **Historial**: guarda las últimas 30 consultas de forma persistente en el navegador.
- **100% responsive**: optimizado para móvil y escritorio.

## 🛠️ Stack

- HTML + JavaScript vanilla (sin build step, sin dependencias que instalar)
- [Tailwind CSS](https://tailwindcss.com/) vía CDN
- Tipografías: [Fraunces](https://fonts.google.com/specimen/Fraunces), [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- Datos: [DolarApi.com](https://dolarapi.com/) (API pública y gratuita)

## 📂 Estructura

```
tasas-ve-app/
├── index.html      # App completa (UI + lógica)
├── README.md
└── LICENSE
```

## 🚀 Cómo correrlo

No requiere instalación. Simplemente abre `index.html` en cualquier navegador, o sirve la carpeta con cualquier servidor estático:

```bash
# Opción rápida con Python
python3 -m http.server 8000

# Opción con Node
npx serve .
```

## 🌐 Publicarlo con GitHub Pages

1. Sube este repo a GitHub.
2. Ve a **Settings → Pages**.
3. En "Source" selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda. Tu app quedará disponible en `https://<tu-usuario>.github.io/<nombre-del-repo>/`.

## ⚠️ Nota sobre las fuentes de datos

La tasa "Binance P2P" mostrada es en realidad un promedio del mercado paralelo venezolano (vía DolarApi), no un scrape directo del libro de órdenes de Binance. Es la aproximación gratuita más confiable sin necesitar credenciales propias. Verifica siempre las tasas dentro de la app antes de tomar decisiones financieras.

## 📄 Licencia

MIT — libre para usar, modificar y distribuir.
