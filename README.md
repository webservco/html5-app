# webservco/html5-app

HTML5 App Template

---

## Features:
- Dynamic page navigation (JavaScript "history" navigation): local pages are loaded dynamically, including a progress bar
- CSS and JavaScript assets are optimized (concatenated and minified)

## Libraries included
- jquery
- boostrap bundle (bootstrap and popper)
- pace-js

---

## Dependencies
- [npm](https://www.npmjs.com/)
- [Gulp](https://gulpjs.com/)

---

## Usage

### Install
```
git clone https://github.com/webservco/html5-app.git my-project
cd my-project
npm install
```

### Development
Serve the `src` files with hot reload:
```
gulp run
```

### Build
Clean everything and create production files in the `dist` folder:
```
gulp build
```

### Cleanup
```
gulp clean
```

---

## References
https://css-tricks.com/gulp-for-beginners/  
https://george.webb.uno/posts/gulp-and-npm-for-front-end-web-development  
https://gist.github.com/jeromecoupe/0b807b0c1050647eb340360902c3203a  
https://zellwk.com/blog/nunjucks-with-gulp/  
