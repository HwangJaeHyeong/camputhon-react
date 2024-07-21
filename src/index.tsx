import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import { PRIMARY_COLOR } from 'constants/system/default'
import { DeliveryDetailPage } from 'pages/Delivery/detail'
import { MainPage } from 'pages/Main'
import { RequestInfoPage } from 'pages/Request/Info'
import { UserJoinPage } from 'pages/User/Join'
import { UserLoginPage } from 'pages/User/Login'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const theme = {
  token: {
    colorPrimary: PRIMARY_COLOR,
    fontFamily: 'Jua, sans-serif',
  },
}

root.render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/user/join" element={<UserJoinPage />} />
          <Route path="/user/login" element={<UserLoginPage />} />
          <Route path="/request/info" element={<RequestInfoPage />} />
          <Route path="/delivery/detail" element={<DeliveryDetailPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
)
