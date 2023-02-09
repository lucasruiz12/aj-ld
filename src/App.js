import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Landing from './Pages/Landing';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Landing />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
