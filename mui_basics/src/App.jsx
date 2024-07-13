import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Notes from './Notes';
import Create from './Create';
import GradientCard from './GradientCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/create' element={<Create />} />
        <Route path='/' element={<Notes />} />
        <Route path='/card' element={<GradientCard />} />
      </Routes>
    </Router>
  );
}

export default App;
