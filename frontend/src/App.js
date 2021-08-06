import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import NavBar from './Components/NavBar/NavBar';
import SignUp from './Components/formComponents/SignUp';
import Signin from './Components/formComponents/Signin';
import MonsterDetail from './MonsterDetail';
import UserPage from './UserPage';
import EncounterRunner from './EncounterRunner';
import { useSelector } from 'react-redux';
import useAuth from './hooks/useAuth';
import * as route from './routes';

function App() {

  const user = useSelector( st => st.user );
  const hasUser = user.token !== undefined;

  const [ errors, login, signup ] = useAuth();

  return (
    <>
    <NavBar hasUser={hasUser} user={user}/>
    <Switch>
      <Route exact path={route.HOME}>
        <Home hasUser={hasUser}/>
      </Route>
      <Route exact path={route.SIGNUP}>
        <SignUp error={errors} signup={signup}/>
      </Route>
      <Route exact path={route.LOGIN}>
        <Signin errors={errors} login={login}/>
      </Route>
      <Route path={route.MONSTER + '/:monster'}>
        <MonsterDetail />
      </Route>
      <Route path={route.USER + '/:username'}>
        { hasUser ? <UserPage /> : <Redirect to='/'/>}
      </Route>
      <Route path={route.RUN}>
        <EncounterRunner />
      </Route>
      <Route>
        <Redirect to='/'/>
      </Route>
    </Switch>
    </>
  )
}

export default App;
