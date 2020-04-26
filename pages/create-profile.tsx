import Layout from '../components/Layout'
import CreateProfileForm from '../components/CreateProfileForm'

const createProfileStyles = {
  margin: 'auto',
  maxWidth: 900
}

const titleStyles = {
  fontFamily: 'lato-bold, sans-serif',
  fontSize: 38,
  marginBottom: 5
}

const thicklineStyles = {
  height: 8,
  width: 423,
  backgroundColor: '#86d2ed'
}

const thinlineStyles = {
  height: 1,
  width: '100%',
  backgroundColor: '#86d2ed'
}


function createProfile() {
  return (
    <Layout>
      <div style={createProfileStyles}>
        <h1 style={titleStyles}>TELL US WHO YOU ARE</h1>
        <div style={thicklineStyles} />
        <div style={thinlineStyles} />
        <p style={{ fontSize: 18, margin: '10px 0' }}>
          We want to know about you so that we can connect you with the right people within the industry.
        </p>
        <CreateProfileForm />
      </div>
    </Layout>
  )
}

export default createProfile
