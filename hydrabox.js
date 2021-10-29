/*
 * Hydrabox
 * The ultimate utility bookmarklet.
 */

const Hydra = function() {
  /* BEGIN Define Hydrabox */
  const Hydrabox = document.createElement('hydra')
  Hydrabox.write = function(text) { Hydrabox.innerHTML += text; }
  Hydrabox.set = function(name, value) { Hydrabox.setAttribute(name, value + ' '); }
  Hydrabox.get = function(name) { Hydrabox.getAttribute(name); }
  Hydrabox.hide = function() { Hydrabox.set('style', 'display: none;') }
  Hydrabox.show = function() { Hydrabox.set('style', 'display: allow;') }
  /* END Define Hydrabox */

  /* BEGIN Hydrabox stylesheet */
  Hydrabox.write('<style> hydra { position: fixed; bottom: 0px; left: 0px; min-width: 100px; min-height: 30px; style: display: none; } </style>')
  /* END Hydrabox stylesheet */

  /* BEGIN Define libraries */
  Hydrabox.write('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">')
  Hydrabox.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>')
  Hydrabox.write('<script type="test/javascript" src="https://unpkg.com/jquery@3.3.1/dist/jquery.min.js"></script>')
  /* END Define libraries */

  /* BEGIN Attach Hydrabox */
  document.body.appendChild(Hydrabox)
  /* END Attach Hydrabox */

  return {
    'version': '0.1-BETA',
    'Hydrabox': Hydrabox,
    'toast': function(text = "...", duration = 5000) {
      Toastify({
        text: text,
        duration: duration,
        close: true,
        gravity: 'bottom',
        position: 'left',
        stopOnFocus: true,
        style: { background: 'linear-gradient(to right, #00b09b, #96c93d)' }
      }).showToast()
    }
  }
}
