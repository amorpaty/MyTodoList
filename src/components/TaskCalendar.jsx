import React, { useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import TaskHeader from './TaskHeader';
import TaskBody from './TaskBody';
// import FloatingBotton from './FloatingBotton';

export default function TaskCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNavigate = (action, newDate) => {
    if (action === 'DATE') {
      setCurrentDate(newDate);
    } else if (action === 'TODAY') {
      setCurrentDate(new Date());
    }
  };

  return (
    <div className="relative">
      <TaskHeader label="" date={currentDate} onNavigate={handleNavigate} />
       {/* 📋 할 일 목록 */}
    </div>
  );
}
