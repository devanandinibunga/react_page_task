import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import { Navbar } from './components/views/Navbar/Navbar'
import {Docs} from './components/views/Docs-Component/Docs'
import { Tutorial } from './components/views/TutorialComponent/Tutorial';
import {Blog} from "./components/views/Blog-Component/Blog"
import {Community} from './components/views/CommunityComponent/Community'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route exact path= "/" component = {Docs}/>
      <Route exact path = "/tutorial" component={Tutorial}/>
      <Route exact path = "/blog" component={Blog}/>
      <Route exact path= "/community" component = {Community}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
