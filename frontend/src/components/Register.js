import React, { useState } from 'react';
import axios from 'axios';
import './login_style.css';
import styles from './registration.module.css';

const Register = (props) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const { username, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      alert("Registration SucessFully");
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className={`${styles.wrapper} ${styles.fadeInDown}`}>
      <br /><h3>REGISTRATION</h3>
    <form onSubmit={onSubmit}>
      <input type="text" name="username" className={`${styles.fadeIn} ${styles.second}`} value={username} onChange={onChange} placeholder="Username" required />
      <input type="email" name="email" value={email} className={`${styles.fadeIn} ${styles.second}`} onChange={onChange} placeholder="Email" required />
      <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
      <button type="submit" className={`${styles.fadeIn} ${styles.fourth}`}>Register</button>
    </form>
    I have already an account &nbsp;
          <a href="#" className={styles.underlineHover} onClick={props.switch}>
            <span>Log In</span>
          </a>
        </div>
  );
};

export default Register;
