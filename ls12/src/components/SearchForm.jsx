import React from 'react';
import { useFormik } from 'formik';

const SearchForm = () => {
  const formik = useFormik({
    initialValues: {
      productType: '',
      brands: [],
      powers: [],
      sortBy: '',
      model: '',
    },
    onSubmit: (values) => {
      console.log('Search Params:', values);
    },
  });

  const toggleCheckbox = (field, value) => {
    const current = formik.values[field];
    if (current.includes(value)) {
      formik.setFieldValue(field, current.filter((v) => v !== value));
    } else {
      formik.setFieldValue(field, [...current, value]);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} style={styles.form}>
      <h3 style={styles.title}>Параметры поиска</h3>

      <label>Тип продукта:</label>
      <select
        name="productType"
        onChange={formik.handleChange}
        value={formik.values.productType}
      >
        <option value="">Оберiть тип продукту</option>
        <option value="phone">Телефон</option>
        <option value="laptop">Ноутбук</option>
        <option value="vacuum">Пылесос</option>
        <option value="charger">Зарядка</option>
      </select>

      <label>Бренд:</label>
      <div style={styles.checkboxGroup}>
        {['LG', 'Asus', 'Samsung', 'Lenovo'].map((brand) => (
          <label key={brand}>
            <input
              type="checkbox"
              checked={formik.values.brands.includes(brand)}
              onChange={() => toggleCheckbox('brands', brand)}
            />
            {brand}
          </label>
        ))}
      </div>

      <label>Мощность:</label>
      <div style={styles.checkboxGroup}>
        {['15w', '25w', '65w', '100w', '200w'].map((power) => (
          <label key={power}>
            <input
              type="checkbox"
              checked={formik.values.powers.includes(power)}
              onChange={() => toggleCheckbox('powers', power)}
            />
            {power}
          </label>
        ))}
      </div>

      <label>Сортировка:</label>
      <select
        name="sortBy"
        onChange={formik.handleChange}
        value={formik.values.sortBy}
      >
        <option value="">Сортування</option>
        <option value="cheap">Від дешевих</option>
        <option value="expensive">Від дорогих</option>
        <option value="rating">За рейтингом</option>
      </select>

      <label>Модель:</label>
      <input
        type="text"
        name="model"
        onChange={formik.handleChange}
        value={formik.values.model}
      />

      <div style={{ textAlign: 'end' }}>
        <button type="submit">Знайти</button>
      </div>
    </form>
  );
};

const styles = {
  form: {
    width: '50%',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f2f2f2',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  title: {
    textAlign: 'center',
  },
  checkboxGroup: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
};

export default SearchForm;
