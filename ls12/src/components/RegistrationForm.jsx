import React from 'react';
import { useFormik } from 'formik';

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      confirmPassword: '',
      birthDate: '',
      age: '',
      gender: '',
      comment: '',
    },
    onSubmit: (values) => {
      console.log('Registration Data:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={styles.form}>
      <h3 style={styles.title}>Регистрация</h3>

      <label>Имя:</label>
      <input
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <label>Пароль:</label>
      <input
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <label>Повторите пароль:</label>
      <input
        name="confirmPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
      />

      <label>Дата рождения:</label>
      <input
        name="birthDate"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.birthDate}
      />

      <label>Возраст:</label>
      <input
        name="age"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.age}
      />

      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={formik.handleChange}
            checked={formik.values.gender === 'male'}
          />
          Мужчина
        </label>

        <label style={{ marginLeft: '20px' }}>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={formik.handleChange}
            checked={formik.values.gender === 'female'}
          />
          Женщина
        </label>
      </div>

      <label>Комментарий:</label>
      <textarea
        name="comment"
        rows="4"
        onChange={formik.handleChange}
        value={formik.values.comment}
      />

      <div style={{ margin: '10px 0' }}>
        <a href="./Two.html" target="_blank" rel="noreferrer">
          Продолжить без регистрации
        </a>
      </div>

      <button type="submit">Сохранить</button>
    </form>
  );
};

const styles = {
  form: {
    width: '50%',
    margin: '0 auto',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    border: '1px solid #ccc',
  },
  title: {
    textAlign: 'center',
  },
};

export default RegistrationForm;
