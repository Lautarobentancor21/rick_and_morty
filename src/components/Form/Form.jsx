import React, { useState } from "react";
import formStyles from "./Form.module.css";
import { validation } from "./validation";
import loginImage from "../../assets/rick-and-morty-login.png";

const Form = ({ login }) => {
  const initialState = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
    const errorsArray = Object.values(errors);
    if (errorsArray.length === 0) {
      alert("¡Login exitoso!");
      setUserData(initialState);
      setErrors(initialState);
    } else {
      alert("Correo o contraseña invalidos");
    }
  };

  const isFormValid = Object.values(userData).every((value) => value !== "");

  return (
    <div className={formStyles.formContainer}>
      <figure>
        <img src={loginImage} alt="rick-morty-logo" />
      </figure>
      <form onSubmit={handleSubmit}>
        <div className={formStyles["formContainer-items"]}>
          <label htmlFor="username">Username: </label>
          <input
            type="email"
            name="username"
            placeholder="Ingresa tu correo electronico ..."
            value={userData.username}
            onChange={handleInputChange}
            className={errors.username && formStyles.warning}
          />
          {errors.username && (
            <p className={formStyles.danger}>{errors.username}</p>
          )}
        </div>
        <div className={formStyles["formContainer-items"]}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            className={errors.password && formStyles.warning}
          />
          {errors.password && (
            <p className={formStyles.danger}>{errors.password}</p>
          )}
        </div>
        <button type="submit" disabled={!isFormValid}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Form;
