import React from 'react';

export default function FloatingBotton() {
  return (
    <button
      className="fixed bottom-16 right-4 bg-green-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition duration-200"
      onClick={() => alert('할 일 추가')}
    >
      +
    </button>
  );
}
