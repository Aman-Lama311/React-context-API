import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Header = () => {
const data = useContext(DataContext)
  return (
    <div>
      age {data.age}
    </div>
  )
}

export default Header
