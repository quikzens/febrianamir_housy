import { useContext, useEffect } from 'react'
import HomeTenant from '../components/HomeTenant'
import { UserContext } from '../UserContext'


const Home = (props) => {
  const { userState } = useContext(UserContext)

  const {
    handleSignInOfApp,
    handleSignUpOfApp,
    handleLogOutOfApp
  } = props

  useEffect(() => {
    console.log(userState)
  }, [])
  
  return (
    <>
      {userState.status === 'owner' ? (
        <h1>Ups, not tenant</h1>
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