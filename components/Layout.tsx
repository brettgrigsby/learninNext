import Header from './Header'

const layoutStyles = {
  minHeight: '100vh',
  color: 'white'
}

function Layout({ children }) {
  return (
    <div style={layoutStyles}>
      <style jsx global>{`
        @font-face {
          font-family: 'lato-light';
          src: url('/Lato-Light.ttf');
        }
        @font-face {
          font-family: 'lato';
          src: url('/Lato-Regular.ttf');
        }
        @font-face {
          font-family: 'lato-bold';
          src: url('/Lato-Bold.ttf');
        }
        html, body {
          padding: 0;
          margin: 0;
          background-color: #0d1319;
          font-family: lato-light,lato,sans-serif;
        }
      `}</style>
      <Header />
      {children}
    </div>
  )
}

export default Layout
