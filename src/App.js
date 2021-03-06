import { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import RegistrationForm from './components/RegistrationForm'
import Navigation from './components/Navigation'
import LogInForm from './components/LogInForm';

const App = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  const ChangeForm = () => {
    setIsRegistered(!isRegistered);
  }

  const LogIn = () => {
    
  }

  const Register = () => {

  }

  return (
    <div className="App">
      <Header selected={isRegistered} />
      {isRegistered && <LogInForm onSubmit={LogIn}/>}
      {!isRegistered && <RegistrationForm onSubmit={Register}/>}
      <Navigation 
        message={isRegistered ? 'Already registered? ' : "Don't have an account? "}
        onClick ={ChangeForm}
      />
    </div>
  );
}

export default App;
