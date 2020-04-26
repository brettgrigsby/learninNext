import { useState } from 'react'

const initial = {
  firstName: '',
  lastName: '',
  email: ''
}

export default function createProfileForm() {
  const [formData, setFormData] = useState(initial)
  return (
    <div style={{ width: '100%', backgroundColor: 'white' }}>
      <form>
        <input type="text" name="fname" />
        <input type="text" name="lname" />
      </form>
    </div>
  )
}
