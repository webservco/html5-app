# webservco/html5-app

An HTML5 app template.

Static Bootstrap site with Ajax page navigation through `@webservco/history-navigation`, built from Nunjucks templates and Sass into minified files.

- Requires: Node.js and npm
- Includes: jQuery 3, Bootstrap 4 with Popper, Font Awesome 5, [PACE](https://www.npmjs.com/package/pace-js) progress bar
- Related: [@webservco/history-navigation](https://github.com/webservco/history-navigation) (the navigation plugin this template shows off)

---

## Installation

```shell
git clone https://github.com/webservco/html5-app.git example-project
cd example-project
npm install
```

---

## Usage

```shell
# Build into app/ and serve it on http://localhost:3000 with live reload.
npm run devel
# Build the minified site into dist/.
npm run build
# Serve dist/ on http://localhost:3000.
npm run dist
# Delete app/ and dist/.
npm run clean
```

Pages go in `src/pages/` and extend `src/templates/layout.html`. Styles go in `src/scss/`, scripts in `src/js/`. `npm run build` concatenates and minifies the files between the `build:css` and `build:js` comments in the layout.

### Page navigation

Every link with the `app-nav` class loads the target page's `#content` into `#main` without a full reload. The `.nav-item` holding the link to the current page gets the `active` class.

```html
<main role="main" id="main">
    <div id="content" class="container" data-url="">
        ...
    </div>
</main>
```

Code that has to run on every page, including pages loaded this way, goes in `initialise()` in [src/js/initialise.js](src/js/initialise.js).

---

## Notes

If a page redirects, the address bar keeps the original URL. Set `data-url` on `#content` to the real URL to fix it.

In a Bootstrap modal, add `data-dismiss="modal"` to `app-nav` links so the modal closes when the page loads.

When navigating with the back button, menu links are highlighted only if their `href` is a full URL.

Font Awesome is included as CSS from `src/scss/main.scss`. To use the SVG version instead, remove the imports there and enable the `fontawesome-free/js/all.js` script in the layout. For [CSS pseudo-elements](https://fontawesome.com/how-to-use/on-the-web/advanced/css-pseudo-elements) with SVG, also uncomment `FontAwesomeConfig = { searchPseudoElements: true };` in the layout.

The gulpfile uses `gulp-if`, which isn't in `package.json`. Install it with `npm install --save-dev gulp-if` if the build fails.

---

## Documentation

- [Setup](docs/Setup.md): Install, develop and build.
- [Usage](docs/Usage.md): Layout, page navigation and known problems.
- [FontAwesome](docs/FontAwesome.md): Font Awesome setup, with pseudo-element examples.

---

## License

[MIT](LICENSE)
