import './App.css'
import TaskCalendar from './components/TaskCalendar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskRegistration from './components/TaskRegistration';

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<TaskCalendar />} />
        <Route path="/task-registration" element={<TaskRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;