import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { UserContextProvider } from './contexts/UserContext'

import Home from './pages/Home'
import Header from './components/Header/Header'
import DetailProperty from './pages/DetailProperty'
import MyHouses from './pages/MyHouses'
import AddProperty from './pages/AddProperty'
import Profile from './pages/Profile'
import Booking from './pages/Booking'
import History from './pages/History'
import PrivateRoute from './components/route/PrivateRoute'

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <PrivateRoute exact path='/booking' component={Booking} />
          <PrivateRoute exact path='/history' component={History} />
          <PrivateRoute exact path='/profile/:username' component={Profile} />
          <Route path='/detail/:id'>
            <Header />
            <DetailProperty />
          </Route>
          <PrivateRoute exact path='/addproperty' component={AddProperty} />
          <PrivateRoute exact path='/myhouses' component={MyHouses} />
          <Route path='*'>
            <h1>Sorry, this page doesn't exist</h1>
            <Link to='/'>Back to home</Link>
          </Route>
        </Switch>
      </Router>
    </UserContextProvider>
  )
}

export default App
