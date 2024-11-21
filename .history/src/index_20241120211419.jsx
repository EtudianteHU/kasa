import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/index'
import Home from './pages/home/index'
import About from './pages/about/index'
import Error from './pages/error/index'
import Footer from './components/footer/index'
import StyledGlobalStyle from './utils/style/globalStyle'

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Router>
      <StyledGlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
