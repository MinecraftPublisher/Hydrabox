/*
 * Hydrabox
 * The ultimate utility bookmarklet.
 */

let Hydra = (async function() {
  /* BEGIN Define Hydrabox */
  const Hydrabox = document.createElement('hydra')
  Hydrabox.write = function(text) { Hydrabox.innerHTML += text; }
  Hydrabox.set = function(name, value) { Hydrabox.setAttribute(name, value + ' '); }
  Hydrabox.get = function(name) { Hydrabox.getAttribute(name); }
  Hydrabox.warning = function(data) { Hydrabox.write('<hydrawarning>' + data + '</hydrawarning>') }
  Hydrabox.hide = function() { Hydrabox.set('style', 'display: none;'); }
  Hydrabox.show = function() { Hydrabox.set('style', 'display: allow;'); }
  /* END Define Hydrabox */

  /* BEGIN Hydrabox stylesheet */
  Hydrabox.write('<style> hydra { background-color: grey; border-radius: 10px; position: fixed; bottom: 15px; left: 15px; padding-left: 10px; padding-bottom: 10px; min-width: 200px; min-height: 60px; } hydrawarning { color: yellow; } </style>')
  /* END Hydrabox stylesheet */

  /* BEGIN Define libraries */
  await import('https://unpkg.com/jquery@3.3.1/dist/jquery.min.js')
  await import('https://unpkg.com/hotkeys-js/dist/hotkeys.min.js')
  /* END Define libraries */

  /* BEGIN Attach Hydrabox */
  Hydrabox.hide()
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
      const response = await (await fetch('https://hydrabox.phazor.ir/API/Storage/write.php?fingerprint=' + fingerprint, {
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
  
  /* BEGIN Define event listeners */
  hotkeys('alt+.', function(event, handler) {
    if(Hydrabox.get('style') === 'display: none;') {
      Hydrabox.show()
    } else {
      Hydrabox.hide()
    }
  })
  /* END Define event listeners */
  
  Hydra = {}
  return {
    'version': '0.5.78',
    'Hydrabox': Hydrabox,
    'API': HydraAPI
  }
})

Hydra().then((hydra) => window.Hydra = hydra)
