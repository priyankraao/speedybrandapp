import './App.css';
import Categories from './Categories';
import {Route, Routes} from "react-router-dom";
import BlogEditor from './Categories/components/Topics/BlogEditor';
import Blog from './Categories/components/Topics/Blog';
import Footer from './Common/Footer';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' Component={Categories} /> 
          <Route exact path ='/BlogEditor' Component={BlogEditor}/>
          <Route exact path='/blog' component={Blog} />
        </Routes>
     <Footer/>
    </div>
  );
}

export default App;
