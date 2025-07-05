import React from 'react'
import RegistrationForm from './components/RegistrationForm'
import SearchForm from './components/SearchForm'

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Мой проект</h1>
      <RegistrationForm />
      <hr style={{ margin: '40px 0' }} />
      <SearchForm />
    </div>
  )
}

export default App
