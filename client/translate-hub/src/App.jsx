import { useState } from 'react'
import Header from './components/Header'
import './styles/App.scss'

function App() {

  return (
    <>
      <Header />
      <div className="container">
          <div className="title">
            <h1>Translate Hub</h1>
          </div>

        <div className="btn">
          <button>Let's Go</button>
        </div>
      </div>
    </>
  );
}

export default App
