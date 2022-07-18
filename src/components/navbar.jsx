import React from 'react';
import clasess from './navbar.module.css';


const Navbar = () => {
    return(
      <nav className={clasess.nav}>
        <div className={clasess.item}>
          <a>User</a>
        </div>
        <div className={clasess.item}>
          <a>Messeges</a>
        </div>
        <div className={clasess.item}>
          <a>News</a>
        </div>
        <div className={clasess.item}>
          <a>Music</a>
        </div>
        <div className={clasess.item}>
          <a>Settings</a>
        </div>
      </nav>
    )
}

export default Navbar