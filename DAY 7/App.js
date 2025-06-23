import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
function App() {

  return (
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/abc" element={<Dashboard />} />
    </Routes>
  );
}

export default App;