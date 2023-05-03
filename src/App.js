import Navbar from './components/Navbar';
import Home from './views/Home';
import Home2 from './views/Home2';
function App() {
  //Write JS here
  // const title = 'Welcome to the new blog'
  // const likes = 50
  //End JS 
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        {/* <h1>{title}</h1>
        <p>liked {likes} times</p> */}
        <Home2/>
      </div>
    </div>
  );
}

export default App;
