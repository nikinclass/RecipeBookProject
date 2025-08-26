import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../styles/Account.css'

export default function Account(){
  const [validCredentials, setValidCredentials ] = useState(true);
  const [createAccount, setCreateAccount] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/')
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
      <form className="account-form" onSubmit={(e)=>{ handleSubmit(e) }}>
        <h2>Account Creation</h2>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="" id="verify_email" placeholder="example@example.com" />
        <label htmlFor="verify_email">Confirm Email</label>
        <input type="email" name="" id="email" placeholder="example@example.com" /><br />
        <label htmlFor="password">Password</label>
        <input type="password" name="" id="password" placeholder="password"/>
        <label htmlFor="verify_password">Confirm Password</label>
        <input type="password" name="" id="verify_password" placeholder="confirm"/><br />
        <div>
          <button type="submit" value="login">Create Account</button>
          <button type="button" onClick={()=>{ handleCancel() }}>Cancel</button>
        </div>
        <p>Returning user? <a onClick={()=>{setCreateAccount(false)}}>login</a></p>
      </form>
    )
  }

  return (
    <form className="account-form" onSubmit={(e)=>{ handleSubmit(e) }}>
      <h2>User Login</h2>
      <label htmlFor="email">Email Address {
        validCredentials ? "" : <span>Invalid email/password</span>
      }</label>
      <input type="email" name="" id="email" placeholder="example@example.com" /><br />
      <label htmlFor="password">Password</label>
      <input type="password" name="" id="password" placeholder="********"/><br />
      <div>
        <button type="submit" value="login">Login</button><br />
        <button type="button" onClick={()=>{ handleCancel() }}>Cancel</button>
      </div>
      <p>New user? <a onClick={()=>{setCreateAccount(true)}}>create account</a></p>
    </form>
  )
}