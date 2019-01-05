# webservco/html5-app

A simple HTML5 App Template with dynamic page navigation.

This project showcases the jQuery plugin [@webservco/history-navigation](https://www.npmjs.com/package/@webservco/history-navigation).

---

## Features:
- Dynamic page navigation (JavaScript "history" navigation): local pages are loaded dynamically, including a progress bar;
- Highlight active page in the navigation menu;
- CSS and JavaScript assets are optimized (concatenated and minified);

## Included libraries
- [jQuery](https://jquery.com/)
- Boostrap bundle ([Bootstrap](https://getbootstrap.com/) and [Popper](https://popper.js.org/))
- [PACE](https://www.npmjs.com/package/pace-js)
- [@webservco/history-navigation](https://www.npmjs.com/package/@webservco/history-navigation)
> Please check [`package.json`](/package.json) for the actual version numbers currently used

---
## Setup

### Dependencies
- [npm](https://www.npmjs.com/)

### Install
```
git clone https://github.com/webservco/html5-app.git my-project
cd my-project
npm install
```

### Development
Browser test: serve the `src` files with hot reload:
```
npm run devel
```

### Build the project
Clean everything and create production files in the `dist` folder:
```
npm run build
```
Browser test: serve the `dist` files:
```
npm run dist
```

### Cleanup
```
npm run clean
```

---

## Usage

### Dynamic page navigation

Use the following structure in your document:
```
<main role="main" id="main">
    <div id="content" class="container">
        {page content...}
```

Any `a` element using the class `app-nav` will be included in the dynamic page navigation.

### Active page menu highlight

Use the following structure for the navigation menu:
```
<nav class="navbar">
    <ul>
        <li class="nav-item">
            <a class="app-nav ...
```

> Note: for back button navigation, navigation links will be highlighted only if they contain a full URL.

## Advanced usage

For advanced customization please see the @webservco/history-navigation plugin documentation.

---
