import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resources from './pages/Resources.js';
import Saturday from './pages/Saturday.js';
import Sunday from './pages/Sunday.js';
import Train from './pages/Train.js';
import Tram from './pages/Tram.js';
import Weekdays from './pages/Weekdays.js';
import Bus from './pages/Bus.js';
import BusSched from './pages/BusSched.js';
import TrainSched from './pages/TrainSched.js';
import NotFound from './pages/NotFound.js';

function App() {
  return (
    <Router>
      <div className="content">
        <Routes>
          <Route exact path ="/" element={<Home />} />
          <Route path ="/bus" element={<Bus />} />
          <Route path ="/tram" element={<Tram />} />
          <Route path ="/train" element={<Train />} />
          <Route path ="/trainSchedules" element={<TrainSched />} />
          <Route path ="/busSchedules" element={<BusSched />} />
          <Route path ="/resources" element={<Resources />} />
          <Route path ="/weekdaysBusSchedules" element={<Weekdays />} />
          <Route path ="/saturdayBusSchedules" element={<Saturday />} />
          <Route path ="/sundayBusSchedules" element={<Sunday />} />
          <Route path ="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
