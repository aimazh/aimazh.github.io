import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import ChkSndLogo from './assets/images/chksnd-logo.png'
import FortylinesLogo from './assets/images/fortylines.svg'

const App = () => {
  return (
    <div className='app'>
      <div className='header'>
        <h1>Aibek Mazhitov</h1>
        <ul>
          <li>Software engineer @ <a href='https://www.flatex.com/'>flatexAG</a></li>
          <li>Founder @ <a href='https://aimazh.github.io/chksndapp/'>ChkSnd</a></li>
          <li>Music producer @ <a href='https://soundcloud.com/brakata/tracks'>Soundcloud</a></li>
        </ul>
      </div>

      <div className='social'>
        <a className='github' href='https://github.com/aimazh'>
          <i className='fab fa-github fa-2x' />
        </a>
        <a className='linkedin' href='https://www.linkedin.com/in/aimazh/'>
          <i className='fab fa-linkedin fa-2x' />
        </a>
        <a className='telegram' href='https://t.me/brakatamusic'>
          <i className='fab fa-telegram fa-2x' />
        </a>
        <a className='leetcode' href='https://leetcode.com/aimazh'>
          <i className='fab fa-codepen fa-2x' />
        </a>
      </div>

      <div className='divider' />

      <div className='my-projects'>
        <h2>My Projects</h2>

        <div className='projects'>
          <div className='project'>
            <img className='logo' src={ChkSndLogo} />
            <h2 className='name'>ChkSnd</h2>
            <p className='description'>ChkSnd is a tool to create music<br />videos with visual accompaniment.<br /><br />Available for iOS and Android.</p>
            <a className='website' href='https://chksnd.github.io/'>Website</a>
          </div>
          <div className='project'>
            <img className='logo' src={FortylinesLogo} />
            <h2 className='name'>Fortylines</h2>
            <p className='description'>Fortylines is a team of<br />young and ambitious people,<br />who build and deliver high-quality<br />IT solutions to the world.</p>
            <a className='website' href='https://fortylinesio.github.io/'>Website</a>
          </div>
        </div>
      </div>

      <div className='divider' />

      <div className='my-music'>
        <h2>My Music</h2>
        <div className='soudcloud-tracks'>
          <div className='track'>
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/738404512&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
          </div>
          <div className='track'>
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/734371576&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
          </div>
          <div className='track'>
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/566240346&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
          </div>
          <div className='track'>
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/566233968&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </div>
        </div>
      </div>

      <div className='divider' />

      <div className='footer'>
        <div>&lt;&gt; with &hearts;</div>
        <div>&copy; Aibek Mazhitov 2020</div>
        <div>amazhitov [at] gmail [dot] com</div>
      </div>
    </div>
  )
}

ReactDOM.render((
  <App />
), document.getElementById('root'))