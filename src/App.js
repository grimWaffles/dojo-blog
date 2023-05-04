import Navbar from './components/Navbar';
import BlogDetails from './views/BlogDetails';
import Create from './views/Create';
import Home3 from './views/Home3';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  //Write JS here
  // const title = 'Welcome to the new blog'
  // const likes = 50
  //End JS 
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <h1>{title}</h1>
        <p>liked {likes} times</p> */}
          <Switch>
            <Route exact path="/"><Home3/></Route>
            <Route exact path="/create"><Create/></Route>
            <Route exact path="/blogs/:id"><BlogDetails/></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
