import './LoginSignupForm.css';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { signUpUser } from '../../store/auth.js';

// LoginForm.js
export function LoginForm({ onSubmit }) {
    return (
      <form className="signup-form-container" onSubmit={onSubmit}>
        <label className="signup-form-label" htmlFor="email">Email:</label>
        <input className="signup-form-input" type="email" id="email" name="email" required />
  
        <label className="signup-form-label" htmlFor="password">Password:</label>
        <input className="signup-form-input" type="password" id="password" name="password" required />
  
        <button className="signup-form-button" type="submit">Login</button>
      </form>
    );
  }
  
  
  // SignupForm.js
  export function SignupForm({ onSubmit }) {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize the navigate function
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = {
        email: e.target.email.value,
        password: e.target.password.value,
        password_confirmation: e.target.passwordConfirmation.value,
      };
      console.log(formData);
  
      const newUser = await dispatch(signUpUser(formData));
      if (newUser) {
        navigate('/dashboard'); // Redirect to the dashboard
      }
    };
  
    return (
      <form className="signup-form-container" onSubmit={handleSubmit}>
        <label className="signup-form-label" htmlFor="email">Email:</label>
        <input className="signup-form-input" type="email" id="email" name="email" required />

        <label className="signup-form-label" htmlFor="password">Password:</label>
        <input className="signup-form-input" type="password" id="password" name="password" required />

        <label className="signup-form-label" htmlFor="passwordConfirmation">Password Confirmation:</label>
        <input className="signup-form-input" type="password" id="passwordConfirmation" name="password_confirmation" required />

        <button className="signup-form-button" type="submit">Sign Up</button>
      </form>
    );
  }