# webservco/html5-app

A simple HTML5 App Template with dynamic page navigation.

---

## Features:
- Dynamic page navigation (JavaScript "history" navigation): local pages are loaded dynamically, including a progress bar;
- Highlight active page in the navigation menu;
- CSS and JavaScript assets are optimized (concatenated and minified);

## Included libraries
- [jQuery](https://jquery.com/)
- Boostrap bundle ([Bootstrap](https://getbootstrap.com/) and [Popper](https://popper.js.org/))
- [PACE](https://www.npmjs.com/package/pace-js)
- [history-navigation](https://www.npmjs.com/package/@webservco/history-navigation)
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
Serve the `src` files with hot reload:
```
npm run devel
```

### Build the project
Clean everything and create production files in the `dist` folder:
```
npm run build
```

### Cleanup
```
npm run clean
```

---

## Usage

### Dynamic page navigation

Any `a` element using the class `app-nav` will be included in the dynamic page navigation.

### Active page menu highlight

Make sure to keep using the following structure for the navigation menu:
```
<nav>
    <ul>
        <li class="nav-item">
            <a class="app-nav ...
```

> For back button navigation, links will be highlighted only if they contain a full URL.
---

## References
https://css-tricks.com/gulp-for-beginners/  
https://george.webb.uno/posts/gulp-and-npm-for-front-end-web-development  
https://gist.github.com/jeromecoupe/0b807b0c1050647eb340360902c3203a  
https://zellwk.com/blog/nunjucks-with-gulp/  
