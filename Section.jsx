import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'


const Section = () => {
    const data = useContext(DataContext)
  return (
    <div>
     city {data.city}
    </div>
  )
}

export default Section
