import React from 'react';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function TaskHeader({ label, onNavigate, date }) {
  const start = moment(date).startOf('isoWeek'); // 현재 주의 시작(월요일) 가져오기
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(start.clone().add(i, 'days'));
  }

  const titleLabel = moment(date).format('YYYY년 M월');

  // ▶ 다음 주 이동
  const handleNextWeek = () => {
    const nextWeekDate = moment(date).add(7, 'days').toDate();
    onNavigate('DATE', nextWeekDate);
  };

  // ◀ 이전 주 이동
  const handlePrevWeek = () => {
    const prevWeekDate = moment(date).subtract(7, 'days').toDate();
    onNavigate('DATE', prevWeekDate);
  };

  // 날짜 버튼 클릭 시 해당 날짜 선택
  const handleDayClick = (dayMoment) => {
    onNavigate('DATE', dayMoment.toDate());
  };

  // 🛠 요일 포맷 변환 시 문자열을 숫자로 변환 (문제 해결)
  const setDayFormat = (day) => {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return days[parseInt(day, 10)];
  };

  return (
    <div className="relative">
      <div className="p-4 bg-white shadow-md">
        <div className="flex md:flex-row items-center justify-between gap-4">
          {/* 이전/다음 주 네비게이션 */}
          <div className="flex items-center gap-2">
            <button
              className="bg-blue-500 text-white w-8 h-8 rounded hover:bg-blue-600 transition duration-200 shadow-lg flex items-center justify-center"
              onClick={handlePrevWeek}
            >
              ◀
            </button>
            <button
              className="bg-blue-500 text-white w-8 h-8 rounded hover:bg-blue-600 transition duration-200 shadow-lg flex items-center justify-center"
              onClick={handleNextWeek}
            >
              ▶
            </button>
          </div>

          {/* 현재 월/년 표시 */}
          <h2 className="text-xl font-bold">{titleLabel}</h2>

          {/* 오늘 날짜로 이동 */}
          <button
            className="bg-blue-500 text-white w-20 h-8 rounded hover:bg-blue-600 transition duration-200 shadow-lg"
            style={{ lineHeight: 0 }}
            onClick={() => handleNavigate('TODAY')}
          >
            오늘
          </button>
        </div>

        {/* 날짜 선택 버튼 (요일 + 날짜) */}
        <div className="mt-4 flex overflow-x-auto space-x-2">
          {days.map((day, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-sm font-medium">{setDayFormat(day.format('d'))}</span>
              <button
                className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-yellow-600 transition-colors duration-200"
                onClick={() => handleDayClick(day)}
              >
                {day.format('DD')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
