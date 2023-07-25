
import React from 'react'
import Head from './Head'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Head/>
      <header className='flex'>
        <div className="container paddingSmall">
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/finance'>Finance</Link></li>
              <li><Link to='/capital-market'>Capital Market</Link></li>
              <li><Link to='/world-economy'>World Economy</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header