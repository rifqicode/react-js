import React from 'react';
import { BrowserRouter, Link, Route , Switch} from 'react-router-dom';
import Learning from './learning/Learning.js';
import Home from './home/Home.js';
import NotFound from './404/404.js';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/feedback'> Feedback </Link> </li>
          </nav>

          <main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/feedback' exact component={Learning} />
              <Route component={NotFound}></Route>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
