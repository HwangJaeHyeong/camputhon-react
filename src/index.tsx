import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import { PRIMARY_COLOR } from 'constants/system/default'
import { MainPage } from 'pages/Main'
import { UserJoinPage } from 'pages/User/Join'
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
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
)
