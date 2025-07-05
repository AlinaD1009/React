import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required("Ім'я обов'язкове"),
  email: Yup.string().email('Невірна пошта').required('Пошта обовʼязкова'),
  message: Yup.string().min(10, 'Мінімум 10 символів').required('Обовʼязково'),
});

export default function Forms() {
  return (
    <div>
      <h2>Форма з Formik + Yup</h2>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }}
      >
        <Form>
          <div>
            <label>Ім’я</label>
            <Field name="name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label>Пошта</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label>Повідомлення</label>
            <Field name="message" as="textarea" />
            <ErrorMessage name="message" component="div" />
          </div>

          <button type="submit">Надіслати</button>
        </Form>
      </Formik>
    </div>
  );
}
