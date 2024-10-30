import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Lists from './pages/Lists';

function App(){
  reutrn(
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path='/signup' component = {Signup}/>
        <Route path='/lists' component = {Lists}/>
      </Switch>
    </Router>
  )
}


export default App;