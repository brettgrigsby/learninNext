import React from 'react'

const headerStyles = {
  padding: '15px 30px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 50
}

const logoStyles = {
  height: 35
}

const linksStyles = {
  display: 'flex',
  marginRight: 50
}

const linkStyles: React.CSSProperties = {
  textTransform: 'uppercase',
  fontFamily: 'lato-bold, sans-serif',
  marginLeft: 30,
  fontSize: 13
}

const links = ['home', 'about', 'insights', 'network', 'ask grace blue']

function Header() {
  return (
    <div style={headerStyles}>
      <img
        style={logoStyles}
        src="/GBTLogo.webp"
        alt="Grace Blue Transition Logo"
      />
      <div style={linksStyles}>
        {links.map(name => <div style={linkStyles}>{name}</div>)}
      </div>
    </div>
  )
}

export default Header
