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
  Hydrabox.warning = function(data) { Hydrabox.write('<hydrawarning>' + data + '</hydrawarning>'); }
  Hydrabox.hide = function() { Hydrabox.set('style', 'display: none;'); }
  Hydrabox.show = function() { Hydrabox.set('style', 'display: allow;'); }
  /* END Define Hydrabox */

  /* BEGIN Hydrabox stylesheet */
  Hydrabox.write('<style> hydra { background-color: grey; border-radius: 10px; position: fixed; bottom: 15px; left: 15px; padding-left: 10px; padding-bottom: 10px; min-width: 200px; min-height: 60px; display: none; } hydrawarning { color: yellow; } </style>')
  /* END Hydrabox stylesheet */

  /* BEGIN Define libraries */
  Hydrabox.write('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">')
  Hydrabox.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>')
  Hydrabox.write('<script type="test/javascript" src="https://unpkg.com/jquery@3.3.1/dist/jquery.min.js"></script>')
  /* END Define libraries */

  /* BEGIN Attach Hydrabox */
  document.body.appendChild(Hydrabox)
  /* END Attach Hydrabox */

  /* BEGIN Define HydraAPI */
  const HydraAPI = {}
  HydraAPI.fingerprint = (async function(){
    return await (await fetch('https://hydrabox.phazor.ir/API/Fingerprint/?session')).text()
  })
  HydraAPI.set = (async function(value) {
    const fingerprint = await HydraAPI.fingerprint()
    if(fingerprint === 'NULL') {
      Hydra.warning('Hydra was unable to detect your fingerprint, Please click <a href="https://hydrabox.phazor.ir/API/Fingerprint/">Here</a> to set it.')
      return 'NULL'
    } else {
      const response = await (await fetch('https://hydrabox.phazor.ir/API/Storage/write.php', {
        method: 'POST',
        body: JSON.stringify(value)
      })).text()
      return response
    }
  })
  HydraAPI.get = (async function() {
    const fingerprint = await HydraAPI.fingerprint()
    if(fingerprint === 'NULL') {
      Hydra.warning('Hydra was unable to detect your fingerprint, Please click <a href="https://hydrabox.phazor.ir/API/Fingerprint/">Here</a> to set it.')
      return 'NULL'
    } else {
      const response = await (await fetch('https://hydrabox.phazor.ir/API/Storage/read.php?fingerprint=' + fingerprint)).text()
      return response
    }
  })
  /* END Define HydraStorage */
  
  Hydra = {}
  return {
    'version': '0.1-BETA',
    'Hydrabox': Hydrabox,
    'API': HydraAPI,
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
