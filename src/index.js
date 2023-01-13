import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals';
import './style.scss'
// import registerServiceWorker from './registerServiceWorker'

/* Disable Devtools

// if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object' && process.env.MODE === 'production') {
//   // or
//   // const disableDevtools = document.createElement('script')
//   // disableDevtools.innerHTML = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {}
//   // document.head.insertAdjacentElement('beforeend', disableDevtools)
//   for (const [key, value] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
//     window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value === 'function' ? () => {} : null
//   }
// }
// const reduxDevtools = process.env.MODE === 'production' ? '' : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// dont know how kosher the following is
// history.pushState('', '', '')
// window.addEventListener('popstate', event => {
//   // window.event = event
//   history.pushState('', '', '')
// })

// window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {}

*/


// Adobe Fonts
  const adobeFonts = document.createElement('link')
  adobeFonts.setAttribute('href', 'https://use.typekit.net/fat4lop.css')
  adobeFonts.setAttribute('rel', 'stylesheet')
  document.head.insertAdjacentElement('afterbegin', adobeFonts)

// App UI container
  const ui = document.createElement('div')
  ui.id = 'uiEntry'
  
  document.body.insertAdjacentElement('afterbegin', ui)

/* Buy Me A Coffee Widget
// put in head of html
<script
      data-name="BMC-Widget"
      data-text="Buy me a satellite"
      data-cfasync="false"
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-id="zevonsocial"
      data-description="Support me on Buy me a coffee!"
      data-message=""
      data-color="#d90429"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="18"
    ></script>

    // const coffeeScript = document.createElement('script')
    // coffeeScript.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js'
    // coffeeScript.async = true
    // coffeeScript.setAttribute('data-name', 'BMC-Widget')
    // coffeeScript.setAttribute('data-cfasync', 'false')
    // coffeeScript.setAttribute('data-id', 'zevonsocial')
    // coffeeScript.setAttribute('data-description', 'Support me on Buy me a coffee!')
    // coffeeScript.setAttribute('data-message', 'This is not a scam 💯. Inbox me if you want to turn your $500 into my $500.')
    // coffeeScript.setAttribute('data-color', '#FF5F5F')
    // coffeeScript.setAttribute('data-position', 'Right')
    // coffeeScript.setAttribute('data-x_margin', '18')
    // coffeeScript.setAttribute('data-y_margin', '18')
    // document.head.insertAdjacentElement('beforeend', coffeeScript)
*/

// Google Tag
const googleTag = document.createElement('script')
googleTag.src = 'https://www.googletagmanager.com/gtag/js?id=G-RYGVF7MLXZ'
googleTag.async = true
document.head.insertAdjacentElement('beforeend', googleTag)
/* Google tag code notes
// window['dataLayer '] = window['dataLayer '] || []
// function gtag() { dataLayer.push(arguments) }
// gtag('js', new Date())
// gtag('config', 'G-RYGVF7MLXZ')   
*/

// Render 
const root = createRoot(ui);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

