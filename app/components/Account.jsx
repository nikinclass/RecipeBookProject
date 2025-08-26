import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Account(){
  const [validCredentials, setValidCredentials ] = useState(true);
  const [createAccount, setCreateAccount] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = {
        "email": e.target[0].value,
        "password": e.target[1].value
    }
    const headers = {
        "Content-Type" : "application/json"
    }
    fetch('http://localhost:8080/', {
        method: "POST",
        headers: headers,
        body: JSON.stringify(submitData),
    })
      .then(res => {
        if(res.status == 401){
          setValidCredentials(false);
        } else if(res.status == 200){
          setValidCredentials(true);
          navigate('/');
        }
      })
      .catch(err => console.error(err));
    console.log(e.target[0].value, e.target[1].value);
  }

  const handleCancel = () => {
    navigate('/');
  }

  if( createAccount ){
    return (
      <form onSubmit={(e)=>{ handleSubmit(e) }}>
        <h2>Account Creation</h2>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="" id="verify_email" placeholder="example@example.com" />
        <label htmlFor="verify_email">Confirm Email</label>
        <input type="email" name="" id="email" placeholder="example@example.com" />
        <label htmlFor="password">Password</label>
        <input type="password" name="" id="password" placeholder="password"/>
        <label htmlFor="verify_password">Confirm Password</label>
        <input type="password" name="" id="verify_password" placeholder="confirm"/>
        <button type="submit" value="login">Create Account</button>
        <button type="button" onClick={()=>{ handleCancel() }}>Cancel</button>
        <p>Returning user? <a onClick={()=>{setCreateAccount(false)}}>login</a></p>
      </form>
    )
  }

  return (
    <form onSubmit={(e)=>{ handleSubmit(e) }}>
      <label htmlFor="email">Email Address {
        validCredentials ? "" : <span>Invalid email/password</span>
      }</label>
      <input type="email" name="" id="email" placeholder="example@example.com" />
      <label htmlFor="password">Password</label>
      <input type="password" name="" id="password" placeholder="********"/>
      <button type="submit" value="login">Login</button>
      <button type="button" onClick={()=>{ handleCancel() }}>Cancel</button>
      <p>New user? <a onClick={()=>{setCreateAccount(true)}}>create account</a></p>
    </form>
  )
}