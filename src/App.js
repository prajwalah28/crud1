import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './Create';
import Update from './Update';
import Read from './Read';


function App() {
 
 
  return (
    <>
<div className="App">
     <h1>Crud Operation</h1>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/create' element={<Create/>}> </Route>
        <Route path='/update/:id' element={<Update/>}> </Route>
        <Route path='/read/:id' element={<Read/>}> </Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
