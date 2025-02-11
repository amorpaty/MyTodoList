import React from 'react';
import TaskCategory from './TaskCategory';

export default function TaskBody({ currentDate }) {
    const [tasks, setTasks] = useState([
      {
        category: '퇴근 후 루틴',
        completed: 1,
        total: 2,
        items: [
          { id: 1, text: '사이드 프로젝트 진행', done: true },
          { id: 2, text: '유튜브 동영상 보기', done: false },
        ],
      },
      {
        category: '자기 전 체크',
        completed: 3,
        total: 3,
        items: [
          { id: 3, text: '일기쓰기', done: true },
          { id: 4, text: '내일 계획 세우기', done: true },
          { id: 5, text: '가계부 작성', done: true },
        ],
      },
    ]);
  
    return (
      <div className="p-4">
        {tasks.map((task, index) => (
          <TaskCategory key={index} category={task} />
        ))}
      </div>
    );
}