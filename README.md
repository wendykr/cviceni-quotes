# Cvičení: Základy Webpacku

Cvičení do breakrooms pro kurz JavaScript 2 od Czechitas.

## 1. Citát

Vyzkoušejte si založení vlastního Webpack projektu s jednoduchou stránkou.

- Založte nový `vanilla` projekt s názvem *quotes*:
```javascript
npm init kodim-app@latest quotes vanilla
```

- Uvnitř projektu nastartujte vývojový server příkazem `npm run start`.
- Upravte soubor `index.html`. Uvnitř elementu `#app` vytvořte HTML pro stránku zobrazující nějaký známý citát. Upravte styly v souboru `style.css` a dejte stránce nějaký vzhled. Můžete se inspirovat třeba [zde](https://kodim.cz/cms/assets/kurzy/daweb/js2/webpack/cv-zaklady-webpacku/cvlekce%3Ecitat/quote.png). Vtipné citáty generované umělou inteligencí vám rád naservíruje [Inspirobot](https://inspirobot.me/). Zajímavé nápady bude mít jistě mít i [ChatGPT](https://chat.openai.com/).


## 2. Citát jako komponenta

Pokračujte v projektu z předchozího cvičení. Dle již známých postupů vytvoříme v oddělené složce komponentu pro jeden citát.

- Ve složce `src` vytvořte ve složce `Quote` komponentu, která očekává `props` ve formátu:

```javascript
{
  text: 'text citátu',
  author: 'autor citátu',
}
```

Komponenta nechť vytvoří HTML pro jeden citát.
- Do složky s komponentou nezapomeňte vložit související styly a ty správně importujte v souboru `Quote/index.js`.
- Přidejte vaší komponentě nějaký citát a zapojte výsledek do elementu `#app`.
- Ve složce `Quote` vytvořte složku `img` a do ní si stáhněte [ikonku citátu](https://kodim.cz/cms/assets/kurzy/daweb/js2/webpack/cv-zaklady-webpacku/cvlekce%3Ecitat-komponenta/quote-icon.svg)
- Upravte komponentu `Quote` a její CSS styly tak, aby zobrazovala citát s touto ikonkou. Ikonku použijte v CSS jako `background-image`.