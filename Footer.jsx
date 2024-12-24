import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Footer = () => {
    const data = useContext(DataContext)
  return (
    <div>
      Profession {data.profession}
    </div>
  )
}

export default Footer
