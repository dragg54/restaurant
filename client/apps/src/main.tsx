import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import ModelContextProvider from './contexts/ModalContext'
import { ItemContextProvider } from './contexts/ItemContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ItemContextProvider>
      <ModelContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModelContextProvider>
    </ItemContextProvider>
  </React.StrictMode>,
)
