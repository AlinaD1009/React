import React, { useRef } from "react";

export default function Form2() {
  const formRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    const obj = Object.fromEntries(data.entries());
    alert(JSON.stringify(obj));
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} style={{ width: "50%", margin: "auto", padding: 20, backgroundColor: "rgba(239,238,238,0.48)" }}>
      <h3 style={{ textAlign: "center" }}>Параметры поиска</h3>

      <select name="productType" className="form-select" defaultValue="">
        <option value="" disabled>Оберiть тип продукту</option>
        <option value="1">Телефон</option>
        <option value="2">Ноутбук</option>
        <option value="3">Пилесос</option>
        <option value="4">Зарядка</option>
      </select>
      <hr />

      <div className="btn-group w-100" role="group">
        {["LG", "Asus", "Samsung", "Lenovo"].map(id => (
          <React.Fragment key={id}>
            <input type="checkbox" className="btn-check" id={id} name="brands" value={id} autoComplete="off" />
            <label className="btn btn-outline-primary" htmlFor={id}>{id}</label>
          </React.Fragment>
        ))}
      </div>
      <hr />

      <div className="btn-group w-100" role="group">
        {["15w", "25w", "65w", "100w", "200w"].map(id => (
          <React.Fragment key={id}>
            <input type="checkbox" className="btn-check" id={id} name="power" value={id} autoComplete="off" />
            <label className="btn btn-outline-primary" htmlFor={id}>{id}</label>
          </React.Fragment>
        ))}
      </div>
      <hr />

      <select name="sort" className="form-select" defaultValue="">
        <option value="" disabled>Сортування</option>
        <option value="1">Від дешевих</option>
        <option value="2">Від дорогих</option>
        <option value="3">За рейтингом</option>
      </select>
      <hr />

      <div className="input-group mb-3">
        <span className="input-group-text">Модель</span>
        <input name="model" type="text" className="form-control" />
      </div>

      <div style={{ textAlign: "end" }}>
        <button type="submit" className="btn btn-outline-primary w-25">Знайти</button>
      </div>
    </form>
  );
}
