import React from 'react';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';

export default function App() {
  return (
    <div style={{ maxWidth: 600, margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>React Forms Demo</h1>

      <section>
        <h2>Контролируемая форма</h2>
        <ControlledForm />
      </section>

      <hr />

      <section>
        <h2>Неконтролируемая форма</h2>
        <UncontrolledForm />
      </section>
    </div>
  );
}
