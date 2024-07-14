import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Notes from './Notes';
import Create from './Create';
import GradientCard from './GradientCard';
import Buttons from './Buttons';
import CustomButton from './CustomButton';
import MyForm from './MyForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/create' element={<Create />} />
        <Route path='/' element={<Notes />} />
        <Route path='/card' element={<GradientCard />} />
        <Route path="/button" element={<Buttons/>} />
        <Route path="/custom" element={<CustomButton/>} />
        <Route path="/form" element={<MyForm/>} />
     
      </Routes>
    </Router>
  );
}

export default App;
