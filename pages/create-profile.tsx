import Layout from '../components/Layout'
import CreateProfileForm from '../components/CreateProfileForm'

const createProfileStyles = {
  margin: 'auto',
  maxWidth: 800
}

function createProfile() {
  return (
    <Layout>
      <div style={createProfileStyles}>
        <h1>TELL US WHO YOU ARE</h1>
        <h4>We want to know about you so that we can connect you with the right people within the industry.</h4>
        <CreateProfileForm />
      </div>
    </Layout>
  )
}

export default createProfile
