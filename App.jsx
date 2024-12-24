import React, { useContext } from 'react'
import Header from './component/Header'
import Section from './component/Section'
import Footer from './component/Footer'
import { DataContext } from './context/UserContext'

const App = () => {
const data = useContext(DataContext)
console.log(data)
  return (
    <div>
      This is {data.username}
      <Header />
      <Section />
      <Footer />
    </div>
  )
}

export default App
