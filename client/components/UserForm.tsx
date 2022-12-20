import React, { useState } from 'react'
import Button from './Button'
import InputField from './InputField'

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Click!")
  }

  return (
    <form>
      <div className="flex flex-col items-center">
        <InputField labelText='Username:' type='text' name='username' placeholderText='username' required/>
        <InputField labelText='Password:' type='password' name='password' placeholderText='password' required/>
        <br />
        <Button buttonText='Get Comments' type='button' onClick={handleOnClick}/>
      </div>
    </form>
  )
}

export default UserForm