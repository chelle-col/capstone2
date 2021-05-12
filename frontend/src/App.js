import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar/NavBar';
import SignUp from './formComponents/SignUp';
import Signin from './formComponents/Signin';
import MonsterDetail from './monster/MonsterDetail';
import UserPage from './UserPage';
import { useSelector } from 'react-redux';

function App() {

  const user = useSelector( st => st.user );
  const hasUser = user.token !== undefined;

  const [ errors, login, signup ] = useAuthApi();

  return (
    <>
    <NavBar hasUser={hasUser} user={user}/>
    <Switch>
      <Route exact path='/'>
        <Home hasUser={hasUser}/>
      </Route>
      <Route exact path='/signup'>
        <SignUp error={errors} signup={signup}/>
      </Route>
      <Route exact path='/login'>
        <Signin errors={errors} login={login}/>
      </Route>
      <Route path='/:username'>
        <UserPage />
      </Route>
      <Route path='/:monster'>
        <MonsterDetail />
      </Route>
    </Switch>
    </>
  )
}

export default App;
