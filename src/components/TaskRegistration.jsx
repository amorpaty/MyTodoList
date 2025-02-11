import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TaskRegistration() {
  const navigate = useNavigate();
  
  // 기존 localStorage 데이터 불러오기
  const getStoredTasks = () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : []; // 데이터가 없으면 빈 배열 반환
  };

  const [tasks, setTasks] = useState(getStoredTasks); // 저장된 할 일 목록
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "normal",
    repeat: "none",
    repeatInterval: "",
    alarmEnabled: false,
    alarmTime: "",
  });

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // 할 일 저장 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTasks = [...tasks, task]; // 기존 목록에 새 할 일 추가
    setTasks(updatedTasks); // 상태 업데이트
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // localStorage에 저장
    navigate("/"); // 등록 후 메인 페이지 이동
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-center text-lg font-semibold text-gray-800 mb-6">
          새로운 할 일
        </h2>

        {/* 제목 입력 */}
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
          placeholder="제목을 입력하세요"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />

        {/* 설명 입력 */}
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          required
          rows="3"
          placeholder="할 일 설명을 입력하세요"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        ></textarea>

        {/* 마감일 입력 */}
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />

        {/* 우선순위 선택 */}
        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="low">낮음</option>
          <option value="normal">보통</option>
          <option value="high">높음</option>
        </select>

        {/* 반복 설정 */}
        <select
          name="repeat"
          value={task.repeat}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="none">반복 없음</option>
          <option value="daily">매일</option>
          <option value="weekly">매주</option>
          <option value="monthly">매월</option>
          <option value="custom">사용자 지정</option>
        </select>

        {/* 사용자 지정 반복 간격 */}
        {task.repeat === "custom" && (
          <input
            type="number"
            name="repeatInterval"
            value={task.repeatInterval}
            onChange={handleChange}
            placeholder="반복 간격 (일)"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        )}

        {/* 알림 설정 */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="alarmEnabled"
            checked={task.alarmEnabled}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
          />
          <label className="ml-2 text-gray-700 text-sm">알림 설정</label>
        </div>

        {task.alarmEnabled && (
          <input
            type="time"
            name="alarmTime"
            value={task.alarmTime}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        )}

        {/* 제출 버튼 */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md font-semibold text-base hover:bg-blue-600 transition-all"
        >
          등록하기
        </button>
      </form>
    </div>
  );
}
