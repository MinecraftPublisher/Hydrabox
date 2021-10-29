/*
 * Hydrabox
 * The ultimate utility bookmarklet.
 */

let Hydra = (function() {
  /* BEGIN Define Hydrabox */
  const Hydrabox = document.createElement('hydra')
  Hydrabox.write = function(text) { Hydrabox.innerHTML += text; }
  Hydrabox.set = function(name, value) { Hydrabox.setAttribute(name, value + ' '); }
  Hydrabox.get = function(name) { Hydrabox.getAttribute(name); }
  Hydrabox.hide = function() { Hydrabox.set('style', 'display: none;') }
  Hydrabox.show = function() { Hydrabox.set('style', 'display: allow;') }
  /* END Define Hydrabox */

  /* BEGIN Hydrabox stylesheet */
  Hydrabox.write('<style> hydra { background-color: grey; border-radius: 10px; position: fixed; bottom: 15px; left: 15px; padding-left: 10px; padding-bottom: 10px; min-width: 200px; min-height: 60px; style: display: none; } </style>')
  /* END Hydrabox stylesheet */

  /* BEGIN Define libraries */
  Hydrabox.write('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">')
  Hydrabox.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>')
  Hydrabox.write('<script type="test/javascript" src="https://unpkg.com/jquery@3.3.1/dist/jquery.min.js"></script>')
  /* END Define libraries */

  /* BEGIN Attach Hydrabox */
  document.body.appendChild(Hydrabox)
  /* END Attach Hydrabox */

  /* BEGIN Define HydraStorage */
  const HydraStorage = {}
  Hydrastorage.fingerprint = (async function(){
    return await (await fetch('https://hydrabox.phazor.ir/API/Fingerprint/?session')).text()
  })
  HydraStorage.set = (function(name, value) {
    console.log('Dummy command')
  })
  HydraStorage.get = (function(name) {
    console.log('Dummy command')
  })
  /* END Define HydraStorage */
  
  Hydra = {}
  return {
    'version': '0.1-BETA',
    'Hydrabox': Hydrabox,
    'HydraStorage': HydraStorage,
    'toast': (function(text = "...", duration = 5000) {
      Toastify({
        text: text,
        duration: duration,
        close: true,
        gravity: 'bottom',
        position: 'left',
        stopOnFocus: true,
        style: { background: 'linear-gradient(to right, #00b09b, #96c93d)' }
      }).showToast()
    })
  }
})

window.Hydra = Hydra()
