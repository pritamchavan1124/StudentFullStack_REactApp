//import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import StudentDetails from './components/StudentDetails';
function App() {
  return (
    <div>
      
     <Header></Header>
      <Router>
        <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/StudentDetails" component={StudentDetails}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App
