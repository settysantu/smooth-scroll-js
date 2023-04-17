# Smooth Scroll JS
 A lightweight JavaScript plugin that enables smooth scrolling to target sections on a webpage, without adding the target section's ID to the URL.
 
## Usage

1. Include the `smooth-scroll.js` script in your HTML file, e.g.:

```html
   <script src="smooth-scroll.js"></script>
```

2. Add id attributes to the sections on your page that you want to link to, e.g.:

```html
<section id="section1">
  <h2>Section 1</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</section>

<section id="section2">
  <h2>Section 2</h2>
  <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</section>
```

3. Add links to your page that link to the sections using their id attributes, e.g.:

```html
<nav>
  <ul>
    <li><a href="#section1">Section 1</a></li>
    <li><a href="#section2">Section 2</a></li>
  </ul>
</nav>
```

4. Call the SmoothScroll() function to activate the smooth scrolling behavior on all links with a href attribute that starts with #, e.g.:

```js
<script>
  SmoothScroll();
</script>
```

That's it! Now your links will smoothly scroll to the target sections on your page without adding the target section's ID to the URL.

## License

This code is licensed under the MIT License. See LICENSE.txt for details.
