import { useNavigate } from "react-router-dom";

export default function Account(){
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target[0].value, e.target[1].value);
  }

  const handleCancel = () => {
    navigate('/');
  }

  return (
    <form onSubmit={(e)=>{ handleSubmit(e) }}>
      <label htmlFor="email">Email Address</label>
      <input type="email" name="" id="email" placeholder="example@example.com" />
      <label htmlFor="password">Password</label>
      <input type="password" name="" id="password" placeholder="********"/>
      <button type="submit" value="login">Login</button>
      <button type="button" onClick={()=>{ handleCancel() }}>Cancel</button>
      <p>New user? <a>create account</a></p>
    </form>
  )
}