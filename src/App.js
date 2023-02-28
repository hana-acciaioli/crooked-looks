import './App.css';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home.js';
import NavBar from './components/NavBar/NavBar.js';
import VideoList from './components/Video/VideoList.js';
import ShowList from './components/Shows/ShowList.js';
import Social from './components/Layout/Footer/Social.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/watch" component={VideoList} />
        <Route exact path="/shows" component={ShowList} />
        <Route path="/auth/:type" component={Auth} />
      </Switch>
      <Social />
    </div>
  );
}

export default App;
