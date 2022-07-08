import React from 'react'
import ReactDOM from 'react-dom/client'
import CountryGame from './CountryGame'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CountryGame data={{ Germany: "Berlin", Azerbaijan: "Baku", France: "Paris", England: "London", Greece: "Athens" }} />
  </React.StrictMode>
)
