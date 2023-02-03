import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import VideoBackground from './components/Home/VideoBackground.js';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route exact-path="/" component={VideoBackground} />
        <Route path="/auth/:type" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
