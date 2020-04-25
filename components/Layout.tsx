import Header from './Header'

const layoutStyles = {
  backgroundColor: '#0d1319',
  height: '100%',
  color: 'white'
}

function Layout({ children }) {
  return (
    <div style={layoutStyles}>
      <style jsx global>{`
        html, body {
          padding: 0;
          margin: 0;
        }
      `}</style>
      <Header />
      {children}
    </div>
  )
}

export default Layout
