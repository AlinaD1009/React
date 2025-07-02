import React, { useState } from "react";

export default function Form1() {
  const [form, setForm] = useState({
    name: "",
    password: "",
    password2: "",
    birthDate: "",
    age: "",
    sex: "",
    comment: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(form));
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "50%", margin: "auto", padding: 10 }}>
      <h3 style={{ textAlign: "center" }}>Регистрация</h3>

      <div className="input-group mb-3">
        <span className="input-group-text">Имя</span>
        <input name="name" value={form.name} onChange={handleChange} type="text" className="form-control" />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Пароль</span>
        <input name="password" value={form.password} onChange={handleChange} type="password" className="form-control" />
        <span className="input-group-text">Повторите пароль</span>
        <input name="password2" value={form.password2} onChange={handleChange} type="password" className="form-control" />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Дата рождения</span>
        <input name="birthDate" value={form.birthDate} onChange={handleChange} type="date" className="form-control" />
        <span className="input-group-text">Возраст</span>
        <input name="age" value={form.age} onChange={handleChange} type="number" className="form-control" />
      </div>

      <div>
        <label>
          <input type="radio" name="sex" value="male" checked={form.sex === "male"} onChange={handleChange} /> Вы мужчина
        </label>
        <label style={{ marginLeft: 10 }}>
          <input type="radio" name="sex" value="female" checked={form.sex === "female"} onChange={handleChange} /> Вы женщина
        </label>
      </div>

      <div className="form-floating" style={{ marginTop: 10 }}>
        <textarea
          name="comment"
          value={form.comment}
          onChange={handleChange}
          className="form-control"
          style={{ height: 100 }}
          id="floatingTextarea2"
        ></textarea>
        <label htmlFor="floatingTextarea2">Добавьте комментарий:</label>
      </div>

      <hr />
      <a href="./Two.html" target="_blank" rel="noreferrer" style={{ color: "rgb(114,112,112)", textDecoration: "none" }}>
        Продолжить без регистрации
      </a>
      <hr />

      <button type="submit" className="btn btn-outline-primary">Сохранить</button>
    </form>
  );
}
