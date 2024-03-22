import React from 'react'
import ReactDOM from 'react-dom/client'
import TelaLogin from './pages/Login/telaLogin.js'
import TelaPainel from './pages/Painel/telaPainel.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <TelaLogin />
  },
  {
    path: "/painel",
    element: <TelaPainel />
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

