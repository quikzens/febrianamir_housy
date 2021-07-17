import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

import HomeTenant from '../components/Home/HomeTenant'
import HomeOwner from '../components/Home/HomeOwner'

function Home() {
  const { userState } = useContext(UserContext)

  return (
    <>
      {userState?.listAs === 'owner' ? (
        <HomeOwner userState={userState} />
      ) : (
        <HomeTenant />
      )}
    </>
  )
}

export default Home
