import React, { useState } from 'react'
import Button from './Button'
import InputField from './InputField'
import RedditComment from './RedditComment'

interface UserData {
  username: string
  password: string
}

const UserForm = () => {

  const [userData, setUserData] = useState<UserData>({
    username: "",
    password: ""
  });

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(userData)
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({...userData,[event.target.name]:[event.target.value]});
  }

  return (
    <form>
      <div className="flex flex-col items-center">
        <InputField labelText='Username:' value={userData.username} type='text' name='username' placeholderText='username' onChange={handleOnChange} required/>
        <InputField labelText='Password:' value={userData.password} type='password' name='password' placeholderText='password' onChange={handleOnChange} required/>
        <br />
        <Button buttonText='Get Comments' type='submit' onClick={handleOnClick}/>
        <br />
      </div>
    </form>
  )
}

export default UserForm