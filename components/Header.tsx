import React from 'react'

const headerStyles = {
  padding: '15px 30px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const logoStyles = {
  height: 35
}

const linksStyles = {
  display: 'flex'
}

const linkStyles: React.CSSProperties = {
  textTransform: 'uppercase',
  fontWeight: 'bold',
  marginLeft: 30
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
