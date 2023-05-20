import React from "react"
import Logo from '../images/Logo.svg'

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo" src={Logo}></div>
    </header>
    )
}
