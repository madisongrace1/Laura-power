/* ==========================================================
   layout.js - Header + Footer sab pages me same.
   Header/footer me kuch badalna ho to sirf yahin badlo.
   Har page me sirf ye 3 cheezein chahiye:
     <div id="site-header"></div>
     <main> ... page content ... </main>
     <div id="site-footer"></div>
     <script src="layout.js"></script>
   ========================================================== */
(function () {
  var SPRITE = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
</svg>`;
  var HEADER = `<header class="site-header">
  <div class="wrap">
    <a class="logo" href="index.html" aria-label="Laura Powers home"><svg class="logo-mark" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="24" cy="24" r="22"/><path d="M24 11c5 6 5 15 0 22-5-7-5-16 0-22z" fill="currentColor" fill-opacity=".18"/><path d="M24 33c-7-1-13-6-14-14 7 0 12 5 14 14zM24 33c7-1 13-6 14-14-7 0-12 5-14 14z"/><path d="M15 38h18"/></svg><span class="logo-text"><b>Laura Powers</b><span>Coach · Author · Speaker</span></span></a>
    <button class="menu-btn" aria-label="Open menu" aria-expanded="false" aria-controls="nav">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
    </button>
    <nav class="nav" id="nav" aria-label="Main">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="coaching.html">Coaching</a>
      <a href="book.html">Book</a>
      <a href="testimonials.html">Testimonials</a>
      <a href="contact.html">Contact</a>
      <a class="btn btn-dark btn-sm" href="contact.html">Book a Call <svg><use href="#i-arrow"/></svg></a>
    </nav>
  </div>
</header>`;
  var FOOTER = `<footer class="site-footer">
  <div class="wrap">
    <a class="logo" href="index.html" aria-label="Laura Powers home"><svg class="logo-mark" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="24" cy="24" r="22"/><path d="M24 11c5 6 5 15 0 22-5-7-5-16 0-22z" fill="currentColor" fill-opacity=".18"/><path d="M24 33c-7-1-13-6-14-14 7 0 12 5 14 14zM24 33c7-1 13-6 14-14-7 0-12 5-14 14z"/><path d="M15 38h18"/></svg><span class="logo-text"><b>Laura Powers</b><span>Coach · Author · Speaker</span></span></a>
    <nav class="foot-nav" aria-label="Footer">
      <a href="index.html">Home</a><a href="about.html">About</a><a href="coaching.html">Coaching</a><a href="book.html">Book</a><a href="testimonials.html">Testimonials</a><a href="contact.html">Contact</a>
    </nav>
    <div class="social">
      <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.500A4.500 4.500 0 1 1 7.500 12 4.500 4.500 0 0 1 12 7.500zm0 2A2.500 2.500 0 1 0 14.500 12 2.500 2.500 0 0 0 12 9.500zM17.300 5.700a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg></a>
      <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M14 8V6.500c0-.7.300-1 1-1h2V2h-3a4 4 0 0 0-4 4v2H7v3.500h3V22h4v-10.500h3L17.500 8z"/></svg></a>
      <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M4.500 8.500h3.500V20H4.500zM6.200 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10 8.500h3.300v1.600c.5-.9 1.700-1.900 3.500-1.900 3.600 0 4.200 2.400 4.200 5.400V20h-3.500v-5.700c0-1.400 0-3-1.800-3s-2.100 1.400-2.100 2.900V20H10z"/></svg></a>
      <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M21.600 7.200a2.600 2.600 0 0 0-1.800-1.800C18.200 5 12 5 12 5s-6.200 0-7.800.4a2.600 2.600 0 0 0-1.800 1.800C2 8.800 2 12 2 12s0 3.200.4 4.800a2.600 2.600 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.600 2.600 0 0 0 1.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800zM10 15V9l5.200 3z"/></svg></a>
    </div>
    <p class="foot-script">A softer world<br>for stronger women.</p>
  </div>
</footer>`;

  document.getElementById('site-header').outerHTML = SPRITE + HEADER;
  document.getElementById('site-footer').outerHTML = FOOTER;

  // Current page ko menu me highlight karo
  var page = location.pathname.split('/').pop() || 'index.html';
  if (page.indexOf('.') === -1) page += '.html';
  document.querySelectorAll('#nav a:not(.btn)').forEach(function (a) {
    if (a.getAttribute('href') === page) a.setAttribute('aria-current', 'page');
  });

  // Mobile menu
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Testimonial slider: arrows + auto scroll (hover/touch par ruk jata hai)
  var track = document.querySelector('.track');
  function step() {
    var card = track.querySelector('.quote');
    return card ? card.getBoundingClientRect().width + 19 : 320;
  }
  function slide(dir) {
    var atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    if (dir > 0 && atEnd) track.scrollTo({ left: 0, behavior: 'smooth' });
    else track.scrollBy({ left: step() * dir, behavior: 'smooth' });
  }
  if (track) {
    document.querySelectorAll('.arrow').forEach(function (b) {
      b.addEventListener('click', function () { slide(Number(b.dataset.dir)); });
    });
    var timer = null;
    var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var play = function () { if (!still && !timer) timer = setInterval(function () { slide(1); }, 3500); };
    var stop = function () { clearInterval(timer); timer = null; };
    ['mouseenter', 'focusin', 'touchstart'].forEach(function (e) { track.addEventListener(e, stop, { passive: true }); });
    ['mouseleave', 'focusout'].forEach(function (e) { track.addEventListener(e, play); });
    track.addEventListener('touchend', function () { setTimeout(play, 4000); }, { passive: true });
    document.addEventListener('visibilitychange', function () { document.hidden ? stop() : play(); });
    play();
  }
})();
