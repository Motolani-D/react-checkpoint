import logo from './logo.svg';
import './App.css';
import formSignup from './formSignup';
import './form.css'

function App() {
  return (
    <div >
    <div className="form-content-center"> 
    <form className="form">
    <h1>Contact Us</h1>

    <div className="form-inputs">
        <label className="form-label" htmlFor="username">Username</label>
        <input id="username" type="text" className="form-input" name="Username" placeholder="Enter your name"/>


    </div>
    
    <div className="form-inputs">
        <label className="form-label" htmlFor="email">email</label>
        <input id="email" type="text" className="form-input" name="email" placeholder="Enter your email"/>


    </div>
    <div className="form-inputs">
        <label className="form-label" htmlFor="password">password</label>
        <input id="password" type="text" className="form-input" name="password" placeholder="Enter your password"/>


    </div>
    <div className="form-inputs">
        <label className="form-label" htmlFor="confirm password">confirm password</label>
        <input id="confirm password" type="text" className="form-input" name="Confirm password" placeholder="Confirm password"/>


    </div>
     <button className="form-input-btn" type="submit">Sign Up</button>
     <span className="form-input-login">Already have an Account? Login <a href="#">here</a></span>
    </form>
    </div>
    
    </div>
  );
}

export default App;
