# Usage

---

## Bootstrap

The layout is based on the [Bootstrap starter template](https://getbootstrap.com/docs/4.2/examples/starter-template/)

[Bootstrap documentation](https://getbootstrap.com/docs/4.2/getting-started/introduction/)

---

## Font Awesome

[Font Awesome usage](/docs/FontAwesome.md)

---

## Dynamic page navigation

Use the following structure in your document:
```
<main role="main" id="main">
    <div id="content" class="container" data-url="{currentUrl}">
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

### Advanced usage

For advanced customization please see the @webservco/history-navigation plugin documentation.

### Bootstrap modals

In order to use the dynamic page navigation system inside a Bootstrap modal, make sure to add `data-dismiss="modal"` to the link element in order to make sure the modal is closed when the link is clicked.
```
<a class="app-nav btn btn-primary" data-dismiss="modal" href="{url}">Confirm</a>
```

### Known problems

#### Page redirects
If the page you are loading is redirecting to another location, the browser URL bar is not updated, and will contain the original URL.

To overcome this limitation you can use an url data attribute on the content element in order to specify the current URL that should be used.
```
<div id="content" class="container" data-url="{currentUrl}">
```
