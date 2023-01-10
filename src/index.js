import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals';
import './style.scss'
// import registerServiceWorker from './registerServiceWorker'

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

const adobeFonts = document.createElement('link')
adobeFonts.setAttribute('href', 'https://use.typekit.net/fat4lop.css')
adobeFonts.setAttribute('rel', 'stylesheet')
document.head.insertAdjacentElement('afterbegin', adobeFonts)

const ui = document.createElement('div')
ui.id = 'uiEntry'
// ui.style.overflow = 'scroll'
document.body.insertAdjacentElement('afterbegin', ui)
ui.addEventListener('scroll', e => {
  console.log('ui container scrolling')
})
// to move scrolling event in for scroll snap
// ui.style.cssText = 'position: absolute;top: 0px; left: 0px; width: 100vw; height: 100vh; overflow-y: scroll;'
ui.style.position = 'fixed'
// scroll events not firing, perhaps because of the scroll libraries or functions.
document.addEventListener('scroll', e => { console.log('document scrolling') })
document.body.addEventListener('scroll', e => { console.log('body scrolling') })

// window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {}

/*
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

*/

// Google tag
const googleTag = document.createElement('script')
googleTag.src = 'https://www.googletagmanager.com/gtag/js?id=G-RYGVF7MLXZ'
googleTag.async = true
document.head.insertAdjacentElement('beforeend', googleTag)
// window['dataLayer '] = window['dataLayer '] || []
// function gtag() { dataLayer.push(arguments) }
// gtag('js', new Date())
// gtag('config', 'G-RYGVF7MLXZ')   

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

const root = createRoot(ui);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ReactDOM.render(<App/>, ui)
// console.log(App)
// console.log(typeof App)

// registerServiceWorker()
reportWebVitals();

