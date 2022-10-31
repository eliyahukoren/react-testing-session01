import { useState } from 'react';
import Account from './components/Account/Account';
import LoginForm from './components/Login/LoginForm';
import Navbar from './components/Navbar/Navbar';

function App() {
    const [ isLoggedin, setLoggedIn] = useState(false);
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitLoginForm = (event) => {
        event.preventDefault();

        console.log('Submitting', event)
        setLoggedIn(true);
    }

	return (
		<div className="container">
            {!isLoggedin && <LoginForm handleForm={{ username, password, setUserName, setPassword, onSubmitLoginForm }} onSubmitLoginForm={() => onSubmitLoginForm} /> }
            {isLoggedin && <Navbar onLogout={() => setLoggedIn(false)} />}
            { isLoggedin && <Account staffId={11} /> }
		</div>
	);
}

export default App;
