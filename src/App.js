
import './App.css';
import Dashboard from './Components/Dashboard';
import SideNavbar from './Components/SideNavbar';
import TopNavbar from './Components/TopNavbar';

function App() {
  return (
    <div className="App">
<TopNavbar/>
<div className='flex flex-row'>
  <SideNavbar />
  <Dashboard/>
  </div>

    </div>
  );
}

export default App;
