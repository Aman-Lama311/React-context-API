import React, { createContext } from 'react'
export const DataContext = createContext()

const UserContext = ({children}) => {

const userData = {
    username:'Sangita Magar',
    age:22,
    city:'Kathmandu',
    profession:'Teacher'
}

  return (
    <div>
        <DataContext.Provider value={userData}>
         {children}
        </DataContext.Provider>
      
    </div>
  )
}

export default UserContext
