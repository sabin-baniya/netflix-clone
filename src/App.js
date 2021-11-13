import { Home, SignIn, SignUp, Browse } from './pages';
import { Route } from 'react-router-dom';
import * as ROUTES from './constants/routes'

const App = () => {
  return (
    <>
      <Route exact path={ROUTES.HOME} ><Home /> </Route>
      <Route exact path={ROUTES.BROWSE}><Browse /> </Route>
      <Route exact path={ROUTES.SIGN_IN} ><SignIn /> </Route>
      <Route exact path={ROUTES.SIGN_UP} ><SignUp /> </Route>
    </>
  )
}

export default App