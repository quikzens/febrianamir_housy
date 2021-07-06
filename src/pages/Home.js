import { useContext } from 'react'
import { UserContext } from '../UserContext'

import HomeTenant from '../components/HomeTenant'
import HomeOwner from '../components/HomeOwner'

const Home = (props) => {
  const { userState } = useContext(UserContext)

  return (
    <>
      {userState.status === 'owner' ? (
        <HomeOwner userState={userState} />
      ) : (
        <HomeTenant />
      )}
    </>
  )
}

export default Home
