import { useState } from 'react';
import { useRouter } from 'next/router';
import Axios from 'axios'; // replace with your own database path
import { getSession } from 'next-auth/react'
import bcrypt from 'bcryptjs';
import { setCookie } from 'nookies';


export default function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const resultSet = await Axios.post("/api/login/login", { password: password });
    if (username === 'etm_root' && resultSet.data) {
      setCookie(null, 'isAdmin', true, { path: '/' }); // Set custom admin property in cookie
      router.push('/dashboard');
    } else {
      console.log('Incorrect login credentials');
    }
  }

  return (
    <div className="eden__form">
      <div className="form__title">
        <h1>Please Log In:</h1>
      </div>
      <div className="eden__form_line">
        <label>Username: </label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="eden__form_line">
        <label>Password: </label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="form__button">
        <button onClick={handleSubmit}>Log In</button>
      </div>
    </div>
  );
}


