import React, { useState } from 'react'
import { Button, FormGroup, FormControl, FormLabel, FormFile } from 'react-bootstrap'
import './App.css'

export default function App() {
  const [firstName, setFirstName]             = useState('')
  const [lastName, setLastName]               = useState('')
  // const [encryptionToken, setEncryptionToken] = useState('')

  function validateForm() {
    return firstName.length > 0 && lastName.length > 0 // && encryptionToken.length > 0
  }

  async function handleSubmit(event) {
    event.preventDefault()
    console.log('submit')
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId='firstName'>
          <FormLabel>First Name</FormLabel>
          <FormControl
            autoFocus
            type='text'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId='lastName'>
          <FormLabel>Last Name</FormLabel>
          <FormControl
            autoFocus
            type='text'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormFile id='cvFile' label='Add your CV' />
        </FormGroup>
        <Button block disabled={!validateForm()} type='submit'>
          Submit
        </Button>
      </form>
    </div>
  )
}
