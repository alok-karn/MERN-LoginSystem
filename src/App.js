
import './App.scss';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
// import BaseLogin from './components/imports/BaseLogin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
   
          <BrowserRouter>
            <Switch>

              <Route exact path="/" component={Home}>
                </Route>
              <Route path="/login" component={Login}>
                </Route>
              <Route path="/register" component={Register}>
                </Route>
            </Switch>
    </BrowserRouter>
    
  );
}

export default App;
