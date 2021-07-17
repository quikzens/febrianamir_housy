import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useGet } from '../hooks/useGet'

import ListRoom from '../components/ListRoom/ListRoom'

function MyHouses() {
  const { userState } = useContext(UserContext)
  const [houses, setHouses] = useState(null)
  const { data: dataHouses } = useGet(`/houses?ownerId=${userState.id}`)

  useEffect(() => {
    setHouses(dataHouses)
    return () => {
      setHouses(null)
    }
  }, [dataHouses])

  if (!houses) {
    return <p>Loading...</p>
  }
  return <ListRoom houses={houses} />
}

export default MyHouses
