import './App.css';
import { Switch, Route } from 'react-router-dom';
import UserLanding from './UserLanding';
import NavBar from './NavBar/NavBar';
import SignUp from './formComponents/SignUp';
import Signin from './formComponents/Signin';
import MonsterDetail from './monster/MonsterDetail';

function App() {

  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path='/'>
        <UserLanding />
      </Route>
      <Route exact path='/signup'>
        <SignUp />
      </Route>
      <Route exact path='/login'>
        <Signin />
      </Route>
      <Route path='/:monster'>
        <MonsterDetail />
      </Route>
    </Switch>
    </>
  )
}

export default App;
