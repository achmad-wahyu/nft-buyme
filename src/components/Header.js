import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <div className="header">
        <h1 className="title">$BUYME</h1>
        <button className="connect-wallet">Connect Wallet</button>
    </div>
  )
}

export default Header