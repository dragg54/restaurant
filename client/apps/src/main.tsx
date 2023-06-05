import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import ModelContextProvider from './contexts/ModalContext'
import { ItemContextProvider } from './contexts/ItemContext'
import AuthContextProvider from './contexts/AuthContext'
import { FormItemContext, FormItemContextProvider } from './contexts/FormItemContext'
import { CartContextProvider } from './contexts/CartContext'
import ScrollToTop from './components/ScrollToTop'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CartContextProvider>
    <AuthContextProvider>
      <ItemContextProvider>
        <ModelContextProvider>
          <FormItemContextProvider>
            <BrowserRouter>
            <ScrollToTop>
              <App />
            </ScrollToTop>
            </BrowserRouter>
          </FormItemContextProvider>
        </ModelContextProvider>
      </ItemContextProvider>
    </AuthContextProvider>
  </CartContextProvider>
)
