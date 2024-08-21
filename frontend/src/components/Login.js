import React, { useState } from 'react';
import axios from 'axios';
import './login.css'; // Importing basic styles

const Login = (props) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      alert("Login Successfully");
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h3>LOG IN</h3>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            className="underlineHover"
            value={email}
            onChange={onChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            className="underlineHover"
            value={password}
            onChange={onChange}
            placeholder="Password"
            required
          />
          <br /><br />
          <button
            type="submit"
            className="underlineHover"
          >
            Login
          </button>
        </form>
        <div id="formFooter">
          <a className="underlineHover" href="#" onClick={props.switch}>Create New Account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
