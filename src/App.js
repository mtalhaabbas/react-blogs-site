// import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import About from './components/About';
import Travel from './components/Travel';
import Health from './components/Health';
import Home from './components/Home';
import Page404 from './components/Page404';
import {Switch,Route } from 'react-router'
import Technology from './components/Technology';
import Blog from './components/Blog';


function App() {
  return (
  <>
    
     <Header/>
<Switch>
<Route exact path='/' component={Home} />  
<Route exact path='/about-us' component={About} />
<Route exact path="/travel" component={Travel} />
<Route exact path="/health" component={Health} />
<Route exact path="/technology" component={Technology} />
<Route exact path="/:name" component={Blog} />
<Route path="*" component={Page404}/>

</Switch>
<Footer/>
</>
  );
}

export default App;
