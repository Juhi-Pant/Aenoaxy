import Navbar from './Components/Navbar'
import PageName from './Components/PageName'
import MainPage from './Components/MainPage'
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <PageName Title={"Organization Settings"}/>
      <MainPage/>
    </div>
  );
}

export default App;
