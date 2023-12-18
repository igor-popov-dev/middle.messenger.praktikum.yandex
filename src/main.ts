import '../style.css'
// import javascriptLogo from '../javascript.svg'
// import viteLogo from '../vite.svg'
import { setupCounter } from '../counter.ts'

const app = document.querySelector<HTMLDivElement>('#app')
if (app) {
  app.innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
}


setupCounter(document.querySelector('#counter'))