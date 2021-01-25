
import './App.css';
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Overview from './pages/Overview'
import {Reports,ReportsOne,ReportsTwo} from './pages/Reports'

function App() {
  return (
   <>
   <Router> 
   <Sidebar />

     <Switch>
       <Route path="/Overview" exact component={Overview}/>
       <Route path="/reports" exact component={Reports}/>
       <Route path="/reports/reports1" exact component={ReportsOne}/>
       <Route path="/reports/reports2" exact component={ReportsTwo}/>
     </Switch>

     </Router>
   </>
  );
}
export default App;
