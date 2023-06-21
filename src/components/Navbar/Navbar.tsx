import React from 'react';
import s from './Navbar.module.css'

export function Navbar() {
  return (
    <nav className={s.sidebar}>
      <div>
        <a href="">Profile</a>
      </div>
      <div>
        <a href="">Message</a>
      </div>
      <div>
        <a href="">News</a>
      </div>
      <div>
        <a href="">Music</a>
      </div>
      <div>
        <p><a href="#">Friends</a></p>
      </div>
    </nav>
  )
}