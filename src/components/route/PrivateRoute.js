import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

/**
 * Wrapper component to protect particular route
 * we use conditional rendering base on state to check
 * if there is user login or not
 * if login: render Component
 * if not: redirect to home path
 */
function PrivateRoute({ component: Component, ...rest }) {
  const { userState } = useContext(UserContext)

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          userState.username ? <Component {...props} /> : <Redirect to='/' />
        }
      />
    </>
  )
}

export default PrivateRoute
