import { useState } from 'react'

const initial = {
  firstName: '',
  lastName: '',
  email: ''
}

export default function createProfileForm() {
  const [formData, setFormData] = useState(initial)
  return (
    <div>Da Form</div>
  )
}
