import { useState } from "react";

/**
 * When the Form is rendered, it appears to be frozen. 
 * When a user enters stuff into the <input> tags or 
 * clicks on the reset button nothing happens. 
 * Identify and fix the error. 
 */
export default function Form() {
  // let firstName = '';
  // let lastName = '';
  const [firstName, setFName] = useState('')
  const [lastName, setLName] = useState('')

  function handleFirstNameChange(e: { target: { value: string; }; }) {
    setFName(e.target.value)
  }

  function handleLastNameChange(e: { target: { value: string; }; }) {
    setLName(e.target.value)
  }

  function handleReset() {
    setFName('')
    setLName('')
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
