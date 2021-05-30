import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
//import StaticContext from './context/SuperheroesContext';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Switch>
          <Route path="/login" component={LoginPage} exact />
          <PrivateRoute path="/" component={HomePage} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
/*

*/
