import React from 'react'
import Button from './Button'
import InputField from './InputField'

const UserForm = () => {
  return (
    <form>
      <div className="flex flex-col items-center">
        <InputField labelText='Username:' type='text' name='username' placeholderText='username' required/>
        <InputField labelText='Password:' type='password' name='password' placeholderText='password' required/>
        <br />
        <Button buttonText='Get Comments' type='button'/>
      </div>
    </form>
  )
}

export default UserForm