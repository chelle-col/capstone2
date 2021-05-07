import './App.css';
import { Switch, Route } from 'react-router-dom';
import UserLanding from './UserLanding';
import NavBar from './NavBar/NavBar';
import Login from './Login';
import SignUp from './SignUp';
import MonsterDetail from './monster/MonsterDetail';

function App() {

  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path='/'>
        <UserLanding />
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='/signup'>
        <SignUp />
      </Route>
      <Route path='/:monster'>
        <MonsterDetail />
      </Route>
    </Switch>
    </>
  )
}

export default App;
