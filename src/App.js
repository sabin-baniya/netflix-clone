import { Home, SignIn, SignUp, Browse } from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />} ></Route>
        <Route exact path={ROUTES.BROWSE} element={<Browse />} ></Route>
        <Route exact path={ROUTES.SIGN_IN} element={<SignIn />} ></Route>
        <Route exact path={ROUTES.SIGN_UP} element={<SignUp />} ></Route>
      </Routes>
    </Router>
  )
}

export default App