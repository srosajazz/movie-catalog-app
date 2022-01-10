import {ReactComponent as GithubIcon } from './assets/img/github.svg'
import './index.css';

function App () {
  return (
    <header>
      <nav className='container'>
        <div className='dsmovie-nav-content'>
          <h1>MovieApp</h1>
          <a
            href='https://github.com/srosajazz'
            target='_blank'
            rel='noreferrer'
          >
            <div className='dsmovie-contact-container'>
              <GithubIcon />
              <p className='dsmovie-contact-link'>/sergiorosa</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default App;
