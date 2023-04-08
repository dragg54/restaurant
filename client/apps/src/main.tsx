import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import ModelContextProvider from './contexts/ModelContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModelContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModelContextProvider>
  </React.StrictMode>,
)
