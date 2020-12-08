import React from 'react'
import Footer from './component/navigation/Footer'
import Header from './component/navigation/Header'
import Account from './component/Account/Account'
import Employees from './component/Employees'
const App = ()=>{
  return (
    <div className="app">
      <Header />
      <Employees />
      <Account />
      <Footer />
    </div>
  )
}

export default App;
