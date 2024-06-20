
import './App.css'
import art1 from './assets/Artwork1.png'
import art2 from './assets/Artwork2.png'
import logo from './assets/logo.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons'

function App() {


  return (
    <>
      <div id='pattern' className="animated-pan"></div>
      <div id='gradient-overlay'></div>
      <main>
        <header>
          <img src={logo} alt="logo" className='logo1' />
          <div className='buttons'>
            <a href='https://x.com/billytokensol' className='icon' ><FontAwesomeIcon size={'xl'}  className='icon' icon={faTwitter}></FontAwesomeIcon></a>
            <a href='https://pump.fun/2PEKFGDdZzxPAGyuticaywA3M7N2875jJkxw3RT7pump' className='btn'>Buy on Pump.fun</a>
            <a href='https://t.me/billybitchhouse' className='icon'><FontAwesomeIcon size={'xl'}  className='icon' icon={faTelegram}></FontAwesomeIcon></a>
          </div>
        </header>
        <div className='side-by-side'>
          <section className='container'>
            <h1>Times up Dipshit yo pothead $Billy is here  </h1>
            <p>yo bitch, where’s my pot at?</p>
            <p>Jeets be making me feel Red lately 🤬</p>
            <p>I’ve got more bitches than you jeets</p>
          </section>
          <img src={art1} alt="art1" className='Artwork' />
        </div>
        <div className='side-by-side reverse-on-mobile'>
          <img src={art2} alt="art2" className='Artwork' />
          <section className='container'>
            <h2>$Billy foks bitches and prints Mills   </h2>
            <p>you ain’t got more money than me bitch. you dating a jeet that takes $100 per jeet trades</p>
            <p>jeets making some couple hunnid and they coming at me. •lemme ask you something. what’s the color of your Bugatti?</p>
            <p>clap those butt cheeks. imma put some milli on that bitch</p>
          </section>
        </div>
        <div className='side-by-side'>
          <section className='container'>
            <h2>$Billy ain’t playing around ya jeets  </h2>
            <p>you jeet got one bitch well i’ve got a surprise. i’ve got TONS of them 😈</p>
            <p>you jeets think you making some bread well i own the bakery</p>
          </section>
        </div>
        <div>
          <footer>
            <div className='buttons'>
              <a href='https://x.com/billytokensol' className='icon' ><FontAwesomeIcon size={'xl'} icon={faTwitter}></FontAwesomeIcon></a>
              <a href='https://t.me/billybitchhouse' className='icon'><FontAwesomeIcon size={'xl'} icon={faTelegram}></FontAwesomeIcon></a>
            </div>
          </footer>
        </div>
      </main>
    </>
  )
}

export default App
