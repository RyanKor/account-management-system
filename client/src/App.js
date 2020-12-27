import React from 'react'
// scss
import './scss/app.scss'
// Component 호출
import Header from './component/navigation/Header'
import Footer from './component/navigation/Footer'
import Sidebar from './component/navigation/Sidebar'
const App = ()=>{
  return (
    <div className="app">
      <Header />
      <Footer />
    </div>
  )
}

export default App;
