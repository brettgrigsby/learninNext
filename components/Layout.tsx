import Header from './Header'

const layoutStyles = {
  minHeight: '100vh',
  color: 'white'
}

function Layout({ children }) {
  return (
    <div style={layoutStyles}>
      <style jsx global>{`
        html, body {
          padding: 0;
          margin: 0;
          background-color: #0d1319;
        }
      `}</style>
      <Header />
      {children}
    </div>
  )
}

export default Layout
