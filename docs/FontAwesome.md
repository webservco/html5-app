# Font Awesome

## Setup

### CSS
- Enable in `main.css`;
- Disable JavaScript file;

### SVG
- Disable in `main.css`;
- Enable JavaScript file;

---

## Usage

### Regular
    <i class="fas fa-music"></i>


### Pseudo element - blank container (after)

#### HTML
    <i class="fa-pseudo-element-container"><i class="fa-pseudo-element-after"></i></i>

#### CSS
```
.fa-pseudo-element-container {
    position: relative;
    cursor: pointer;
}

.fa-pseudo-element-after:after {
    position: absolute;
    //display: none; // needed when using FA SVG
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f001";
}
```

### Pseudo element - icon (before)
#### HTML
    <i class="fa-pseudo-element-before"></i> Music

#### CSS
```
.fa-pseudo-element-before:before {
    display: inline-block;
    //display: none; // needed when using FA SVG
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f001";
}
```
---

## Misc

### Pseudo Elements
> https://fontawesome.com/how-to-use/on-the-web/advanced/css-pseudo-elements

#### JavaScript
Add `FontAwesomeConfig = { searchPseudoElements: true };` before script include.

#### CSS
Add `display: none;`
