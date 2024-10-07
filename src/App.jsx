import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Dashbaord from './pages/dashbaord';
import UserList from './pages/user';
import Login from './pages/auth/login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashbaord />} />
            <Route path="/user" element={<UserList />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
