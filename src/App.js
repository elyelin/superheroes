import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import { SuperHeroesContextProvider } from './context/SuperHeroesContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import SuperheroPage from './pages/SuperheroPage';

function App() {
  return (
    <SuperHeroesContextProvider>
      <Router>
        <Header />
        <div className="container mt-4">
          <Switch>
            <Route path="/login" component={LoginPage} exact />
            <PrivateRoute path="/" component={HomePage} exact />
            <PrivateRoute path="/search" component={SearchPage} exact />
            <PrivateRoute path="/superhero/:id" component={SuperheroPage} />
          </Switch>
        </div>
      </Router>
      <Toaster />
    </SuperHeroesContextProvider>
  );
}

export default App;
