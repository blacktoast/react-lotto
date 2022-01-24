import React from "react";

function CommomBtn({ onClick, children }) {
  return (
    <button
      type="button"
      class="bg-cyan-500/80 rounded-md shadow-sm text-white p-1 shadow-zinc-400 mr-2  backdrop-blur-md w-20 flex-1 mt-0"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CommomBtn;
