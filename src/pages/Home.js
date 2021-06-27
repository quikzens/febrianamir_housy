import { useContext, useEffect } from 'react'
import { UserContext } from '../UserContext'

import HomeTenant from '../components/HomeTenant'
import HomeOwner from '../components/HomeOwner'


const Home = (props) => {
  const { userState } = useContext(UserContext)

  const {
    handleSignInOfApp,
    handleSignUpOfApp,
    handleLogOutOfApp
  } = props

  useEffect(() => {
    console.log(userState.status)
  }, [])
  
  return (
    <>
      {userState.status === 'owner' ? (
        <HomeOwner userState={userState} />
      ) : (
        <HomeTenant 
          userState={userState} 
          handleSignInOfApp={handleSignInOfApp} 
          handleSignUpOfApp={handleSignUpOfApp} 
          handleLogOutOfApp={handleLogOutOfApp}
        />
      )}   
    </> 
  )
}

export default Home