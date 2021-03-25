import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Home'
import Result from './Result'
function App() {

  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path='/' exact>
                <Home/>
            </Route>
            <Route path='/search'>
                <Result/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
