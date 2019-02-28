# Bootstrap Italia Nunjucks

Bootstrap Italia Nunjucks è un generatore di temi statici basato su [Bootstrap Italia](https://getbootstrap.com/docs/4.2/getting-started/introduction/) per la creazione di siti responsive e mobile-first.

Bootstrap Italia Nunjucks osserva le [linee guida di design per i servizi web delle Pubbliche Amministrazioni](https://docs.italia.it/italia/designers-italia/design-linee-guida-docs/).

**[Vedi la documentazione completa »](https://italia.github.io/bootstrap-italia/)**

## Come iniziare

Per utilizzare Bootstrap Italia Nunjucks e iniziare a creare una nuova pagina del tema è sufficiente aggiungere un nuovo file html nella cartella src/pages. Bootstrap Italia Nunjucks utilizza Nunjucks per modulare porzioni di markup html e l'inclusione di tali moduli.

## Installazione dipendenze
```javascript
  npm install
```

## Ambiente di sviluppo
Per avviare l'ambiente di sviluppo:
```javascript
  npm run start
```
Il server locale di sviluppo supporta il reload automatico attraverso [Browser Sync]

## Produzione compilati
Per la compilazione dei file sorgenti:
```javascript
  npm run build
```
Di default i file compilati sono generati nella cartella dist

## Licenze software dei componenti di terze parti

### Componenti distribuiti con Bootstrap Italia NunJucks

Vengono di seguito elencati i componenti distribuiti con Bootstrap Italia Nunjucks che hanno una propria licenza diversa da CC0.

- [jQuery](https://jquery.com/) © jQuery Foundation, licenza MIT
- [Popper.js](https://popper.js.org/) © Federico Zivolo and contributors, licenza MIT
- [Bootstrap 4](https://getbootstrap.com/) © Twitter, Inc., licenza MIT
- [Bootstrap Select](https://developer.snapappointments.com/bootstrap-select/) © SnapAppointments, LLC, licenza MIT
- [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/) © Owl (David Deutsch), licenza MIT
- [jQuery Easing](http://gsgd.co.uk/sandbox/jquery/easing/) © George McGinley Smith, licenza BSD

### Principali dipendenze per la fase di compilazione e sviluppo

- Motore di templating completo per javascript [Nunjucks](https://www.npmjs.com/package/nunjucks)
- Tool per il testing della correttezza formale dell'HTML[html-proofer](https://github.com/gjtorikian/html-proofer), © Garen Torikian, licenza MIT
- Tool per il reload automatico del browser [Browser Sync](https://www.browsersync.io/) Apache License Version 2.0
- Gestione del versionamento [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog/) © conventional-changelog team, ISC License
- Build system per le librerie Javascript e CSS [GulpJS](https://gulpjs.com/), © Blaine Bublitz, Eric Schoffstall and other contributors, licenza MIT
- Transpiler per moduli Javascript [Babel](https://babeljs.io/), © Sebastian McKenzie, licenza MIT
- Code formatter per Javascript [Prettier](https://prettier.io/), © James Long and contributors, licenza MIT
- Compilazione SASS [node-sass](https://github.com/sass/node-sass/), © Andrew Nesbitt, licenza MIT
- GitHub REST API client per JavaScript [Octokit rest.js](https://octokit.github.io/rest.js/) © 2012 Cloud9 IDE, Inc. (Mike de Boer), 2017-2018 Octokit contributors, licenza MIT
