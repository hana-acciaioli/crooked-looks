import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home.js';
import NavBar from './components/NavBar/NavBar.js';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route exact-path="/" component={Home} />
        <Route path="/auth/:type" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
