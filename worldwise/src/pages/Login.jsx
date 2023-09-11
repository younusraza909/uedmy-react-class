import { useEffect, useState } from 'react';
import PageNav from '../components/PageNav';
import styles from './Login.module.css';
import { useAuth } from '../context/FakeAuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login, isAuth } = useAuth();
  const navigate = useNavigate();
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState('jack@example.com');
  const [password, setPassword] = useState('qwerty');

  function handleClick(e) {
    e.preventDefault();
    login(email, password);
  }

  useEffect(() => {
    if (isAuth) {
      navigate('/app');
    }
  }, [isAuth]);

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button onClick={handleClick}>Login</button>
        </div>
      </form>
    </main>
  );
}
