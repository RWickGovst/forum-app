import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//pages for router
// import Delete from './pages/Delete';
import FindId from './pages/FindId';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/find' component={FindId} />
        {/* <Route exact path='/delete/:id' component={Delete} /> */}
​
      </Router>
    </div>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Home from './pages/Home'