import './App.css'
import Header from './components/common/header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Switch><Route path='/' Component={Homepages} /></Switch> */}
      </Router>
    </>
  )
}

export default App;
