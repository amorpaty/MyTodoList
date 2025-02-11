import React from 'react';
export default function TaskCategory({ category }) {
  return (
    <div className="mb-4">
      {/* 카테고리 헤더 */}
      <div className="flex justify-between items-center bg-gray-200 p-3 rounded-md shadow-md">
        <h3 className="font-bold text-lg">{category.category}</h3>
        <span className="text-sm text-gray-500">
          {category.completed}/{category.total}
        </span>
      </div>

      {/* 개별 할 일 항목 */}
      <div className="mt-2">
        {/* {category.items.map((task) => (
          //<TaskItem key={task.id} task={task} />
        ))} */}
      </div>
    </div>
  );
}
