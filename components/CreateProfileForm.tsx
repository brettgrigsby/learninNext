import { useState } from 'react'

const formContainerStyles = {
  width: '100%',
  backgroundColor: 'white',
  padding: 10,
  color: 'black',
  fontFamily: 'lato, sans-serif',
  marginTop: 15,
  marginBottom: 50
}

const inputStyles = {
  flex: 1,
  fontSize: 18,
  margin: 10,
  padding: 5
}

const initial = {
  firstName: '',
  lastName: '',
  email: ''
}

const radioLabelStyles = {
  marginLeft: 10
}

export default function createProfileForm() {
  const [formData, setFormData] = useState(initial)
  return (
    <div style={formContainerStyles}>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flex: 1 }}>
          <input style={inputStyles} type="text" name="firstName" placeholder="First Name" />
          <input style={inputStyles} type="text" name="lastName" placeholder="Last Name" />
        </div>
        <input style={inputStyles} type="text" name="email" placeholder="Personal Email*" />
        <input style={inputStyles} type="text" name="phone" placeholder="Personal Phone*" />
        <div style={{ display: 'flex', flex: 1 }}>
          <input style={inputStyles} type="text" name="city" placeholder="City" />
          <input style={inputStyles} type="text" name="dangerZone" placeholder="State/Region/Province" />
        </div>
        <input style={inputStyles} type="text" name="country" placeholder="Country" />
        <div style={{ margin: 10 }}>
          <span>Open to Relocation</span>
          <label style={radioLabelStyles}>
            <input type="radio" value="wouldRelocate" />
            Yes
          </label>
          <label style={radioLabelStyles}>
            <input type="radio" value="wouldRelocate" />
            No
          </label>
        </div>
        <input style={inputStyles} type="text" name="linkedin" placeholder="LinkedIn url" />
        <input style={inputStyles} type="text" name="previousCompany" placeholder="Previous Company" />
        <input style={inputStyles} type="text" name="previousPosition" placeholder="Previous Position" />
        <input style={inputStyles} type="text" name="positionLevel" placeholder="Position Level" />
        <input style={inputStyles} type="text" name="yearsExperience" placeholder="Years of Experience" />
        <input style={inputStyles} type="text" name="industryExperience" placeholder="Industry Experience" />
        <input style={inputStyles} type="text" name="categoryExperience" placeholder="Category Experience" />
        <input style={inputStyles} type="text" name="internationalExperience" placeholder="International Experience" />
        <div style={{ margin: 10 }}>
          <span>P&L Experience</span>
          <label style={radioLabelStyles}>
            <input type="radio" value="wouldRelocate" />
            Yes
          </label>
          <label style={radioLabelStyles}>
            <input type="radio" value="wouldRelocate" />
            No
          </label>
        </div>
        <input style={inputStyles} type="text" name="teamSize" placeholder="Size of Team Previously Managed" />
        <input style={inputStyles} type="text" name="pitchExperience" placeholder="New Business/Pitch Experience" />
        <input style={inputStyles} type="text" name="awards" placeholder="Awards Won" />
        <input style={inputStyles} type="text" name="insights" placeholder="Other Insights About You" />
        <input style={inputStyles} type="text" name="insights" placeholder="Upload CV/Resume" />
        <p style={{ margin: 10 }}>I accept the Grace Blue Data Partnership Agreement / Privacy Policy</p>
        <div style={{ margin: 10 }}>
          <label style={radioLabelStyles}>
            <input type="radio" value="agreeToSubmit" />
            Yes
          </label>
        </div>
        <button style={{ width: 100, height: 25, margin: 'auto' }}>Submit</button>
      </form>
    </div>
  )
}
